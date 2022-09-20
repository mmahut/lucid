import { C, Core } from "../core/mod.ts";
import {
  coreToUtxo,
  createCostModels,
  fromHex,
  toHex,
  Utils,
  utxoToCore,
} from "../utils/mod.ts";
import {
  Address,
  Datum,
  Delegation,
  ExternalWallet,
  KeyHash,
  Network,
  OutRef,
  Payload,
  PrivateKey,
  Provider,
  RewardAddress,
  SignedMessage,
  Slot,
  SlotConfig,
  Transaction,
  TxHash,
  Unit,
  UTxO,
  Wallet,
  WalletApi,
} from "../types/mod.ts";
import { Tx } from "./tx.ts";
import { TxComplete } from "./tx_complete.ts";
import { discoverOwnUsedTxKeyHashes, walletFromSeed } from "../misc/wallet.ts";
import { signData, verifyData } from "../misc/sign_data.ts";
import { Message } from "./message.ts";
import { DEFAULT_SLOT_LENGTH, zeroTimeNetwork } from "../plutus/time.ts";

export class Lucid {
  txBuilderConfig!: Core.TransactionBuilderConfig;
  wallet!: Wallet;
  provider!: Provider;
  network: Network = "Mainnet";
  utils!: Utils;

  static async new(provider?: Provider, network?: Network): Promise<Lucid> {
    const lucid = new this();
    if (network) lucid.network = network;
    if (provider) {
      lucid.provider = provider;
      const protocolParameters = await provider.getProtocolParameters();
      const slotConfig: SlotConfig = {
        zeroTime: zeroTimeNetwork[lucid.network],
        slotLength: DEFAULT_SLOT_LENGTH,
      };
      lucid.txBuilderConfig = C.TransactionBuilderConfigBuilder.new()
        .coins_per_utxo_byte(
          C.BigNum.from_str(protocolParameters.coinsPerUtxoByte.toString()),
        )
        .fee_algo(
          C.LinearFee.new(
            C.BigNum.from_str(protocolParameters.minFeeA.toString()),
            C.BigNum.from_str(protocolParameters.minFeeB.toString()),
          ),
        )
        .key_deposit(
          C.BigNum.from_str(protocolParameters.keyDeposit.toString()),
        )
        .pool_deposit(
          C.BigNum.from_str(protocolParameters.poolDeposit.toString()),
        )
        .max_tx_size(protocolParameters.maxTxSize)
        .max_value_size(protocolParameters.maxValSize)
        .collateral_percentage(protocolParameters.collateralPercentage)
        .max_collateral_inputs(protocolParameters.maxCollateralInputs)
        .max_tx_ex_units(
          C.ExUnits.new(
            C.BigNum.from_str(protocolParameters.maxTxExMem.toString()),
            C.BigNum.from_str(protocolParameters.maxTxExSteps.toString()),
          ),
        )
        .ex_unit_prices(
          C.ExUnitPrices.from_float(
            protocolParameters.priceMem,
            protocolParameters.priceStep,
          ),
        )
        .slot_config(
          C.BigInt.from_str(slotConfig.zeroTime.toString()),
          slotConfig.slotLength,
        )
        .blockfrost(
          // Provider needs to be blockfrost in this case. Maybe we have better/more ways in the future to evaluate ex units
          C.Blockfrost.new(
            // deno-lint-ignore no-explicit-any
            (provider as any).data.url + "/utils/txs/evaluate",
            // deno-lint-ignore no-explicit-any
            (provider as any).data.projectId as string,
          ),
        )
        .costmdls(createCostModels(protocolParameters.costModels))
        .build();
    }
    lucid.utils = new Utils(lucid);
    return lucid;
  }

  newTx(): Tx {
    return new Tx(this);
  }

  fromTx(tx: Transaction): TxComplete {
    return new TxComplete(this, C.Transaction.from_bytes(fromHex(tx)));
  }

  /** Signs a message. Expects the payload to be Hex encoded. */
  newMessage(address: Address | RewardAddress, payload: Payload): Message {
    return new Message(this, address, payload);
  }

  /** Verify a message. Expects the payload to be Hex encoded. */
  verifyMessage(
    address: Address | RewardAddress,
    payload: Payload,
    signedMessage: SignedMessage,
  ): boolean {
    const { paymentCredential, stakeCredential, address: { hex: addressHex } } =
      this.utils.getAddressDetails(
        address,
      );
    const keyHash = paymentCredential?.hash || stakeCredential?.hash;
    if (!keyHash) throw new Error("Not a valid address provided.");

    return verifyData(addressHex, keyHash, payload, signedMessage);
  }

  currentSlot(): Slot {
    return this.utils.unixTimeToSlot(Date.now());
  }

  utxosAt(address: Address): Promise<UTxO[]> {
    return this.provider.getUtxos(address);
  }

  utxosAtWithUnit(address: Address, unit: Unit): Promise<UTxO[]> {
    return this.provider.getUtxosWithUnit(address, unit);
  }

  utxosByOutRef(outRefs: Array<OutRef>): Promise<UTxO[]> {
    return this.provider.getUtxosByOutRef(outRefs);
  }

  delegationAt(rewardAddress: RewardAddress): Promise<Delegation> {
    return this.provider.getDelegation(rewardAddress);
  }

  awaitTx(txHash: TxHash): Promise<boolean> {
    return this.provider.awaitTx(txHash);
  }

  async datumOf(utxo: UTxO): Promise<Datum> {
    if (utxo.datum) return utxo.datum;
    if (!utxo.datumHash) {
      throw new Error("This UTxO does not have a datum hash.");
    }
    utxo.datum = await this.provider.getDatum(utxo.datumHash);
    return utxo.datum;
  }

  /**
   * Cardano Private key in bech32; not the BIP32 private key or any key that is not fully derived.
   * Only an Enteprise address (without stake credential) is derived.
   */
  selectWalletFromPrivateKey(privateKey: PrivateKey): Lucid {
    const priv = C.PrivateKey.from_bech32(privateKey);
    const pubKeyHash = priv.to_public().hash();

    this.wallet = {
      // deno-lint-ignore require-await
      address: async (): Promise<Address> =>
        C.EnterpriseAddress.new(
          this.network === "Mainnet" ? 1 : 0,
          C.StakeCredential.from_keyhash(pubKeyHash),
        )
          .to_address()
          .to_bech32(undefined),
      // deno-lint-ignore require-await
      rewardAddress: async (): Promise<RewardAddress | null> => null,
      getUtxos: async (): Promise<UTxO[]> => {
        return await this.utxosAt(await this.wallet.address());
      },
      getUtxosCore: async (): Promise<Core.TransactionUnspentOutputs> => {
        const utxos = await this.utxosAt(await this.wallet.address());
        const coreUtxos = C.TransactionUnspentOutputs.new();
        utxos.forEach((utxo) => {
          coreUtxos.add(utxoToCore(utxo));
        });
        return coreUtxos;
      },
      // deno-lint-ignore require-await
      getDelegation: async (): Promise<Delegation> => {
        return { poolId: null, rewards: 0n };
      },
      // deno-lint-ignore require-await
      signTx: async (
        tx: Core.Transaction,
      ): Promise<Core.TransactionWitnessSet> => {
        const witness = C.make_vkey_witness(
          C.hash_transaction(tx.body()),
          priv,
        );
        const txWitnessSetBuilder = C.TransactionWitnessSetBuilder.new();
        txWitnessSetBuilder.add_vkey(witness);
        return txWitnessSetBuilder.build();
      },
      // deno-lint-ignore require-await
      signMessage: async (
        address: Address | RewardAddress,
        payload: Payload,
      ): Promise<SignedMessage> => {
        const { paymentCredential, address: { hex: hexAddress } } = this.utils
          .getAddressDetails(address);
        const keyHash = paymentCredential?.hash;

        const originalKeyHash = pubKeyHash.to_hex();

        if (!keyHash || keyHash !== originalKeyHash) {
          throw new Error(`Cannot sign message for address: ${address}.`);
        }

        return signData(hexAddress, payload, privateKey);
      },
      submitTx: async (tx: Core.Transaction): Promise<TxHash> => {
        return await this.provider.submitTx(toHex(tx.to_bytes()));
      },
    };
    return this;
  }

  selectWallet(api: WalletApi): Lucid {
    this.wallet = {
      address: async (): Promise<Address> =>
        C.Address.from_bytes(
          fromHex((await api.getUsedAddresses())[0]),
        ).to_bech32(undefined),
      rewardAddress: async (): Promise<RewardAddress | null> => {
        const [rewardAddressHex] = await api.getRewardAddresses();
        const rewardAddress = rewardAddressHex ??
          C.RewardAddress.from_address(
            C.Address.from_bytes(fromHex(rewardAddressHex)),
          )!
            .to_address()
            .to_bech32(undefined);
        return rewardAddress;
      },
      getUtxos: async (): Promise<UTxO[]> => {
        const utxos = ((await api.getUtxos()) || []).map((utxo) => {
          const parsedUtxo = C.TransactionUnspentOutput.from_bytes(
            fromHex(utxo),
          );
          return coreToUtxo(parsedUtxo);
        });
        return utxos;
      },
      getUtxosCore: async (): Promise<Core.TransactionUnspentOutputs> => {
        const utxos = C.TransactionUnspentOutputs.new();
        ((await api.getUtxos()) || []).forEach((utxo) => {
          utxos.add(C.TransactionUnspentOutput.from_bytes(fromHex(utxo)));
        });
        return utxos;
      },
      getDelegation: async (): Promise<Delegation> => {
        const rewardAddr = await this.wallet.rewardAddress();

        return rewardAddr
          ? await this.delegationAt(rewardAddr)
          : { poolId: null, rewards: 0n };
      },
      signTx: async (
        tx: Core.Transaction,
      ): Promise<Core.TransactionWitnessSet> => {
        const witnessSet = await api.signTx(toHex(tx.to_bytes()), true);
        return C.TransactionWitnessSet.from_bytes(fromHex(witnessSet));
      },
      signMessage: async (
        address: Address | RewardAddress,
        payload: Payload,
      ): Promise<SignedMessage> => {
        const hexAddress = toHex(C.Address.from_bech32(address).to_bytes());
        return await api.signData(hexAddress, payload);
      },
      submitTx: async (tx: Core.Transaction): Promise<TxHash> => {
        const txHash = await api.submitTx(toHex(tx.to_bytes()));
        return txHash;
      },
    };
    return this;
  }

  /**
   * Emulates a wallet by constructing it with the utxos and an address.
   * If utxos are not set, utxos are fetched from the provided address.
   */
  selectWalletFrom({
    address,
    utxos,
    rewardAddress,
  }: ExternalWallet): Lucid {
    const addressDetails = this.utils.getAddressDetails(address);
    this.wallet = {
      // deno-lint-ignore require-await
      address: async (): Promise<Address> => address,
      // deno-lint-ignore require-await
      rewardAddress: async (): Promise<RewardAddress | null> => {
        const rewardAddr = !rewardAddress && addressDetails.stakeCredential
          ? (() => {
            if (addressDetails.stakeCredential.type === "Key") {
              return C.RewardAddress.new(
                this.network === "Mainnet" ? 1 : 0,
                C.StakeCredential.from_keyhash(
                  C.Ed25519KeyHash.from_hex(
                    addressDetails.stakeCredential.hash,
                  ),
                ),
              )
                .to_address()
                .to_bech32(undefined);
            }
            return C.RewardAddress.new(
              this.network === "Mainnet" ? 1 : 0,
              C.StakeCredential.from_scripthash(
                C.ScriptHash.from_hex(addressDetails.stakeCredential.hash),
              ),
            )
              .to_address()
              .to_bech32(undefined);
          })()
          : rewardAddress;
        return rewardAddr || null;
      },
      getUtxos: async (): Promise<UTxO[]> => {
        return utxos ? utxos : await this.utxosAt(address);
      },
      getUtxosCore: async (): Promise<Core.TransactionUnspentOutputs> => {
        const coreUtxos = C.TransactionUnspentOutputs.new();
        (utxos ? utxos : await this.utxosAt(address)).forEach((utxo) =>
          coreUtxos.add(utxoToCore(utxo))
        );
        return coreUtxos;
      },
      getDelegation: async (): Promise<Delegation> => {
        const rewardAddr = await this.wallet.rewardAddress();

        return rewardAddr
          ? await this.delegationAt(rewardAddr)
          : { poolId: null, rewards: 0n };
      },
      // deno-lint-ignore require-await
      signTx: async (): Promise<Core.TransactionWitnessSet> => {
        throw new Error("Not implemented");
      },
      // deno-lint-ignore require-await
      signMessage: async (): Promise<SignedMessage> => {
        throw new Error("Not implemented");
      },
      submitTx: async (tx: Core.Transaction): Promise<TxHash> => {
        return await this.provider.submitTx(toHex(tx.to_bytes()));
      },
    };
    return this;
  }

  /**
   * Select wallet from a seed phrase (e.g. 15 or 24 words). You have the option to choose between a Base address (with stake credential)
   * and Enterprise address (without stake credential). You can also decide which account index to derive. By default account 0 is derived.
   */
  selectWalletFromSeed(
    seed: string,
    options: { addressType?: "Base" | "Enterprise"; accountIndex?: number } = {
      addressType: "Base",
      accountIndex: 0,
    },
  ): Lucid {
    const { address, rewardAddress, paymentKey, stakeKey } = walletFromSeed(
      seed,
      {
        addressType: options?.addressType,
        accountIndex: options?.accountIndex,
        network: this.network,
      },
    );

    const paymentKeyHash = C.PrivateKey.from_bech32(paymentKey).to_public()
      .hash().to_hex();
    const stakeKeyHash = stakeKey
      ? C.PrivateKey.from_bech32(stakeKey).to_public().hash().to_hex()
      : "";

    const privKeyHashMap = {
      [paymentKeyHash]: paymentKey,
      [stakeKeyHash]: stakeKey,
    };

    this.wallet = {
      // deno-lint-ignore require-await
      address: async (): Promise<Address> => address,
      // deno-lint-ignore require-await
      rewardAddress: async (): Promise<RewardAddress | null> =>
        rewardAddress || null,
      // deno-lint-ignore require-await
      getUtxos: async (): Promise<UTxO[]> => this.utxosAt(address),
      getUtxosCore: async (): Promise<Core.TransactionUnspentOutputs> => {
        const coreUtxos = C.TransactionUnspentOutputs.new();
        (await this.utxosAt(address)).forEach((utxo) =>
          coreUtxos.add(utxoToCore(utxo))
        );
        return coreUtxos;
      },
      getDelegation: async (): Promise<Delegation> => {
        const rewardAddr = await this.wallet.rewardAddress();

        return rewardAddr
          ? await this.delegationAt(rewardAddr)
          : { poolId: null, rewards: 0n };
      },
      signTx: async (
        tx: Core.Transaction,
      ): Promise<Core.TransactionWitnessSet> => {
        const utxos = await this.utxosAt(address);

        const ownKeyHashes: Array<KeyHash> = [paymentKeyHash, stakeKeyHash];

        const usedKeyHashes = discoverOwnUsedTxKeyHashes(
          tx,
          ownKeyHashes,
          utxos,
        );

        const txWitnessSetBuilder = C.TransactionWitnessSetBuilder.new();
        usedKeyHashes.forEach((keyHash) => {
          const witness = C.make_vkey_witness(
            C.hash_transaction(tx.body()),
            C.PrivateKey.from_bech32(privKeyHashMap[keyHash]!),
          );
          txWitnessSetBuilder.add_vkey(witness);
        });
        return txWitnessSetBuilder.build();
      },
      // deno-lint-ignore require-await
      signMessage: async (
        address: Address | RewardAddress,
        payload: Payload,
      ): Promise<SignedMessage> => {
        const {
          paymentCredential,
          stakeCredential,
          address: { hex: hexAddress },
        } = this.utils
          .getAddressDetails(address);

        const keyHash = paymentCredential?.hash || stakeCredential?.hash;

        const privateKey = privKeyHashMap[keyHash!];

        if (!privateKey) {
          throw new Error(`Cannot sign message for address: ${address}.`);
        }

        return signData(hexAddress, payload, privateKey);
      },
      submitTx: async (tx: Core.Transaction): Promise<TxHash> => {
        return await this.provider.submitTx(toHex(tx.to_bytes()));
      },
    };
    return this;
  }
}
