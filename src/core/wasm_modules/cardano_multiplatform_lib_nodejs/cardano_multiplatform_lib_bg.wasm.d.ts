/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_unitinterval_free(a: number): void;
export function unitinterval_to_bytes(a: number, b: number): void;
export function unitinterval_from_bytes(a: number, b: number): number;
export function unitinterval_to_json(a: number, b: number): void;
export function unitinterval_to_js_value(a: number): number;
export function unitinterval_from_json(a: number, b: number): number;
export function unitinterval_numerator(a: number): number;
export function unitinterval_denominator(a: number): number;
export function unitinterval_new(a: number, b: number): number;
export function unitinterval_from_float(a: number): number;
export function __wbg_transaction_free(a: number): void;
export function transaction_to_bytes(a: number, b: number): void;
export function transaction_from_bytes(a: number, b: number): number;
export function transaction_to_json(a: number, b: number): void;
export function transaction_to_js_value(a: number): number;
export function transaction_from_json(a: number, b: number): number;
export function transaction_body(a: number): number;
export function transaction_witness_set(a: number): number;
export function transaction_is_valid(a: number): number;
export function transaction_auxiliary_data(a: number): number;
export function transaction_set_is_valid(a: number, b: number): void;
export function transaction_new(a: number, b: number, c: number): number;
export function __wbg_transactioninputs_free(a: number): void;
export function transactioninputs_to_bytes(a: number, b: number): void;
export function transactioninputs_from_bytes(a: number, b: number): number;
export function transactioninputs_to_json(a: number, b: number): void;
export function transactioninputs_to_js_value(a: number): number;
export function transactioninputs_from_json(a: number, b: number): number;
export function transactioninputs_new(): number;
export function transactioninputs_len(a: number): number;
export function transactioninputs_get(a: number, b: number): number;
export function transactioninputs_add(a: number, b: number): void;
export function transactioninputs_sort(a: number): void;
export function __wbg_transactionoutputs_free(a: number): void;
export function transactionoutputs_to_bytes(a: number, b: number): void;
export function transactionoutputs_from_bytes(a: number, b: number): number;
export function transactionoutputs_to_json(a: number, b: number): void;
export function transactionoutputs_to_js_value(a: number): number;
export function transactionoutputs_from_json(a: number, b: number): number;
export function transactionoutputs_new(): number;
export function transactionoutputs_len(a: number): number;
export function transactionoutputs_get(a: number, b: number): number;
export function transactionoutputs_add(a: number, b: number): void;
export function __wbg_certificates_free(a: number): void;
export function certificates_to_bytes(a: number, b: number): void;
export function certificates_from_bytes(a: number, b: number): number;
export function certificates_to_json(a: number, b: number): void;
export function certificates_to_js_value(a: number): number;
export function certificates_from_json(a: number, b: number): number;
export function certificates_new(): number;
export function certificates_len(a: number): number;
export function certificates_get(a: number, b: number): number;
export function certificates_add(a: number, b: number): void;
export function __wbg_transactionbody_free(a: number): void;
export function transactionbody_to_bytes(a: number, b: number): void;
export function transactionbody_from_bytes(a: number, b: number): number;
export function transactionbody_to_json(a: number, b: number): void;
export function transactionbody_to_js_value(a: number): number;
export function transactionbody_from_json(a: number, b: number): number;
export function transactionbody_inputs(a: number): number;
export function transactionbody_outputs(a: number): number;
export function transactionbody_fee(a: number): number;
export function transactionbody_ttl(a: number): number;
export function transactionbody_set_certs(a: number, b: number): void;
export function transactionbody_certs(a: number): number;
export function transactionbody_set_withdrawals(a: number, b: number): void;
export function transactionbody_withdrawals(a: number): number;
export function transactionbody_set_update(a: number, b: number): void;
export function transactionbody_update(a: number): number;
export function transactionbody_set_auxiliary_data_hash(
  a: number,
  b: number,
): void;
export function transactionbody_auxiliary_data_hash(a: number): number;
export function transactionbody_set_validity_start_interval(
  a: number,
  b: number,
): void;
export function transactionbody_validity_start_interval(a: number): number;
export function transactionbody_set_mint(a: number, b: number): void;
export function transactionbody_mint(a: number): number;
export function transactionbody_set_script_data_hash(
  a: number,
  b: number,
): void;
export function transactionbody_script_data_hash(a: number): number;
export function transactionbody_set_collateral(a: number, b: number): void;
export function transactionbody_collateral(a: number): number;
export function transactionbody_set_required_signers(
  a: number,
  b: number,
): void;
export function transactionbody_required_signers(a: number): number;
export function transactionbody_set_network_id(a: number, b: number): void;
export function transactionbody_network_id(a: number): number;
export function transactionbody_set_collateral_return(
  a: number,
  b: number,
): void;
export function transactionbody_collateral_return(a: number): number;
export function transactionbody_set_total_collateral(
  a: number,
  b: number,
): void;
export function transactionbody_total_collateral(a: number): number;
export function transactionbody_set_reference_inputs(
  a: number,
  b: number,
): void;
export function transactionbody_reference_inputs(a: number): number;
export function transactionbody_new(
  a: number,
  b: number,
  c: number,
  d: number,
): number;
export function transactionbody_raw(a: number, b: number): void;
export function __wbg_transactioninput_free(a: number): void;
export function transactioninput_to_bytes(a: number, b: number): void;
export function transactioninput_from_bytes(a: number, b: number): number;
export function transactioninput_to_json(a: number, b: number): void;
export function transactioninput_to_js_value(a: number): number;
export function transactioninput_from_json(a: number, b: number): number;
export function transactioninput_transaction_id(a: number): number;
export function transactioninput_index(a: number): number;
export function transactioninput_new(a: number, b: number): number;
export function __wbg_transactionoutput_free(a: number): void;
export function transactionoutput_to_bytes(a: number, b: number): void;
export function transactionoutput_from_bytes(a: number, b: number): number;
export function transactionoutput_to_json(a: number, b: number): void;
export function transactionoutput_to_js_value(a: number): number;
export function transactionoutput_from_json(a: number, b: number): number;
export function transactionoutput_address(a: number): number;
export function transactionoutput_amount(a: number): number;
export function transactionoutput_datum(a: number): number;
export function transactionoutput_script_ref(a: number): number;
export function transactionoutput_set_datum(a: number, b: number): void;
export function transactionoutput_set_script_ref(a: number, b: number): void;
export function transactionoutput_new(a: number, b: number): number;
export function transactionoutput_to_legacy_bytes(a: number, b: number): void;
export function __wbg_stakeregistration_free(a: number): void;
export function stakeregistration_to_bytes(a: number, b: number): void;
export function stakeregistration_from_bytes(a: number, b: number): number;
export function stakeregistration_to_json(a: number, b: number): void;
export function stakeregistration_to_js_value(a: number): number;
export function stakeregistration_from_json(a: number, b: number): number;
export function stakeregistration_stake_credential(a: number): number;
export function stakeregistration_new(a: number): number;
export function __wbg_stakederegistration_free(a: number): void;
export function stakederegistration_to_bytes(a: number, b: number): void;
export function stakederegistration_from_bytes(a: number, b: number): number;
export function stakederegistration_to_json(a: number, b: number): void;
export function stakederegistration_to_js_value(a: number): number;
export function stakederegistration_from_json(a: number, b: number): number;
export function stakederegistration_stake_credential(a: number): number;
export function stakederegistration_new(a: number): number;
export function __wbg_stakedelegation_free(a: number): void;
export function stakedelegation_to_bytes(a: number, b: number): void;
export function stakedelegation_from_bytes(a: number, b: number): number;
export function stakedelegation_to_json(a: number, b: number): void;
export function stakedelegation_to_js_value(a: number): number;
export function stakedelegation_from_json(a: number, b: number): number;
export function stakedelegation_stake_credential(a: number): number;
export function stakedelegation_pool_keyhash(a: number): number;
export function stakedelegation_new(a: number, b: number): number;
export function __wbg_ed25519keyhashes_free(a: number): void;
export function ed25519keyhashes_to_bytes(a: number, b: number): void;
export function ed25519keyhashes_from_bytes(a: number, b: number): number;
export function ed25519keyhashes_to_json(a: number, b: number): void;
export function ed25519keyhashes_to_js_value(a: number): number;
export function ed25519keyhashes_from_json(a: number, b: number): number;
export function ed25519keyhashes_new(): number;
export function ed25519keyhashes_len(a: number): number;
export function ed25519keyhashes_get(a: number, b: number): number;
export function ed25519keyhashes_add(a: number, b: number): void;
export function __wbg_relays_free(a: number): void;
export function relays_to_bytes(a: number, b: number): void;
export function relays_from_bytes(a: number, b: number): number;
export function relays_to_json(a: number, b: number): void;
export function relays_to_js_value(a: number): number;
export function relays_from_json(a: number, b: number): number;
export function relays_new(): number;
export function relays_len(a: number): number;
export function relays_get(a: number, b: number): number;
export function relays_add(a: number, b: number): void;
export function __wbg_poolparams_free(a: number): void;
export function poolparams_to_bytes(a: number, b: number): void;
export function poolparams_from_bytes(a: number, b: number): number;
export function poolparams_to_json(a: number, b: number): void;
export function poolparams_to_js_value(a: number): number;
export function poolparams_from_json(a: number, b: number): number;
export function poolparams_operator(a: number): number;
export function poolparams_vrf_keyhash(a: number): number;
export function poolparams_pledge(a: number): number;
export function poolparams_cost(a: number): number;
export function poolparams_margin(a: number): number;
export function poolparams_reward_account(a: number): number;
export function poolparams_pool_owners(a: number): number;
export function poolparams_relays(a: number): number;
export function poolparams_pool_metadata(a: number): number;
export function poolparams_new(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  g: number,
  h: number,
  i: number,
): number;
export function __wbg_poolregistration_free(a: number): void;
export function poolregistration_to_bytes(a: number, b: number): void;
export function poolregistration_from_bytes(a: number, b: number): number;
export function poolregistration_to_json(a: number, b: number): void;
export function poolregistration_to_js_value(a: number): number;
export function poolregistration_from_json(a: number, b: number): number;
export function poolregistration_pool_params(a: number): number;
export function poolregistration_new(a: number): number;
export function poolregistration_set_is_update(a: number, b: number): void;
export function __wbg_poolretirement_free(a: number): void;
export function poolretirement_to_bytes(a: number, b: number): void;
export function poolretirement_from_bytes(a: number, b: number): number;
export function poolretirement_to_json(a: number, b: number): void;
export function poolretirement_to_js_value(a: number): number;
export function poolretirement_from_json(a: number, b: number): number;
export function poolretirement_pool_keyhash(a: number): number;
export function poolretirement_epoch(a: number): number;
export function poolretirement_new(a: number, b: number): number;
export function __wbg_genesiskeydelegation_free(a: number): void;
export function genesiskeydelegation_to_bytes(a: number, b: number): void;
export function genesiskeydelegation_from_bytes(a: number, b: number): number;
export function genesiskeydelegation_to_json(a: number, b: number): void;
export function genesiskeydelegation_to_js_value(a: number): number;
export function genesiskeydelegation_from_json(a: number, b: number): number;
export function genesiskeydelegation_genesishash(a: number): number;
export function genesiskeydelegation_genesis_delegate_hash(a: number): number;
export function genesiskeydelegation_vrf_keyhash(a: number): number;
export function genesiskeydelegation_new(
  a: number,
  b: number,
  c: number,
): number;
export function __wbg_moveinstantaneousrewardscert_free(a: number): void;
export function moveinstantaneousrewardscert_to_bytes(
  a: number,
  b: number,
): void;
export function moveinstantaneousrewardscert_from_bytes(
  a: number,
  b: number,
): number;
export function moveinstantaneousrewardscert_to_json(
  a: number,
  b: number,
): void;
export function moveinstantaneousrewardscert_to_js_value(a: number): number;
export function moveinstantaneousrewardscert_from_json(
  a: number,
  b: number,
): number;
export function moveinstantaneousrewardscert_move_instantaneous_reward(
  a: number,
): number;
export function moveinstantaneousrewardscert_new(a: number): number;
export function __wbg_certificate_free(a: number): void;
export function certificate_to_bytes(a: number, b: number): void;
export function certificate_from_bytes(a: number, b: number): number;
export function certificate_to_json(a: number, b: number): void;
export function certificate_to_js_value(a: number): number;
export function certificate_from_json(a: number, b: number): number;
export function certificate_new_stake_registration(a: number): number;
export function certificate_new_stake_deregistration(a: number): number;
export function certificate_new_stake_delegation(a: number): number;
export function certificate_new_pool_registration(a: number): number;
export function certificate_new_pool_retirement(a: number): number;
export function certificate_new_genesis_key_delegation(a: number): number;
export function certificate_new_move_instantaneous_rewards_cert(
  a: number,
): number;
export function certificate_kind(a: number): number;
export function certificate_as_stake_registration(a: number): number;
export function certificate_as_stake_deregistration(a: number): number;
export function certificate_as_stake_delegation(a: number): number;
export function certificate_as_pool_registration(a: number): number;
export function certificate_as_pool_retirement(a: number): number;
export function certificate_as_genesis_key_delegation(a: number): number;
export function certificate_as_move_instantaneous_rewards_cert(
  a: number,
): number;
export function __wbg_mirtostakecredentials_free(a: number): void;
export function mirtostakecredentials_to_bytes(a: number, b: number): void;
export function mirtostakecredentials_from_bytes(a: number, b: number): number;
export function mirtostakecredentials_to_json(a: number, b: number): void;
export function mirtostakecredentials_to_js_value(a: number): number;
export function mirtostakecredentials_from_json(a: number, b: number): number;
export function mirtostakecredentials_new(): number;
export function mirtostakecredentials_len(a: number): number;
export function mirtostakecredentials_insert(
  a: number,
  b: number,
  c: number,
): number;
export function mirtostakecredentials_get(a: number, b: number): number;
export function mirtostakecredentials_keys(a: number): number;
export function __wbg_moveinstantaneousreward_free(a: number): void;
export function moveinstantaneousreward_to_bytes(a: number, b: number): void;
export function moveinstantaneousreward_from_bytes(
  a: number,
  b: number,
): number;
export function moveinstantaneousreward_to_json(a: number, b: number): void;
export function moveinstantaneousreward_to_js_value(a: number): number;
export function moveinstantaneousreward_from_json(a: number, b: number): number;
export function moveinstantaneousreward_new_to_other_pot(
  a: number,
  b: number,
): number;
export function moveinstantaneousreward_new_to_stake_creds(
  a: number,
  b: number,
): number;
export function moveinstantaneousreward_pot(a: number): number;
export function moveinstantaneousreward_kind(a: number): number;
export function moveinstantaneousreward_as_to_other_pot(a: number): number;
export function moveinstantaneousreward_as_to_stake_creds(a: number): number;
export function __wbg_ipv4_free(a: number): void;
export function ipv4_to_bytes(a: number, b: number): void;
export function ipv4_from_bytes(a: number, b: number): number;
export function ipv4_to_json(a: number, b: number): void;
export function ipv4_to_js_value(a: number): number;
export function ipv4_from_json(a: number, b: number): number;
export function ipv4_new(a: number, b: number): number;
export function ipv4_ip(a: number, b: number): void;
export function __wbg_ipv6_free(a: number): void;
export function ipv6_to_bytes(a: number, b: number): void;
export function ipv6_from_bytes(a: number, b: number): number;
export function ipv6_to_json(a: number, b: number): void;
export function ipv6_to_js_value(a: number): number;
export function ipv6_from_json(a: number, b: number): number;
export function ipv6_new(a: number, b: number): number;
export function ipv6_ip(a: number, b: number): void;
export function __wbg_url_free(a: number): void;
export function url_to_bytes(a: number, b: number): void;
export function url_from_bytes(a: number, b: number): number;
export function url_new(a: number, b: number): number;
export function url_url(a: number, b: number): void;
export function __wbg_dnsrecordaoraaaa_free(a: number): void;
export function dnsrecordaoraaaa_to_bytes(a: number, b: number): void;
export function dnsrecordaoraaaa_from_bytes(a: number, b: number): number;
export function dnsrecordaoraaaa_new(a: number, b: number): number;
export function dnsrecordaoraaaa_record(a: number, b: number): void;
export function __wbg_dnsrecordsrv_free(a: number): void;
export function dnsrecordsrv_to_bytes(a: number, b: number): void;
export function dnsrecordsrv_from_bytes(a: number, b: number): number;
export function dnsrecordsrv_new(a: number, b: number): number;
export function dnsrecordsrv_record(a: number, b: number): void;
export function __wbg_singlehostaddr_free(a: number): void;
export function singlehostaddr_to_bytes(a: number, b: number): void;
export function singlehostaddr_from_bytes(a: number, b: number): number;
export function singlehostaddr_to_json(a: number, b: number): void;
export function singlehostaddr_to_js_value(a: number): number;
export function singlehostaddr_from_json(a: number, b: number): number;
export function singlehostaddr_port(a: number): number;
export function singlehostaddr_ipv4(a: number): number;
export function singlehostaddr_ipv6(a: number): number;
export function singlehostaddr_new(a: number, b: number, c: number): number;
export function __wbg_singlehostname_free(a: number): void;
export function singlehostname_to_bytes(a: number, b: number): void;
export function singlehostname_from_bytes(a: number, b: number): number;
export function singlehostname_to_json(a: number, b: number): void;
export function singlehostname_to_js_value(a: number): number;
export function singlehostname_from_json(a: number, b: number): number;
export function singlehostname_port(a: number): number;
export function singlehostname_dns_name(a: number): number;
export function singlehostname_new(a: number, b: number): number;
export function __wbg_multihostname_free(a: number): void;
export function multihostname_to_bytes(a: number, b: number): void;
export function multihostname_from_bytes(a: number, b: number): number;
export function multihostname_to_json(a: number, b: number): void;
export function multihostname_to_js_value(a: number): number;
export function multihostname_from_json(a: number, b: number): number;
export function multihostname_dns_name(a: number): number;
export function multihostname_new(a: number): number;
export function __wbg_relay_free(a: number): void;
export function relay_to_bytes(a: number, b: number): void;
export function relay_from_bytes(a: number, b: number): number;
export function relay_to_json(a: number, b: number): void;
export function relay_to_js_value(a: number): number;
export function relay_from_json(a: number, b: number): number;
export function relay_new_single_host_addr(a: number): number;
export function relay_new_single_host_name(a: number): number;
export function relay_new_multi_host_name(a: number): number;
export function relay_kind(a: number): number;
export function relay_as_single_host_addr(a: number): number;
export function relay_as_single_host_name(a: number): number;
export function relay_as_multi_host_name(a: number): number;
export function __wbg_poolmetadata_free(a: number): void;
export function poolmetadata_to_bytes(a: number, b: number): void;
export function poolmetadata_from_bytes(a: number, b: number): number;
export function poolmetadata_to_json(a: number, b: number): void;
export function poolmetadata_to_js_value(a: number): number;
export function poolmetadata_from_json(a: number, b: number): number;
export function poolmetadata_url(a: number): number;
export function poolmetadata_pool_metadata_hash(a: number): number;
export function poolmetadata_new(a: number, b: number): number;
export function __wbg_stakecredentials_free(a: number): void;
export function stakecredentials_to_bytes(a: number, b: number): void;
export function stakecredentials_from_bytes(a: number, b: number): number;
export function stakecredentials_to_json(a: number, b: number): void;
export function stakecredentials_to_js_value(a: number): number;
export function stakecredentials_from_json(a: number, b: number): number;
export function stakecredentials_new(): number;
export function stakecredentials_len(a: number): number;
export function stakecredentials_get(a: number, b: number): number;
export function stakecredentials_add(a: number, b: number): void;
export function __wbg_rewardaddresses_free(a: number): void;
export function rewardaddresses_to_bytes(a: number, b: number): void;
export function rewardaddresses_from_bytes(a: number, b: number): number;
export function rewardaddresses_to_json(a: number, b: number): void;
export function rewardaddresses_to_js_value(a: number): number;
export function rewardaddresses_from_json(a: number, b: number): number;
export function rewardaddresses_new(): number;
export function rewardaddresses_len(a: number): number;
export function rewardaddresses_get(a: number, b: number): number;
export function rewardaddresses_add(a: number, b: number): void;
export function __wbg_withdrawals_free(a: number): void;
export function withdrawals_to_bytes(a: number, b: number): void;
export function withdrawals_from_bytes(a: number, b: number): number;
export function withdrawals_to_json(a: number, b: number): void;
export function withdrawals_to_js_value(a: number): number;
export function withdrawals_from_json(a: number, b: number): number;
export function withdrawals_new(): number;
export function withdrawals_len(a: number): number;
export function withdrawals_insert(a: number, b: number, c: number): number;
export function withdrawals_get(a: number, b: number): number;
export function withdrawals_keys(a: number): number;
export function __wbg_transactionwitnessset_free(a: number): void;
export function transactionwitnessset_to_bytes(a: number, b: number): void;
export function transactionwitnessset_from_bytes(a: number, b: number): number;
export function transactionwitnessset_to_json(a: number, b: number): void;
export function transactionwitnessset_to_js_value(a: number): number;
export function transactionwitnessset_from_json(a: number, b: number): number;
export function transactionwitnessset_set_vkeys(a: number, b: number): void;
export function transactionwitnessset_vkeys(a: number): number;
export function transactionwitnessset_set_native_scripts(
  a: number,
  b: number,
): void;
export function transactionwitnessset_native_scripts(a: number): number;
export function transactionwitnessset_set_bootstraps(
  a: number,
  b: number,
): void;
export function transactionwitnessset_bootstraps(a: number): number;
export function transactionwitnessset_set_plutus_scripts(
  a: number,
  b: number,
): void;
export function transactionwitnessset_plutus_scripts(a: number): number;
export function transactionwitnessset_set_plutus_data(
  a: number,
  b: number,
): void;
export function transactionwitnessset_plutus_data(a: number): number;
export function transactionwitnessset_set_redeemers(a: number, b: number): void;
export function transactionwitnessset_set_plutus_v2_scripts(
  a: number,
  b: number,
): void;
export function transactionwitnessset_redeemers(a: number): number;
export function transactionwitnessset_plutus_v2_scripts(a: number): number;
export function transactionwitnessset_new(): number;
export function __wbg_scriptpubkey_free(a: number): void;
export function scriptpubkey_to_bytes(a: number, b: number): void;
export function scriptpubkey_from_bytes(a: number, b: number): number;
export function scriptpubkey_to_json(a: number, b: number): void;
export function scriptpubkey_to_js_value(a: number): number;
export function scriptpubkey_from_json(a: number, b: number): number;
export function scriptpubkey_addr_keyhash(a: number): number;
export function scriptpubkey_new(a: number): number;
export function __wbg_scriptall_free(a: number): void;
export function scriptall_to_bytes(a: number, b: number): void;
export function scriptall_from_bytes(a: number, b: number): number;
export function scriptall_to_json(a: number, b: number): void;
export function scriptall_to_js_value(a: number): number;
export function scriptall_from_json(a: number, b: number): number;
export function scriptall_native_scripts(a: number): number;
export function scriptall_new(a: number): number;
export function __wbg_scriptany_free(a: number): void;
export function scriptany_to_bytes(a: number, b: number): void;
export function scriptany_from_bytes(a: number, b: number): number;
export function scriptany_to_json(a: number, b: number): void;
export function scriptany_to_js_value(a: number): number;
export function scriptany_from_json(a: number, b: number): number;
export function scriptany_native_scripts(a: number): number;
export function scriptany_new(a: number): number;
export function __wbg_scriptnofk_free(a: number): void;
export function scriptnofk_to_bytes(a: number, b: number): void;
export function scriptnofk_from_bytes(a: number, b: number): number;
export function scriptnofk_to_json(a: number, b: number): void;
export function scriptnofk_to_js_value(a: number): number;
export function scriptnofk_from_json(a: number, b: number): number;
export function scriptnofk_n(a: number): number;
export function scriptnofk_native_scripts(a: number): number;
export function scriptnofk_new(a: number, b: number): number;
export function __wbg_timelockstart_free(a: number): void;
export function timelockstart_to_bytes(a: number, b: number): void;
export function timelockstart_from_bytes(a: number, b: number): number;
export function timelockstart_to_json(a: number, b: number): void;
export function timelockstart_to_js_value(a: number): number;
export function timelockstart_from_json(a: number, b: number): number;
export function timelockstart_slot(a: number): number;
export function timelockstart_new(a: number): number;
export function __wbg_timelockexpiry_free(a: number): void;
export function timelockexpiry_to_bytes(a: number, b: number): void;
export function timelockexpiry_from_bytes(a: number, b: number): number;
export function timelockexpiry_to_json(a: number, b: number): void;
export function timelockexpiry_to_js_value(a: number): number;
export function timelockexpiry_from_json(a: number, b: number): number;
export function timelockexpiry_slot(a: number): number;
export function timelockexpiry_new(a: number): number;
export function __wbg_nativescript_free(a: number): void;
export function nativescript_to_bytes(a: number, b: number): void;
export function nativescript_from_bytes(a: number, b: number): number;
export function nativescript_to_json(a: number, b: number): void;
export function nativescript_to_js_value(a: number): number;
export function nativescript_from_json(a: number, b: number): number;
export function nativescript_hash(a: number, b: number): number;
export function nativescript_new_script_pubkey(a: number): number;
export function nativescript_new_script_all(a: number): number;
export function nativescript_new_script_any(a: number): number;
export function nativescript_new_script_n_of_k(a: number): number;
export function nativescript_new_timelock_start(a: number): number;
export function nativescript_new_timelock_expiry(a: number): number;
export function nativescript_kind(a: number): number;
export function nativescript_as_script_pubkey(a: number): number;
export function nativescript_as_script_all(a: number): number;
export function nativescript_as_script_any(a: number): number;
export function nativescript_as_script_n_of_k(a: number): number;
export function nativescript_as_timelock_start(a: number): number;
export function nativescript_as_timelock_expiry(a: number): number;
export function nativescript_get_required_signers(a: number): number;
export function nativescript_verify(
  a: number,
  b: number,
  c: number,
  d: number,
): number;
export function __wbg_nativescripts_free(a: number): void;
export function nativescripts_new(): number;
export function nativescripts_len(a: number): number;
export function nativescripts_get(a: number, b: number): number;
export function nativescripts_add(a: number, b: number): void;
export function __wbg_update_free(a: number): void;
export function update_to_bytes(a: number, b: number): void;
export function update_from_bytes(a: number, b: number): number;
export function update_to_json(a: number, b: number): void;
export function update_to_js_value(a: number): number;
export function update_from_json(a: number, b: number): number;
export function update_proposed_protocol_parameter_updates(a: number): number;
export function update_epoch(a: number): number;
export function update_new(a: number, b: number): number;
export function __wbg_genesishashes_free(a: number): void;
export function genesishashes_to_bytes(a: number, b: number): void;
export function genesishashes_from_bytes(a: number, b: number): number;
export function genesishashes_to_json(a: number, b: number): void;
export function genesishashes_to_js_value(a: number): number;
export function genesishashes_from_json(a: number, b: number): number;
export function genesishashes_new(): number;
export function genesishashes_len(a: number): number;
export function genesishashes_get(a: number, b: number): number;
export function genesishashes_add(a: number, b: number): void;
export function __wbg_scripthashes_free(a: number): void;
export function scripthashes_to_bytes(a: number, b: number): void;
export function scripthashes_from_bytes(a: number, b: number): number;
export function scripthashes_to_json(a: number, b: number): void;
export function scripthashes_to_js_value(a: number): number;
export function scripthashes_from_json(a: number, b: number): number;
export function scripthashes_new(): number;
export function scripthashes_len(a: number): number;
export function scripthashes_get(a: number, b: number): number;
export function scripthashes_add(a: number, b: number): void;
export function __wbg_proposedprotocolparameterupdates_free(a: number): void;
export function proposedprotocolparameterupdates_to_bytes(
  a: number,
  b: number,
): void;
export function proposedprotocolparameterupdates_from_bytes(
  a: number,
  b: number,
): number;
export function proposedprotocolparameterupdates_to_json(
  a: number,
  b: number,
): void;
export function proposedprotocolparameterupdates_to_js_value(a: number): number;
export function proposedprotocolparameterupdates_from_json(
  a: number,
  b: number,
): number;
export function proposedprotocolparameterupdates_new(): number;
export function proposedprotocolparameterupdates_len(a: number): number;
export function proposedprotocolparameterupdates_insert(
  a: number,
  b: number,
  c: number,
): number;
export function proposedprotocolparameterupdates_get(
  a: number,
  b: number,
): number;
export function proposedprotocolparameterupdates_keys(a: number): number;
export function __wbg_protocolversion_free(a: number): void;
export function protocolversion_to_bytes(a: number, b: number): void;
export function protocolversion_from_bytes(a: number, b: number): number;
export function protocolversion_to_json(a: number, b: number): void;
export function protocolversion_to_js_value(a: number): number;
export function protocolversion_from_json(a: number, b: number): number;
export function protocolversion_major(a: number): number;
export function protocolversion_minor(a: number): number;
export function protocolversion_new(a: number, b: number): number;
export function __wbg_protocolparamupdate_free(a: number): void;
export function protocolparamupdate_to_bytes(a: number, b: number): void;
export function protocolparamupdate_from_bytes(a: number, b: number): number;
export function protocolparamupdate_to_json(a: number, b: number): void;
export function protocolparamupdate_to_js_value(a: number): number;
export function protocolparamupdate_from_json(a: number, b: number): number;
export function protocolparamupdate_set_minfee_a(a: number, b: number): void;
export function protocolparamupdate_minfee_a(a: number): number;
export function protocolparamupdate_set_minfee_b(a: number, b: number): void;
export function protocolparamupdate_minfee_b(a: number): number;
export function protocolparamupdate_set_max_block_body_size(
  a: number,
  b: number,
): void;
export function protocolparamupdate_max_block_body_size(
  a: number,
  b: number,
): void;
export function protocolparamupdate_set_max_tx_size(a: number, b: number): void;
export function protocolparamupdate_max_tx_size(a: number, b: number): void;
export function protocolparamupdate_set_max_block_header_size(
  a: number,
  b: number,
): void;
export function protocolparamupdate_max_block_header_size(
  a: number,
  b: number,
): void;
export function protocolparamupdate_set_key_deposit(a: number, b: number): void;
export function protocolparamupdate_key_deposit(a: number): number;
export function protocolparamupdate_set_pool_deposit(
  a: number,
  b: number,
): void;
export function protocolparamupdate_pool_deposit(a: number): number;
export function protocolparamupdate_set_max_epoch(a: number, b: number): void;
export function protocolparamupdate_max_epoch(a: number, b: number): void;
export function protocolparamupdate_set_n_opt(a: number, b: number): void;
export function protocolparamupdate_n_opt(a: number, b: number): void;
export function protocolparamupdate_set_pool_pledge_influence(
  a: number,
  b: number,
): void;
export function protocolparamupdate_pool_pledge_influence(a: number): number;
export function protocolparamupdate_set_expansion_rate(
  a: number,
  b: number,
): void;
export function protocolparamupdate_expansion_rate(a: number): number;
export function protocolparamupdate_set_treasury_growth_rate(
  a: number,
  b: number,
): void;
export function protocolparamupdate_treasury_growth_rate(a: number): number;
export function protocolparamupdate_set_d(a: number, b: number): void;
export function protocolparamupdate_d(a: number): number;
export function protocolparamupdate_set_extra_entropy(
  a: number,
  b: number,
): void;
export function protocolparamupdate_extra_entropy(a: number): number;
export function protocolparamupdate_set_protocol_version(
  a: number,
  b: number,
): void;
export function protocolparamupdate_protocol_version(a: number): number;
export function protocolparamupdate_set_min_pool_cost(
  a: number,
  b: number,
): void;
export function protocolparamupdate_min_pool_cost(a: number): number;
export function protocolparamupdate_set_ada_per_utxo_byte(
  a: number,
  b: number,
): void;
export function protocolparamupdate_ada_per_utxo_byte(a: number): number;
export function protocolparamupdate_set_cost_models(a: number, b: number): void;
export function protocolparamupdate_cost_models(a: number): number;
export function protocolparamupdate_set_execution_costs(
  a: number,
  b: number,
): void;
export function protocolparamupdate_execution_costs(a: number): number;
export function protocolparamupdate_set_max_tx_ex_units(
  a: number,
  b: number,
): void;
export function protocolparamupdate_max_tx_ex_units(a: number): number;
export function protocolparamupdate_set_max_block_ex_units(
  a: number,
  b: number,
): void;
export function protocolparamupdate_max_block_ex_units(a: number): number;
export function protocolparamupdate_set_max_value_size(
  a: number,
  b: number,
): void;
export function protocolparamupdate_max_value_size(a: number, b: number): void;
export function protocolparamupdate_set_collateral_percentage(
  a: number,
  b: number,
): void;
export function protocolparamupdate_collateral_percentage(
  a: number,
  b: number,
): void;
export function protocolparamupdate_set_max_collateral_inputs(
  a: number,
  b: number,
): void;
export function protocolparamupdate_max_collateral_inputs(
  a: number,
  b: number,
): void;
export function protocolparamupdate_new(): number;
export function __wbg_transactionbodies_free(a: number): void;
export function transactionbodies_to_bytes(a: number, b: number): void;
export function transactionbodies_from_bytes(a: number, b: number): number;
export function transactionbodies_to_json(a: number, b: number): void;
export function transactionbodies_to_js_value(a: number): number;
export function transactionbodies_from_json(a: number, b: number): number;
export function transactionbodies_new(): number;
export function transactionbodies_len(a: number): number;
export function transactionbodies_get(a: number, b: number): number;
export function transactionbodies_add(a: number, b: number): void;
export function __wbg_transactionwitnesssets_free(a: number): void;
export function transactionwitnesssets_to_bytes(a: number, b: number): void;
export function transactionwitnesssets_from_bytes(a: number, b: number): number;
export function transactionwitnesssets_to_json(a: number, b: number): void;
export function transactionwitnesssets_to_js_value(a: number): number;
export function transactionwitnesssets_from_json(a: number, b: number): number;
export function transactionwitnesssets_new(): number;
export function transactionwitnesssets_len(a: number): number;
export function transactionwitnesssets_get(a: number, b: number): number;
export function transactionwitnesssets_add(a: number, b: number): void;
export function __wbg_transactionindexes_free(a: number): void;
export function transactionindexes_to_bytes(a: number, b: number): void;
export function transactionindexes_from_bytes(a: number, b: number): number;
export function transactionindexes_new(): number;
export function transactionindexes_len(a: number): number;
export function transactionindexes_get(a: number, b: number): number;
export function transactionindexes_add(a: number, b: number): void;
export function __wbg_auxiliarydataset_free(a: number): void;
export function auxiliarydataset_new(): number;
export function auxiliarydataset_len(a: number): number;
export function auxiliarydataset_insert(
  a: number,
  b: number,
  c: number,
): number;
export function auxiliarydataset_get(a: number, b: number): number;
export function auxiliarydataset_indices(a: number): number;
export function __wbg_block_free(a: number): void;
export function block_to_bytes(a: number, b: number): void;
export function block_from_bytes(a: number, b: number): number;
export function block_to_json(a: number, b: number): void;
export function block_to_js_value(a: number): number;
export function block_from_json(a: number, b: number): number;
export function block_header(a: number): number;
export function block_transaction_bodies(a: number): number;
export function block_transaction_witness_sets(a: number): number;
export function block_auxiliary_data_set(a: number): number;
export function block_invalid_transactions(a: number): number;
export function block_new(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
): number;
export function __wbg_header_free(a: number): void;
export function header_to_bytes(a: number, b: number): void;
export function header_from_bytes(a: number, b: number): number;
export function header_to_json(a: number, b: number): void;
export function header_to_js_value(a: number): number;
export function header_from_json(a: number, b: number): number;
export function header_header_body(a: number): number;
export function header_body_signature(a: number): number;
export function header_new(a: number, b: number): number;
export function __wbg_operationalcert_free(a: number): void;
export function operationalcert_to_bytes(a: number, b: number): void;
export function operationalcert_from_bytes(a: number, b: number): number;
export function operationalcert_to_json(a: number, b: number): void;
export function operationalcert_to_js_value(a: number): number;
export function operationalcert_from_json(a: number, b: number): number;
export function operationalcert_hot_vkey(a: number): number;
export function operationalcert_sequence_number(a: number): number;
export function operationalcert_kes_period(a: number): number;
export function operationalcert_sigma(a: number): number;
export function operationalcert_new(
  a: number,
  b: number,
  c: number,
  d: number,
): number;
export function __wbg_headerbody_free(a: number): void;
export function headerbody_to_bytes(a: number, b: number): void;
export function headerbody_from_bytes(a: number, b: number): number;
export function headerbody_to_json(a: number, b: number): void;
export function headerbody_to_js_value(a: number): number;
export function headerbody_from_json(a: number, b: number): number;
export function headerbody_block_number(a: number): number;
export function headerbody_slot(a: number): number;
export function headerbody_prev_hash(a: number): number;
export function headerbody_issuer_vkey(a: number): number;
export function headerbody_vrf_vkey(a: number): number;
export function headerbody_nonce_vrf(a: number): number;
export function headerbody_leader_vrf(a: number): number;
export function headerbody_block_body_size(a: number): number;
export function headerbody_block_body_hash(a: number): number;
export function headerbody_operational_cert(a: number): number;
export function headerbody_protocol_version(a: number): number;
export function headerbody_new(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  g: number,
  h: number,
  i: number,
  j: number,
  k: number,
): number;
export function __wbg_assetname_free(a: number): void;
export function assetname_to_bytes(a: number, b: number): void;
export function assetname_from_bytes(a: number, b: number): number;
export function assetname_to_json(a: number, b: number): void;
export function assetname_to_js_value(a: number): number;
export function assetname_from_json(a: number, b: number): number;
export function assetname_new(a: number, b: number): number;
export function assetname_name(a: number, b: number): void;
export function __wbg_assetnames_free(a: number): void;
export function assetnames_to_bytes(a: number, b: number): void;
export function assetnames_from_bytes(a: number, b: number): number;
export function assetnames_to_json(a: number, b: number): void;
export function assetnames_to_js_value(a: number): number;
export function assetnames_from_json(a: number, b: number): number;
export function assetnames_new(): number;
export function assetnames_len(a: number): number;
export function assetnames_get(a: number, b: number): number;
export function assetnames_add(a: number, b: number): void;
export function __wbg_assets_free(a: number): void;
export function assets_to_bytes(a: number, b: number): void;
export function assets_from_bytes(a: number, b: number): number;
export function assets_to_json(a: number, b: number): void;
export function assets_to_js_value(a: number): number;
export function assets_from_json(a: number, b: number): number;
export function assets_new(): number;
export function assets_len(a: number): number;
export function assets_insert(a: number, b: number, c: number): number;
export function assets_get(a: number, b: number): number;
export function assets_keys(a: number): number;
export function __wbg_multiasset_free(a: number): void;
export function multiasset_to_bytes(a: number, b: number): void;
export function multiasset_from_bytes(a: number, b: number): number;
export function multiasset_to_json(a: number, b: number): void;
export function multiasset_to_js_value(a: number): number;
export function multiasset_from_json(a: number, b: number): number;
export function multiasset_new(): number;
export function multiasset_len(a: number): number;
export function multiasset_insert(a: number, b: number, c: number): number;
export function multiasset_get(a: number, b: number): number;
export function multiasset_set_asset(
  a: number,
  b: number,
  c: number,
  d: number,
): number;
export function multiasset_get_asset(a: number, b: number, c: number): number;
export function multiasset_keys(a: number): number;
export function multiasset_sub(a: number, b: number): number;
export function __wbg_mintassets_free(a: number): void;
export function mintassets_new(): number;
export function mintassets_new_from_entry(a: number, b: number): number;
export function mintassets_len(a: number): number;
export function mintassets_insert(a: number, b: number, c: number): number;
export function mintassets_get(a: number, b: number): number;
export function mintassets_keys(a: number): number;
export function __wbg_mint_free(a: number): void;
export function mint_to_bytes(a: number, b: number): void;
export function mint_from_bytes(a: number, b: number): number;
export function mint_to_json(a: number, b: number): void;
export function mint_to_js_value(a: number): number;
export function mint_from_json(a: number, b: number): number;
export function mint_new(): number;
export function mint_new_from_entry(a: number, b: number): number;
export function mint_len(a: number): number;
export function mint_insert(a: number, b: number, c: number): number;
export function mint_get(a: number, b: number): number;
export function mint_keys(a: number): number;
export function mint_as_positive_multiasset(a: number): number;
export function mint_as_negative_multiasset(a: number): number;
export function __wbg_networkid_free(a: number): void;
export function networkid_to_bytes(a: number, b: number): void;
export function networkid_from_bytes(a: number, b: number): number;
export function networkid_to_json(a: number, b: number): void;
export function networkid_to_js_value(a: number): number;
export function networkid_from_json(a: number, b: number): number;
export function networkid_testnet(): number;
export function networkid_mainnet(): number;
export function networkid_kind(a: number): number;
export function __wbg_metadatamap_free(a: number): void;
export function metadatamap_to_bytes(a: number, b: number): void;
export function metadatamap_from_bytes(a: number, b: number): number;
export function metadatamap_new(): number;
export function metadatamap_len(a: number): number;
export function metadatamap_insert(a: number, b: number, c: number): number;
export function metadatamap_insert_str(
  a: number,
  b: number,
  c: number,
  d: number,
): number;
export function metadatamap_insert_i32(a: number, b: number, c: number): number;
export function metadatamap_get(a: number, b: number): number;
export function metadatamap_get_str(a: number, b: number, c: number): number;
export function metadatamap_get_i32(a: number, b: number): number;
export function metadatamap_has(a: number, b: number): number;
export function metadatamap_keys(a: number): number;
export function __wbg_metadatalist_free(a: number): void;
export function metadatalist_to_bytes(a: number, b: number): void;
export function metadatalist_from_bytes(a: number, b: number): number;
export function metadatalist_new(): number;
export function metadatalist_len(a: number): number;
export function metadatalist_get(a: number, b: number): number;
export function metadatalist_add(a: number, b: number): void;
export function __wbg_transactionmetadatum_free(a: number): void;
export function transactionmetadatum_to_bytes(a: number, b: number): void;
export function transactionmetadatum_from_bytes(a: number, b: number): number;
export function transactionmetadatum_new_map(a: number): number;
export function transactionmetadatum_new_list(a: number): number;
export function transactionmetadatum_new_int(a: number): number;
export function transactionmetadatum_new_bytes(a: number, b: number): number;
export function transactionmetadatum_new_text(a: number, b: number): number;
export function transactionmetadatum_kind(a: number): number;
export function transactionmetadatum_as_map(a: number): number;
export function transactionmetadatum_as_list(a: number): number;
export function transactionmetadatum_as_int(a: number): number;
export function transactionmetadatum_as_bytes(a: number, b: number): void;
export function transactionmetadatum_as_text(a: number, b: number): void;
export function __wbg_transactionmetadatumlabels_free(a: number): void;
export function transactionmetadatumlabels_to_bytes(a: number, b: number): void;
export function transactionmetadatumlabels_from_bytes(
  a: number,
  b: number,
): number;
export function transactionmetadatumlabels_new(): number;
export function transactionmetadatumlabels_len(a: number): number;
export function transactionmetadatumlabels_get(a: number, b: number): number;
export function transactionmetadatumlabels_add(a: number, b: number): void;
export function __wbg_generaltransactionmetadata_free(a: number): void;
export function generaltransactionmetadata_to_bytes(a: number, b: number): void;
export function generaltransactionmetadata_from_bytes(
  a: number,
  b: number,
): number;
export function generaltransactionmetadata_to_json(a: number, b: number): void;
export function generaltransactionmetadata_to_js_value(a: number): number;
export function generaltransactionmetadata_from_json(
  a: number,
  b: number,
): number;
export function generaltransactionmetadata_new(): number;
export function generaltransactionmetadata_len(a: number): number;
export function generaltransactionmetadata_insert(
  a: number,
  b: number,
  c: number,
): number;
export function generaltransactionmetadata_get(a: number, b: number): number;
export function generaltransactionmetadata_keys(a: number): number;
export function __wbg_auxiliarydata_free(a: number): void;
export function auxiliarydata_to_bytes(a: number, b: number): void;
export function auxiliarydata_from_bytes(a: number, b: number): number;
export function auxiliarydata_to_json(a: number, b: number): void;
export function auxiliarydata_to_js_value(a: number): number;
export function auxiliarydata_from_json(a: number, b: number): number;
export function auxiliarydata_new(): number;
export function auxiliarydata_metadata(a: number): number;
export function auxiliarydata_set_metadata(a: number, b: number): void;
export function auxiliarydata_native_scripts(a: number): number;
export function auxiliarydata_set_native_scripts(a: number, b: number): void;
export function auxiliarydata_plutus_scripts(a: number): number;
export function auxiliarydata_set_plutus_scripts(a: number, b: number): void;
export function auxiliarydata_set_plutus_v2_scripts(a: number, b: number): void;
export function encode_arbitrary_bytes_as_metadatum(
  a: number,
  b: number,
): number;
export function decode_arbitrary_bytes_from_metadatum(
  a: number,
  b: number,
): void;
export function encode_json_str_to_metadatum(
  a: number,
  b: number,
  c: number,
): number;
export function decode_metadatum_to_json_str(
  a: number,
  b: number,
  c: number,
): void;
export function __wbg_transactionbuilderconfig_free(a: number): void;
export function __wbg_transactionbuilderconfigbuilder_free(a: number): void;
export function transactionbuilderconfigbuilder_new(): number;
export function transactionbuilderconfigbuilder_fee_algo(
  a: number,
  b: number,
): number;
export function transactionbuilderconfigbuilder_coins_per_utxo_byte(
  a: number,
  b: number,
): number;
export function transactionbuilderconfigbuilder_pool_deposit(
  a: number,
  b: number,
): number;
export function transactionbuilderconfigbuilder_key_deposit(
  a: number,
  b: number,
): number;
export function transactionbuilderconfigbuilder_max_value_size(
  a: number,
  b: number,
): number;
export function transactionbuilderconfigbuilder_max_tx_size(
  a: number,
  b: number,
): number;
export function transactionbuilderconfigbuilder_ex_unit_prices(
  a: number,
  b: number,
): number;
export function transactionbuilderconfigbuilder_max_tx_ex_units(
  a: number,
  b: number,
): number;
export function transactionbuilderconfigbuilder_costmdls(
  a: number,
  b: number,
): number;
export function transactionbuilderconfigbuilder_collateral_percentage(
  a: number,
  b: number,
): number;
export function transactionbuilderconfigbuilder_max_collateral_inputs(
  a: number,
  b: number,
): number;
export function transactionbuilderconfigbuilder_slot_config(
  a: number,
  b: number,
  c: number,
  d: number,
): number;
export function transactionbuilderconfigbuilder_blockfrost(
  a: number,
  b: number,
): number;
export function transactionbuilderconfigbuilder_build(a: number): number;
export function __wbg_transactionbuilder_free(a: number): void;
export function transactionbuilder_add_inputs_from(
  a: number,
  b: number,
  c: number,
): void;
export function transactionbuilder_add_input(
  a: number,
  b: number,
  c: number,
): void;
export function transactionbuilder_add_reference_input(
  a: number,
  b: number,
): void;
export function transactionbuilder_fee_for_input(
  a: number,
  b: number,
  c: number,
  d: number,
): number;
export function transactionbuilder_add_output(a: number, b: number): void;
export function transactionbuilder_add_plutus_script(
  a: number,
  b: number,
): void;
export function transactionbuilder_add_plutus_v2_script(
  a: number,
  b: number,
): void;
export function transactionbuilder_add_plutus_data(a: number, b: number): void;
export function transactionbuilder_add_native_script(
  a: number,
  b: number,
): void;
export function transactionbuilder_add_certificate(
  a: number,
  b: number,
  c: number,
): void;
export function transactionbuilder_fee_for_output(a: number, b: number): number;
export function transactionbuilder_set_ttl(a: number, b: number): void;
export function transactionbuilder_set_validity_start_interval(
  a: number,
  b: number,
): void;
export function transactionbuilder_add_withdrawal(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function transactionbuilder_auxiliary_data(a: number): number;
export function transactionbuilder_set_auxiliary_data(
  a: number,
  b: number,
): void;
export function transactionbuilder_set_metadata(a: number, b: number): void;
export function transactionbuilder_add_metadatum(
  a: number,
  b: number,
  c: number,
): void;
export function transactionbuilder_add_json_metadatum(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function transactionbuilder_add_json_metadatum_with_schema(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
): void;
export function transactionbuilder_mint(a: number): number;
export function transactionbuilder_certificates(a: number): number;
export function transactionbuilder_withdrawals(a: number): number;
export function transactionbuilder_native_scripts(a: number): number;
export function transactionbuilder_add_mint(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function transactionbuilder_new(a: number): number;
export function transactionbuilder_script_data_hash(a: number): number;
export function transactionbuilder_add_collateral(a: number, b: number): void;
export function transactionbuilder_get_collateral(a: number): number;
export function transactionbuilder_add_required_signer(
  a: number,
  b: number,
): void;
export function transactionbuilder_required_signers(a: number): number;
export function transactionbuilder_set_network_id(a: number, b: number): void;
export function transactionbuilder_network_id(a: number): number;
export function transactionbuilder_redeemers(a: number): number;
export function transactionbuilder_get_explicit_input(a: number): number;
export function transactionbuilder_get_implicit_input(a: number): number;
export function transactionbuilder_get_total_input(a: number): number;
export function transactionbuilder_get_total_output(a: number): number;
export function transactionbuilder_get_explicit_output(a: number): number;
export function transactionbuilder_get_deposit(a: number): number;
export function transactionbuilder_get_fee_if_set(a: number): number;
export function transactionbuilder_balance(
  a: number,
  b: number,
  c: number,
): void;
export function transactionbuilder_to_bytes(a: number, b: number): void;
export function transactionbuilder_full_size(a: number): number;
export function transactionbuilder_output_sizes(a: number, b: number): void;
export function transactionbuilder_outputs(a: number): number;
export function transactionbuilder_construct(
  a: number,
  b: number,
  c: number,
  d: number,
): number;
export function transactionbuilder_build_tx(a: number): number;
export function transactionbuilder_min_fee(a: number): number;
export function __wbg_networkinfo_free(a: number): void;
export function networkinfo_new(a: number, b: number): number;
export function networkinfo_network_id(a: number): number;
export function networkinfo_protocol_magic(a: number): number;
export function networkinfo_testnet(): number;
export function networkinfo_mainnet(): number;
export function __wbg_stakecredential_free(a: number): void;
export function stakecredential_from_keyhash(a: number): number;
export function stakecredential_from_scripthash(a: number): number;
export function stakecredential_to_keyhash(a: number): number;
export function stakecredential_to_scripthash(a: number): number;
export function stakecredential_kind(a: number): number;
export function stakecredential_to_bytes(a: number, b: number): void;
export function stakecredential_from_bytes(a: number, b: number): number;
export function stakecredential_to_json(a: number, b: number): void;
export function stakecredential_to_js_value(a: number): number;
export function stakecredential_from_json(a: number, b: number): number;
export function __wbg_byronaddress_free(a: number): void;
export function byronaddress_to_base58(a: number, b: number): void;
export function byronaddress_to_bytes(a: number, b: number): void;
export function byronaddress_from_bytes(a: number, b: number): number;
export function byronaddress_byron_protocol_magic(a: number): number;
export function byronaddress_attributes(a: number, b: number): void;
export function byronaddress_network_id(a: number): number;
export function byronaddress_from_base58(a: number, b: number): number;
export function byronaddress_icarus_from_key(a: number, b: number): number;
export function byronaddress_is_valid(a: number, b: number): number;
export function byronaddress_to_address(a: number): number;
export function byronaddress_from_address(a: number): number;
export function __wbg_address_free(a: number): void;
export function address_from_bytes(a: number, b: number): number;
export function address_to_json(a: number, b: number): void;
export function address_to_js_value(a: number): number;
export function address_from_json(a: number, b: number): number;
export function address_to_bytes(a: number, b: number): void;
export function address_to_bech32(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function address_from_bech32(a: number, b: number): number;
export function address_network_id(a: number): number;
export function address_as_byron(a: number): number;
export function address_as_reward(a: number): number;
export function address_as_pointer(a: number): number;
export function address_as_enterprise(a: number): number;
export function address_as_base(a: number): number;
export function __wbg_baseaddress_free(a: number): void;
export function baseaddress_new(a: number, b: number, c: number): number;
export function baseaddress_payment_cred(a: number): number;
export function baseaddress_stake_cred(a: number): number;
export function baseaddress_to_address(a: number): number;
export function baseaddress_from_address(a: number): number;
export function __wbg_enterpriseaddress_free(a: number): void;
export function enterpriseaddress_new(a: number, b: number): number;
export function enterpriseaddress_payment_cred(a: number): number;
export function enterpriseaddress_to_address(a: number): number;
export function enterpriseaddress_from_address(a: number): number;
export function __wbg_rewardaddress_free(a: number): void;
export function rewardaddress_new(a: number, b: number): number;
export function rewardaddress_payment_cred(a: number): number;
export function rewardaddress_to_address(a: number): number;
export function rewardaddress_from_address(a: number): number;
export function __wbg_pointer_free(a: number): void;
export function pointer_new(a: number, b: number, c: number): number;
export function pointer_slot(a: number): number;
export function pointer_tx_index(a: number): number;
export function pointer_cert_index(a: number): number;
export function __wbg_pointeraddress_free(a: number): void;
export function pointeraddress_new(a: number, b: number, c: number): number;
export function pointeraddress_payment_cred(a: number): number;
export function pointeraddress_stake_pointer(a: number): number;
export function pointeraddress_to_address(a: number): number;
export function pointeraddress_from_address(a: number): number;
export function __wbg_redeemerwitnesskey_free(a: number): void;
export function redeemerwitnesskey_tag(a: number): number;
export function redeemerwitnesskey_index(a: number): number;
export function redeemerwitnesskey_new(a: number, b: number): number;
export function __wbg_requiredwitnessset_free(a: number): void;
export function requiredwitnessset_add_vkey(a: number, b: number): void;
export function requiredwitnessset_add_vkey_key(a: number, b: number): void;
export function requiredwitnessset_add_vkey_key_hash(
  a: number,
  b: number,
): void;
export function requiredwitnessset_add_bootstrap(a: number, b: number): void;
export function requiredwitnessset_add_bootstrap_key(
  a: number,
  b: number,
): void;
export function requiredwitnessset_add_bootstrap_key_hash(
  a: number,
  b: number,
): void;
export function requiredwitnessset_add_native_script(
  a: number,
  b: number,
): void;
export function requiredwitnessset_add_native_script_hash(
  a: number,
  b: number,
): void;
export function requiredwitnessset_add_plutus_script(
  a: number,
  b: number,
): void;
export function requiredwitnessset_add_plutus_v2_script(
  a: number,
  b: number,
): void;
export function requiredwitnessset_add_plutus_hash(a: number, b: number): void;
export function requiredwitnessset_add_plutus_datum(a: number, b: number): void;
export function requiredwitnessset_add_plutus_datum_hash(
  a: number,
  b: number,
): void;
export function requiredwitnessset_add_redeemer(a: number, b: number): void;
export function requiredwitnessset_add_redeemer_tag(a: number, b: number): void;
export function requiredwitnessset_add_all(a: number, b: number): void;
export function requiredwitnessset_new(): number;
export function __wbg_transactionwitnesssetbuilder_free(a: number): void;
export function transactionwitnesssetbuilder_add_vkey(
  a: number,
  b: number,
): void;
export function transactionwitnesssetbuilder_add_bootstrap(
  a: number,
  b: number,
): void;
export function transactionwitnesssetbuilder_add_native_script(
  a: number,
  b: number,
): void;
export function transactionwitnesssetbuilder_add_plutus_script(
  a: number,
  b: number,
): void;
export function transactionwitnesssetbuilder_add_plutus_v2_script(
  a: number,
  b: number,
): void;
export function transactionwitnesssetbuilder_add_plutus_datum(
  a: number,
  b: number,
): void;
export function transactionwitnesssetbuilder_add_redeemer(
  a: number,
  b: number,
): void;
export function transactionwitnesssetbuilder_add_required_wits(
  a: number,
  b: number,
): void;
export function transactionwitnesssetbuilder_new(): number;
export function transactionwitnesssetbuilder_add_existing(
  a: number,
  b: number,
): void;
export function transactionwitnesssetbuilder_build(a: number): number;
export function encrypt_with_password(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  g: number,
  h: number,
  i: number,
): void;
export function decrypt_with_password(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
): void;
export function __wbg_linearfee_free(a: number): void;
export function linearfee_constant(a: number): number;
export function linearfee_coefficient(a: number): number;
export function linearfee_new(a: number, b: number): number;
export function min_fee(a: number, b: number, c: number): number;
export function __wbg_blockfrost_free(a: number): void;
export function blockfrost_new(
  a: number,
  b: number,
  c: number,
  d: number,
): number;
export function blockfrost_url(a: number, b: number): void;
export function blockfrost_project_id(a: number, b: number): void;
export function apply_params_to_plutus_script(a: number, b: number): number;
export function __wbg_plutuswitness_free(a: number): void;
export function plutuswitness_new(a: number, b: number, c: number): number;
export function plutuswitness_new_plutus_v2(
  a: number,
  b: number,
  c: number,
): number;
export function plutuswitness_plutus_data(a: number): number;
export function plutuswitness_redeemer(a: number): number;
export function plutuswitness_script(a: number): number;
export function plutuswitness_version(a: number): number;
export function __wbg_scriptwitness_free(a: number): void;
export function scriptwitness_to_json(a: number, b: number): void;
export function scriptwitness_to_js_value(a: number): number;
export function scriptwitness_from_json(a: number, b: number): number;
export function scriptwitness_new_native_witness(a: number): number;
export function scriptwitness_new_plutus_witness(a: number): number;
export function scriptwitness_kind(a: number): number;
export function scriptwitness_as_native_witness(a: number): number;
export function scriptwitness_as_plutus_witness(a: number): number;
export function __wbg_transactionunspentoutput_free(a: number): void;
export function transactionunspentoutput_to_bytes(a: number, b: number): void;
export function transactionunspentoutput_from_bytes(
  a: number,
  b: number,
): number;
export function transactionunspentoutput_new(a: number, b: number): number;
export function transactionunspentoutput_input(a: number): number;
export function transactionunspentoutput_output(a: number): number;
export function transactionunspentoutput_to_legacy_bytes(
  a: number,
  b: number,
): void;
export function __wbg_transactionunspentoutputs_free(a: number): void;
export function transactionunspentoutputs_new(): number;
export function transactionunspentoutputs_len(a: number): number;
export function transactionunspentoutputs_get(a: number, b: number): number;
export function transactionunspentoutputs_add(a: number, b: number): void;
export function __wbg_bignum_free(a: number): void;
export function bignum_to_bytes(a: number, b: number): void;
export function bignum_from_bytes(a: number, b: number): number;
export function bignum_from_str(a: number, b: number): number;
export function bignum_to_str(a: number, b: number): void;
export function bignum_zero(): number;
export function bignum_is_zero(a: number): number;
export function bignum_checked_mul(a: number, b: number): number;
export function bignum_checked_add(a: number, b: number): number;
export function bignum_checked_sub(a: number, b: number): number;
export function bignum_checked_div(a: number, b: number): number;
export function bignum_checked_div_ceil(a: number, b: number): number;
export function bignum_clamped_sub(a: number, b: number): number;
export function bignum_compare(a: number, b: number): number;
export function __wbg_value_free(a: number): void;
export function value_to_bytes(a: number, b: number): void;
export function value_from_bytes(a: number, b: number): number;
export function value_to_json(a: number, b: number): void;
export function value_to_js_value(a: number): number;
export function value_from_json(a: number, b: number): number;
export function value_new(a: number): number;
export function value_new_from_assets(a: number): number;
export function value_zero(): number;
export function value_is_zero(a: number): number;
export function value_coin(a: number): number;
export function value_set_coin(a: number, b: number): void;
export function value_multiasset(a: number): number;
export function value_set_multiasset(a: number, b: number): void;
export function value_checked_add(a: number, b: number): number;
export function value_checked_sub(a: number, b: number): number;
export function value_clamped_sub(a: number, b: number): number;
export function value_compare(a: number, b: number): number;
export function __wbg_int_free(a: number): void;
export function int_to_bytes(a: number, b: number): void;
export function int_from_bytes(a: number, b: number): number;
export function int_new(a: number): number;
export function int_new_negative(a: number): number;
export function int_new_i32(a: number): number;
export function int_is_positive(a: number): number;
export function int_as_positive(a: number): number;
export function int_as_negative(a: number): number;
export function int_as_i32(a: number, b: number): void;
export function int_as_i32_or_nothing(a: number, b: number): void;
export function int_as_i32_or_fail(a: number): number;
export function int_to_str(a: number, b: number): void;
export function int_from_str(a: number, b: number): number;
export function __wbg_bigint_free(a: number): void;
export function bigint_to_bytes(a: number, b: number): void;
export function bigint_from_bytes(a: number, b: number): number;
export function bigint_as_u64(a: number): number;
export function bigint_as_int(a: number): number;
export function bigint_from_str(a: number, b: number): number;
export function bigint_to_str(a: number, b: number): void;
export function make_daedalus_bootstrap_witness(
  a: number,
  b: number,
  c: number,
): number;
export function make_icarus_bootstrap_witness(
  a: number,
  b: number,
  c: number,
): number;
export function make_vkey_witness(a: number, b: number): number;
export function hash_auxiliary_data(a: number): number;
export function hash_transaction(a: number): number;
export function hash_plutus_data(a: number): number;
export function hash_blake2b256(a: number, b: number, c: number): void;
export function hash_blake2b224(a: number, b: number, c: number): void;
export function hash_script_data(a: number, b: number, c: number): number;
export function get_implicit_input(a: number, b: number, c: number): number;
export function get_deposit(a: number, b: number, c: number): number;
export function min_ada_required(a: number, b: number): number;
export function encode_json_str_to_native_script(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
): number;
export function __wbg_plutusscript_free(a: number): void;
export function plutusscript_to_bytes(a: number, b: number): void;
export function plutusscript_from_bytes(a: number, b: number): number;
export function plutusscript_hash(a: number, b: number): number;
export function plutusscript_new(a: number, b: number): number;
export function plutusscript_bytes(a: number, b: number): void;
export function __wbg_plutusscripts_free(a: number): void;
export function plutusscripts_to_bytes(a: number, b: number): void;
export function plutusscripts_from_bytes(a: number, b: number): number;
export function plutusscripts_new(): number;
export function plutusscripts_len(a: number): number;
export function plutusscripts_get(a: number, b: number): number;
export function plutusscripts_add(a: number, b: number): void;
export function __wbg_constrplutusdata_free(a: number): void;
export function constrplutusdata_to_bytes(a: number, b: number): void;
export function constrplutusdata_from_bytes(a: number, b: number): number;
export function constrplutusdata_alternative(a: number): number;
export function constrplutusdata_data(a: number): number;
export function constrplutusdata_new(a: number, b: number): number;
export function __wbg_costmodel_free(a: number): void;
export function costmodel_to_bytes(a: number, b: number): void;
export function costmodel_from_bytes(a: number, b: number): number;
export function costmodel_new(): number;
export function costmodel_new_plutus_v2(): number;
export function costmodel_set(a: number, b: number, c: number): number;
export function costmodel_get(a: number, b: number): number;
export function costmodel_len(a: number): number;
export function __wbg_costmdls_free(a: number): void;
export function costmdls_to_bytes(a: number, b: number): void;
export function costmdls_from_bytes(a: number, b: number): number;
export function costmdls_new(): number;
export function costmdls_len(a: number): number;
export function costmdls_insert(a: number, b: number, c: number): number;
export function costmdls_get(a: number, b: number): number;
export function costmdls_keys(a: number): number;
export function __wbg_exunitprices_free(a: number): void;
export function exunitprices_to_bytes(a: number, b: number): void;
export function exunitprices_from_bytes(a: number, b: number): number;
export function exunitprices_mem_price(a: number): number;
export function exunitprices_step_price(a: number): number;
export function exunitprices_new(a: number, b: number): number;
export function exunitprices_from_float(a: number, b: number): number;
export function __wbg_exunits_free(a: number): void;
export function exunits_to_bytes(a: number, b: number): void;
export function exunits_from_bytes(a: number, b: number): number;
export function exunits_mem(a: number): number;
export function exunits_steps(a: number): number;
export function exunits_new(a: number, b: number): number;
export function __wbg_language_free(a: number): void;
export function language_to_bytes(a: number, b: number): void;
export function language_from_bytes(a: number, b: number): number;
export function language_new_plutus_v1(): number;
export function language_new_plutus_v2(): number;
export function language_kind(a: number): number;
export function __wbg_languages_free(a: number): void;
export function languages_new(): number;
export function languages_len(a: number): number;
export function languages_get(a: number, b: number): number;
export function languages_add(a: number, b: number): void;
export function __wbg_plutusmap_free(a: number): void;
export function plutusmap_to_bytes(a: number, b: number): void;
export function plutusmap_from_bytes(a: number, b: number): number;
export function plutusmap_new(): number;
export function plutusmap_len(a: number): number;
export function plutusmap_insert(a: number, b: number, c: number): number;
export function plutusmap_get(a: number, b: number): number;
export function plutusmap_keys(a: number): number;
export function __wbg_plutusdata_free(a: number): void;
export function plutusdata_to_bytes(a: number, b: number): void;
export function plutusdata_from_bytes(a: number, b: number): number;
export function plutusdata_new_constr_plutus_data(a: number): number;
export function plutusdata_new_map(a: number): number;
export function plutusdata_new_list(a: number): number;
export function plutusdata_new_integer(a: number): number;
export function plutusdata_new_bytes(a: number, b: number): number;
export function plutusdata_kind(a: number): number;
export function plutusdata_as_constr_plutus_data(a: number): number;
export function plutusdata_as_map(a: number): number;
export function plutusdata_as_list(a: number): number;
export function plutusdata_as_integer(a: number): number;
export function plutusdata_as_bytes(a: number, b: number): void;
export function __wbg_plutuslist_free(a: number): void;
export function plutuslist_to_bytes(a: number, b: number): void;
export function plutuslist_from_bytes(a: number, b: number): number;
export function plutuslist_new(): number;
export function plutuslist_len(a: number): number;
export function plutuslist_get(a: number, b: number): number;
export function plutuslist_add(a: number, b: number): void;
export function __wbg_redeemer_free(a: number): void;
export function redeemer_to_bytes(a: number, b: number): void;
export function redeemer_from_bytes(a: number, b: number): number;
export function redeemer_tag(a: number): number;
export function redeemer_index(a: number): number;
export function redeemer_data(a: number): number;
export function redeemer_ex_units(a: number): number;
export function redeemer_new(
  a: number,
  b: number,
  c: number,
  d: number,
): number;
export function __wbg_redeemertag_free(a: number): void;
export function redeemertag_to_bytes(a: number, b: number): void;
export function redeemertag_from_bytes(a: number, b: number): number;
export function redeemertag_new_spend(): number;
export function redeemertag_new_mint(): number;
export function redeemertag_new_cert(): number;
export function redeemertag_new_reward(): number;
export function redeemertag_kind(a: number): number;
export function __wbg_redeemers_free(a: number): void;
export function redeemers_to_bytes(a: number, b: number): void;
export function redeemers_from_bytes(a: number, b: number): number;
export function redeemers_new(): number;
export function redeemers_len(a: number): number;
export function redeemers_get(a: number, b: number): number;
export function redeemers_add(a: number, b: number): void;
export function __wbg_strings_free(a: number): void;
export function strings_new(): number;
export function strings_len(a: number): number;
export function strings_get(a: number, b: number, c: number): void;
export function strings_add(a: number, b: number, c: number): void;
export function __wbg_data_free(a: number): void;
export function data_to_bytes(a: number, b: number): void;
export function data_from_bytes(a: number, b: number): number;
export function data_to_json(a: number, b: number): void;
export function data_to_js_value(a: number): number;
export function data_from_json(a: number, b: number): number;
export function data_new(a: number): number;
export function data_get(a: number): number;
export function __wbg_script_free(a: number): void;
export function script_to_bytes(a: number, b: number): void;
export function script_from_bytes(a: number, b: number): number;
export function script_to_json(a: number, b: number): void;
export function script_to_js_value(a: number): number;
export function script_from_json(a: number, b: number): number;
export function script_new_native(a: number): number;
export function script_new_plutus_v1(a: number): number;
export function script_new_plutus_v2(a: number): number;
export function script_kind(a: number): number;
export function script_as_native(a: number): number;
export function script_as_plutus_v1(a: number): number;
export function script_as_plutus_v2(a: number): number;
export function __wbg_scriptref_free(a: number): void;
export function scriptref_to_bytes(a: number, b: number): void;
export function scriptref_from_bytes(a: number, b: number): number;
export function scriptref_to_json(a: number, b: number): void;
export function scriptref_to_js_value(a: number): number;
export function scriptref_from_json(a: number, b: number): number;
export function scriptref_new(a: number): number;
export function scriptref_get(a: number): number;
export function __wbg_datum_free(a: number): void;
export function datum_to_bytes(a: number, b: number): void;
export function datum_from_bytes(a: number, b: number): number;
export function datum_to_json(a: number, b: number): void;
export function datum_to_js_value(a: number): number;
export function datum_from_json(a: number, b: number): number;
export function datum_new_data_hash(a: number): number;
export function datum_new_data(a: number): number;
export function datum_kind(a: number): number;
export function datum_as_data_hash(a: number): number;
export function datum_as_data(a: number): number;
export function encode_json_str_to_plutus_datum(
  a: number,
  b: number,
  c: number,
): number;
export function decode_plutus_datum_to_json_str(
  a: number,
  b: number,
  c: number,
): void;
export function __wbg_transactionoutputbuilder_free(a: number): void;
export function transactionoutputbuilder_new(): number;
export function transactionoutputbuilder_with_address(
  a: number,
  b: number,
): number;
export function transactionoutputbuilder_with_datum(
  a: number,
  b: number,
): number;
export function transactionoutputbuilder_next(a: number): number;
export function __wbg_transactionoutputamountbuilder_free(a: number): void;
export function transactionoutputamountbuilder_with_value(
  a: number,
  b: number,
): number;
export function transactionoutputamountbuilder_with_coin(
  a: number,
  b: number,
): number;
export function transactionoutputamountbuilder_with_coin_and_asset(
  a: number,
  b: number,
  c: number,
): number;
export function transactionoutputamountbuilder_with_asset_and_min_required_coin(
  a: number,
  b: number,
  c: number,
): number;
export function transactionoutputamountbuilder_build(a: number): number;
export function __wbg_bip32privatekey_free(a: number): void;
export function bip32privatekey_derive(a: number, b: number): number;
export function bip32privatekey_from_128_xprv(a: number, b: number): number;
export function bip32privatekey_to_128_xprv(a: number, b: number): void;
export function bip32privatekey_generate_ed25519_bip32(): number;
export function bip32privatekey_to_raw_key(a: number): number;
export function bip32privatekey_to_public(a: number): number;
export function bip32privatekey_from_bytes(a: number, b: number): number;
export function bip32privatekey_as_bytes(a: number, b: number): void;
export function bip32privatekey_from_bech32(a: number, b: number): number;
export function bip32privatekey_to_bech32(a: number, b: number): void;
export function bip32privatekey_from_bip39_entropy(
  a: number,
  b: number,
  c: number,
  d: number,
): number;
export function bip32privatekey_chaincode(a: number, b: number): void;
export function __wbg_bip32publickey_free(a: number): void;
export function bip32publickey_derive(a: number, b: number): number;
export function bip32publickey_to_raw_key(a: number): number;
export function bip32publickey_from_bytes(a: number, b: number): number;
export function bip32publickey_as_bytes(a: number, b: number): void;
export function bip32publickey_from_bech32(a: number, b: number): number;
export function bip32publickey_to_bech32(a: number, b: number): void;
export function bip32publickey_chaincode(a: number, b: number): void;
export function __wbg_privatekey_free(a: number): void;
export function privatekey_to_public(a: number): number;
export function privatekey_generate_ed25519(): number;
export function privatekey_generate_ed25519extended(): number;
export function privatekey_from_bech32(a: number, b: number): number;
export function privatekey_to_bech32(a: number, b: number): void;
export function privatekey_as_bytes(a: number, b: number): void;
export function privatekey_from_extended_bytes(a: number, b: number): number;
export function privatekey_from_normal_bytes(a: number, b: number): number;
export function privatekey_sign(a: number, b: number, c: number): number;
export function privatekey_from_bytes(a: number, b: number): number;
export function privatekey_to_bytes(a: number, b: number): void;
export function __wbg_publickey_free(a: number): void;
export function publickey_from_bech32(a: number, b: number): number;
export function publickey_to_bech32(a: number, b: number): void;
export function publickey_as_bytes(a: number, b: number): void;
export function publickey_from_bytes(a: number, b: number): number;
export function publickey_verify(
  a: number,
  b: number,
  c: number,
  d: number,
): number;
export function publickey_hash(a: number): number;
export function __wbg_vkey_free(a: number): void;
export function vkey_to_bytes(a: number, b: number): void;
export function vkey_from_bytes(a: number, b: number): number;
export function vkey_new(a: number): number;
export function vkey_public_key(a: number): number;
export function __wbg_vkeys_free(a: number): void;
export function vkeys_new(): number;
export function vkeys_len(a: number): number;
export function vkeys_get(a: number, b: number): number;
export function vkeys_add(a: number, b: number): void;
export function __wbg_vkeywitness_free(a: number): void;
export function vkeywitness_to_bytes(a: number, b: number): void;
export function vkeywitness_from_bytes(a: number, b: number): number;
export function vkeywitness_to_json(a: number, b: number): void;
export function vkeywitness_to_js_value(a: number): number;
export function vkeywitness_from_json(a: number, b: number): number;
export function vkeywitness_new(a: number, b: number): number;
export function vkeywitness_vkey(a: number): number;
export function vkeywitness_signature(a: number): number;
export function __wbg_vkeywitnesses_free(a: number): void;
export function vkeywitnesses_new(): number;
export function vkeywitnesses_len(a: number): number;
export function vkeywitnesses_get(a: number, b: number): number;
export function vkeywitnesses_add(a: number, b: number): void;
export function __wbg_bootstrapwitness_free(a: number): void;
export function bootstrapwitness_to_bytes(a: number, b: number): void;
export function bootstrapwitness_from_bytes(a: number, b: number): number;
export function bootstrapwitness_to_json(a: number, b: number): void;
export function bootstrapwitness_to_js_value(a: number): number;
export function bootstrapwitness_from_json(a: number, b: number): number;
export function bootstrapwitness_vkey(a: number): number;
export function bootstrapwitness_signature(a: number): number;
export function bootstrapwitness_chain_code(a: number, b: number): void;
export function bootstrapwitness_attributes(a: number, b: number): void;
export function bootstrapwitness_new(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
): number;
export function __wbg_bootstrapwitnesses_free(a: number): void;
export function bootstrapwitnesses_new(): number;
export function bootstrapwitnesses_len(a: number): number;
export function bootstrapwitnesses_get(a: number, b: number): number;
export function bootstrapwitnesses_add(a: number, b: number): void;
export function __wbg_publickeys_free(a: number): void;
export function publickeys_new(): number;
export function publickeys_size(a: number): number;
export function publickeys_get(a: number, b: number): number;
export function publickeys_add(a: number, b: number): void;
export function __wbg_ed25519signature_free(a: number): void;
export function ed25519signature_to_bytes(a: number, b: number): void;
export function ed25519signature_to_bech32(a: number, b: number): void;
export function ed25519signature_to_hex(a: number, b: number): void;
export function ed25519signature_from_bech32(a: number, b: number): number;
export function ed25519signature_from_hex(a: number, b: number): number;
export function ed25519signature_from_bytes(a: number, b: number): number;
export function __wbg_legacydaedalusprivatekey_free(a: number): void;
export function legacydaedalusprivatekey_from_bytes(
  a: number,
  b: number,
): number;
export function legacydaedalusprivatekey_as_bytes(a: number, b: number): void;
export function legacydaedalusprivatekey_chaincode(a: number, b: number): void;
export function __wbg_ed25519keyhash_free(a: number): void;
export function ed25519keyhash_from_bytes(a: number, b: number): number;
export function ed25519keyhash_to_bytes(a: number, b: number): void;
export function ed25519keyhash_to_bech32(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function ed25519keyhash_from_bech32(a: number, b: number): number;
export function ed25519keyhash_to_hex(a: number, b: number): void;
export function ed25519keyhash_from_hex(a: number, b: number): number;
export function __wbg_scripthash_free(a: number): void;
export function scripthash_from_bytes(a: number, b: number): number;
export function scripthash_to_bytes(a: number, b: number): void;
export function scripthash_to_bech32(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function scripthash_from_bech32(a: number, b: number): number;
export function scripthash_to_hex(a: number, b: number): void;
export function scripthash_from_hex(a: number, b: number): number;
export function __wbg_transactionhash_free(a: number): void;
export function transactionhash_from_bytes(a: number, b: number): number;
export function transactionhash_to_bytes(a: number, b: number): void;
export function transactionhash_to_bech32(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function transactionhash_from_bech32(a: number, b: number): number;
export function transactionhash_to_hex(a: number, b: number): void;
export function transactionhash_from_hex(a: number, b: number): number;
export function __wbg_genesisdelegatehash_free(a: number): void;
export function genesisdelegatehash_from_bytes(a: number, b: number): number;
export function genesisdelegatehash_to_bytes(a: number, b: number): void;
export function genesisdelegatehash_to_bech32(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function genesisdelegatehash_from_bech32(a: number, b: number): number;
export function genesisdelegatehash_to_hex(a: number, b: number): void;
export function genesisdelegatehash_from_hex(a: number, b: number): number;
export function __wbg_genesishash_free(a: number): void;
export function genesishash_from_bytes(a: number, b: number): number;
export function genesishash_to_bytes(a: number, b: number): void;
export function genesishash_to_bech32(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function genesishash_from_bech32(a: number, b: number): number;
export function genesishash_to_hex(a: number, b: number): void;
export function genesishash_from_hex(a: number, b: number): number;
export function __wbg_auxiliarydatahash_free(a: number): void;
export function auxiliarydatahash_from_bytes(a: number, b: number): number;
export function auxiliarydatahash_to_bytes(a: number, b: number): void;
export function auxiliarydatahash_to_bech32(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function auxiliarydatahash_from_bech32(a: number, b: number): number;
export function auxiliarydatahash_to_hex(a: number, b: number): void;
export function auxiliarydatahash_from_hex(a: number, b: number): number;
export function __wbg_poolmetadatahash_free(a: number): void;
export function poolmetadatahash_from_bytes(a: number, b: number): number;
export function poolmetadatahash_to_bytes(a: number, b: number): void;
export function poolmetadatahash_to_bech32(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function poolmetadatahash_from_bech32(a: number, b: number): number;
export function poolmetadatahash_to_hex(a: number, b: number): void;
export function poolmetadatahash_from_hex(a: number, b: number): number;
export function __wbg_vrfkeyhash_free(a: number): void;
export function vrfkeyhash_from_bytes(a: number, b: number): number;
export function vrfkeyhash_to_bytes(a: number, b: number): void;
export function vrfkeyhash_to_bech32(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function vrfkeyhash_from_bech32(a: number, b: number): number;
export function vrfkeyhash_to_hex(a: number, b: number): void;
export function vrfkeyhash_from_hex(a: number, b: number): number;
export function __wbg_blockhash_free(a: number): void;
export function blockhash_from_bytes(a: number, b: number): number;
export function blockhash_to_bytes(a: number, b: number): void;
export function blockhash_to_bech32(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function blockhash_from_bech32(a: number, b: number): number;
export function blockhash_to_hex(a: number, b: number): void;
export function blockhash_from_hex(a: number, b: number): number;
export function __wbg_datahash_free(a: number): void;
export function datahash_from_bytes(a: number, b: number): number;
export function datahash_to_bytes(a: number, b: number): void;
export function datahash_to_bech32(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function datahash_from_bech32(a: number, b: number): number;
export function datahash_to_hex(a: number, b: number): void;
export function datahash_from_hex(a: number, b: number): number;
export function __wbg_scriptdatahash_free(a: number): void;
export function scriptdatahash_from_bytes(a: number, b: number): number;
export function scriptdatahash_to_bytes(a: number, b: number): void;
export function scriptdatahash_to_bech32(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function scriptdatahash_from_bech32(a: number, b: number): number;
export function scriptdatahash_to_hex(a: number, b: number): void;
export function scriptdatahash_from_hex(a: number, b: number): number;
export function __wbg_kesvkey_free(a: number): void;
export function kesvkey_from_bytes(a: number, b: number): number;
export function kesvkey_to_bytes(a: number, b: number): void;
export function kesvkey_to_bech32(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function kesvkey_from_bech32(a: number, b: number): number;
export function kesvkey_to_hex(a: number, b: number): void;
export function kesvkey_from_hex(a: number, b: number): number;
export function __wbg_vrfvkey_free(a: number): void;
export function vrfvkey_to_bytes(a: number, b: number): void;
export function vrfvkey_from_bytes(a: number, b: number): number;
export function vrfvkey_hash(a: number): number;
export function vrfvkey_to_raw_key(a: number, b: number): void;
export function __wbg_kessignature_free(a: number): void;
export function kessignature_to_bytes(a: number, b: number): void;
export function kessignature_from_bytes(a: number, b: number): number;
export function __wbg_nonce_free(a: number): void;
export function nonce_to_bytes(a: number, b: number): void;
export function nonce_from_bytes(a: number, b: number): number;
export function nonce_new_identity(): number;
export function nonce_new_from_hash(a: number, b: number): number;
export function nonce_get_hash(a: number, b: number): void;
export function __wbg_vrfcert_free(a: number): void;
export function vrfcert_to_bytes(a: number, b: number): void;
export function vrfcert_from_bytes(a: number, b: number): number;
export function vrfcert_to_json(a: number, b: number): void;
export function vrfcert_to_js_value(a: number): number;
export function vrfcert_from_json(a: number, b: number): number;
export function vrfcert_output(a: number, b: number): void;
export function vrfcert_proof(a: number, b: number): void;
export function vrfcert_new(a: number, b: number, c: number, d: number): number;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export const __wbindgen_export_2: WebAssembly.Table;
export function _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0ccbd9467399eb6b(
  a: number,
  b: number,
  c: number,
): void;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_exn_store(a: number): void;
export function wasm_bindgen__convert__closures__invoke2_mut__h6a929cf27a4d54a4(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
