import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class HostedPage extends Model {
  public id?: string;
  public type?: string;
  public url?: string;
  public state?: string;
  public failure_reason?: string;
  public pass_thru_content?: string;
  public embed: boolean;
  public created_at?: number;
  public expires_at?: number;
  public updated_at?: number;
  public resource_version?: number;
  public checkout_info?: any;

  

  // OPERATIONS
  //-----------

  public static checkout_new(params?: _hosted_page.checkout_new_params) {
    return new RequestWrapper([params], {
      'methodName': 'checkout_new',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/checkout_new',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static checkout_existing(params?: _hosted_page.checkout_existing_params) {
    return new RequestWrapper([params], {
      'methodName': 'checkout_existing',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/checkout_existing',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update_card(params?: _hosted_page.update_card_params) {
    return new RequestWrapper([params], {
      'methodName': 'update_card',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/update_card',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update_payment_method(params?: _hosted_page.update_payment_method_params) {
    return new RequestWrapper([params], {
      'methodName': 'update_payment_method',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/update_payment_method',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static manage_payment_sources(params?: _hosted_page.manage_payment_sources_params) {
    return new RequestWrapper([params], {
      'methodName': 'manage_payment_sources',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/manage_payment_sources',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static collect_now(params?: _hosted_page.collect_now_params) {
    return new RequestWrapper([params], {
      'methodName': 'collect_now',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/collect_now',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static accept_quote(params?: _hosted_page.accept_quote_params) {
    return new RequestWrapper([params], {
      'methodName': 'accept_quote',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/accept_quote',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static extend_subscription(params?: _hosted_page.extend_subscription_params) {
    return new RequestWrapper([params], {
      'methodName': 'extend_subscription',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/extend_subscription',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static checkout_gift(params?: _hosted_page.checkout_gift_params) {
    return new RequestWrapper([params], {
      'methodName': 'checkout_gift',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/checkout_gift',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static claim_gift(params?: _hosted_page.claim_gift_params) {
    return new RequestWrapper([params], {
      'methodName': 'claim_gift',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/claim_gift',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static retrieve_agreement_pdf(params?: _hosted_page.retrieve_agreement_pdf_params) {
    return new RequestWrapper([params], {
      'methodName': 'retrieve_agreement_pdf',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/retrieve_agreement_pdf',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static acknowledge(hosted_page_id: string, params?: any) {
    return new RequestWrapper([hosted_page_id, params], {
      'methodName': 'acknowledge',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/acknowledge',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static retrieve(hosted_page_id: string, params?: any) {
    return new RequestWrapper([hosted_page_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static list(params?: _hosted_page.hosted_page_list_params) {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, ChargeBee._env)
  }

} // ~HostedPage



  // REQUEST PARAMS
  //---------------

export namespace _hosted_page {
  export interface checkout_new_params {
    billing_cycles?: number;
    mandatory_addons_to_remove?: Array<string>;
    terms_to_charge?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    redirect_url?: string;
    cancel_url?: string;
    pass_thru_content?: string;
    embed?: boolean;
    iframe_messaging?: boolean;
    allow_offline_payment_methods?: boolean;
    subscription?: subscription_checkout_new_params;
    customer?: customer_checkout_new_params;
    card?: card_checkout_new_params;
    billing_address?: billing_address_checkout_new_params;
    shipping_address?: shipping_address_checkout_new_params;
    contract_term?: contract_term_checkout_new_params;
    addons?: Array<addons_checkout_new_params>;
    event_based_addons?: Array<event_based_addons_checkout_new_params>;
  }
  export interface checkout_existing_params {
    replace_addon_list?: boolean;
    mandatory_addons_to_remove?: Array<string>;
    billing_cycles?: number;
    terms_to_charge?: number;
    reactivate_from?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    reactivate?: boolean;
    force_term_reset?: boolean;
    redirect_url?: string;
    cancel_url?: string;
    pass_thru_content?: string;
    embed?: boolean;
    iframe_messaging?: boolean;
    allow_offline_payment_methods?: boolean;
    subscription?: subscription_checkout_existing_params;
    customer?: customer_checkout_existing_params;
    card?: card_checkout_existing_params;
    contract_term?: contract_term_checkout_existing_params;
    addons?: Array<addons_checkout_existing_params>;
    event_based_addons?: Array<event_based_addons_checkout_existing_params>;
  }
  export interface update_card_params {
    redirect_url?: string;
    cancel_url?: string;
    pass_thru_content?: string;
    embed?: boolean;
    iframe_messaging?: boolean;
    customer?: customer_update_card_params;
    card?: card_update_card_params;
  }
  export interface update_payment_method_params {
    redirect_url?: string;
    cancel_url?: string;
    pass_thru_content?: string;
    embed?: boolean;
    iframe_messaging?: boolean;
    customer?: customer_update_payment_method_params;
    card?: card_update_payment_method_params;
  }
  export interface manage_payment_sources_params {
    redirect_url?: string;
    customer?: customer_manage_payment_sources_params;
    card?: card_manage_payment_sources_params;
  }
  export interface collect_now_params {
    redirect_url?: string;
    currency_code?: string;
    customer?: customer_collect_now_params;
    card?: card_collect_now_params;
  }
  export interface accept_quote_params {
    quote?: quote_accept_quote_params;
  }
  export interface extend_subscription_params {
    expiry?: number;
    billing_cycle?: number;
    subscription?: subscription_extend_subscription_params;
    customer?: customer_extend_subscription_params;
  }
  export interface checkout_gift_params {
    redirect_url?: string;
    gifter?: gifter_checkout_gift_params;
    subscription?: subscription_checkout_gift_params;
    addons?: Array<addons_checkout_gift_params>;
  }
  export interface claim_gift_params {
    redirect_url?: string;
    gift?: gift_claim_gift_params;
    customer?: customer_claim_gift_params;
  }
  export interface retrieve_agreement_pdf_params {
    payment_source_id: string;
  }
  export interface hosted_page_list_params {
    limit?: number;
    offset?: string;
    id?: filter._string;
    type?: filter._enum;
    state?: filter._enum;
    updated_at?: filter._timestamp;
  }
  export interface subscription_checkout_new_params {
    id?: string;
  }
  export interface customer_checkout_new_params {
    id?: string;
  }
  export interface customer_checkout_new_params {
    email?: string;
  }
  export interface customer_checkout_new_params {
    first_name?: string;
  }
  export interface customer_checkout_new_params {
    last_name?: string;
  }
  export interface customer_checkout_new_params {
    company?: string;
  }
  export interface customer_checkout_new_params {
    taxability?: string;
  }
  export interface customer_checkout_new_params {
    locale?: string;
  }
  export interface customer_checkout_new_params {
    phone?: string;
  }
  export interface subscription_checkout_new_params {
    plan_unit_price_in_decimal?: string;
  }
  export interface subscription_checkout_new_params {
    plan_quantity_in_decimal?: string;
  }
  export interface subscription_checkout_new_params {
    plan_id: string;
  }
  export interface subscription_checkout_new_params {
    plan_quantity?: number;
  }
  export interface subscription_checkout_new_params {
    plan_unit_price?: number;
  }
  export interface subscription_checkout_new_params {
    setup_fee?: number;
  }
  export interface subscription_checkout_new_params {
    trial_end?: number;
  }
  export interface subscription_checkout_new_params {
    start_date?: number;
  }
  export interface subscription_checkout_new_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
  }
  export interface subscription_checkout_new_params {
    auto_collection?: string;
  }
  export interface subscription_checkout_new_params {
    offline_payment_method?: string;
  }
  export interface subscription_checkout_new_params {
    invoice_notes?: string;
  }
  export interface card_checkout_new_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_checkout_new_params {
    gateway_account_id?: string;
  }
  export interface customer_checkout_new_params {
    vat_number?: string;
  }
  export interface customer_checkout_new_params {
  }
  export interface customer_checkout_new_params {
    consolidated_invoicing?: boolean;
  }
  export interface billing_address_checkout_new_params {
    first_name?: string;
  }
  export interface billing_address_checkout_new_params {
    last_name?: string;
  }
  export interface billing_address_checkout_new_params {
    email?: string;
  }
  export interface billing_address_checkout_new_params {
    company?: string;
  }
  export interface billing_address_checkout_new_params {
    phone?: string;
  }
  export interface billing_address_checkout_new_params {
    line1?: string;
  }
  export interface billing_address_checkout_new_params {
    line2?: string;
  }
  export interface billing_address_checkout_new_params {
    line3?: string;
  }
  export interface billing_address_checkout_new_params {
    city?: string;
  }
  export interface billing_address_checkout_new_params {
    state_code?: string;
  }
  export interface billing_address_checkout_new_params {
    state?: string;
  }
  export interface billing_address_checkout_new_params {
    zip?: string;
  }
  export interface billing_address_checkout_new_params {
    country?: string;
  }
  export interface billing_address_checkout_new_params {
    validation_status?: string;
  }
  export interface shipping_address_checkout_new_params {
    first_name?: string;
  }
  export interface shipping_address_checkout_new_params {
    last_name?: string;
  }
  export interface shipping_address_checkout_new_params {
    email?: string;
  }
  export interface shipping_address_checkout_new_params {
    company?: string;
  }
  export interface shipping_address_checkout_new_params {
    phone?: string;
  }
  export interface shipping_address_checkout_new_params {
    line1?: string;
  }
  export interface shipping_address_checkout_new_params {
    line2?: string;
  }
  export interface shipping_address_checkout_new_params {
    line3?: string;
  }
  export interface shipping_address_checkout_new_params {
    city?: string;
  }
  export interface shipping_address_checkout_new_params {
    state_code?: string;
  }
  export interface shipping_address_checkout_new_params {
    state?: string;
  }
  export interface shipping_address_checkout_new_params {
    zip?: string;
  }
  export interface shipping_address_checkout_new_params {
    country?: string;
  }
  export interface shipping_address_checkout_new_params {
    validation_status?: string;
  }
  export interface subscription_checkout_new_params {
    affiliate_token?: string;
  }
  export interface contract_term_checkout_new_params {
    action_at_term_end?: string;
  }
  export interface contract_term_checkout_new_params {
    cancellation_cutoff_period?: number;
  }
  export interface subscription_checkout_new_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface addons_checkout_new_params {
    id?: string;
  }
  export interface addons_checkout_new_params {
    quantity?: number;
  }
  export interface addons_checkout_new_params {
    quantity_in_decimal?: string;
  }
  export interface addons_checkout_new_params {
    unit_price?: number;
  }
  export interface addons_checkout_new_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_checkout_new_params {
    billing_cycles?: number;
  }
  export interface event_based_addons_checkout_new_params {
    id?: string;
  }
  export interface event_based_addons_checkout_new_params {
    quantity?: number;
  }
  export interface event_based_addons_checkout_new_params {
    unit_price?: number;
  }
  export interface event_based_addons_checkout_new_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_checkout_new_params {
    unit_price_in_decimal?: string;
  }
  export interface event_based_addons_checkout_new_params {
    service_period_in_days?: number;
  }
  export interface event_based_addons_checkout_new_params {
    on_event?: string;
  }
  export interface event_based_addons_checkout_new_params {
    charge_once?: boolean;
  }
  export interface event_based_addons_checkout_new_params {
    charge_on?: string;
  }
  export interface subscription_checkout_existing_params {
    id: string;
  }
  export interface subscription_checkout_existing_params {
    plan_id?: string;
  }
  export interface subscription_checkout_existing_params {
    plan_quantity?: number;
  }
  export interface subscription_checkout_existing_params {
    plan_unit_price?: number;
  }
  export interface subscription_checkout_existing_params {
    setup_fee?: number;
  }
  export interface subscription_checkout_existing_params {
    plan_quantity_in_decimal?: string;
  }
  export interface subscription_checkout_existing_params {
    plan_unit_price_in_decimal?: string;
  }
  export interface subscription_checkout_existing_params {
    start_date?: number;
  }
  export interface subscription_checkout_existing_params {
    trial_end?: number;
  }
  export interface subscription_checkout_existing_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
  }
  export interface subscription_checkout_existing_params {
    auto_collection?: string;
  }
  export interface subscription_checkout_existing_params {
    offline_payment_method?: string;
  }
  export interface subscription_checkout_existing_params {
    invoice_notes?: string;
  }
  export interface customer_checkout_existing_params {
    vat_number?: string;
  }
  export interface customer_checkout_existing_params {
  }
  export interface card_checkout_existing_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_checkout_existing_params {
    gateway_account_id?: string;
  }
  export interface customer_checkout_existing_params {
  }
  export interface contract_term_checkout_existing_params {
    action_at_term_end?: string;
  }
  export interface contract_term_checkout_existing_params {
    cancellation_cutoff_period?: number;
  }
  export interface subscription_checkout_existing_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface addons_checkout_existing_params {
    id?: string;
  }
  export interface addons_checkout_existing_params {
    quantity?: number;
  }
  export interface addons_checkout_existing_params {
    unit_price?: number;
  }
  export interface addons_checkout_existing_params {
    billing_cycles?: number;
  }
  export interface event_based_addons_checkout_existing_params {
    id?: string;
  }
  export interface event_based_addons_checkout_existing_params {
    quantity?: number;
  }
  export interface event_based_addons_checkout_existing_params {
    unit_price?: number;
  }
  export interface event_based_addons_checkout_existing_params {
    service_period_in_days?: number;
  }
  export interface event_based_addons_checkout_existing_params {
    charge_on?: string;
  }
  export interface event_based_addons_checkout_existing_params {
    on_event?: string;
  }
  export interface event_based_addons_checkout_existing_params {
    charge_once?: boolean;
  }
  export interface addons_checkout_existing_params {
    quantity_in_decimal?: string;
  }
  export interface addons_checkout_existing_params {
    unit_price_in_decimal?: string;
  }
  export interface event_based_addons_checkout_existing_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_checkout_existing_params {
    unit_price_in_decimal?: string;
  }
  export interface customer_update_card_params {
    id: string;
  }
  export interface customer_update_card_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    vat_number?: string;
  }
  export interface card_update_card_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_update_card_params {
    gateway_account_id?: string;
  }
  export interface customer_update_card_params {
  }
  export interface customer_update_payment_method_params {
    id: string;
  }
  export interface customer_update_payment_method_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    vat_number?: string;
  }
  export interface card_update_payment_method_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_update_payment_method_params {
    gateway_account_id?: string;
  }
  export interface customer_update_payment_method_params {
  }
  export interface customer_manage_payment_sources_params {
    id: string;
  }
  export interface card_manage_payment_sources_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_manage_payment_sources_params {
    gateway_account_id?: string;
  }
  export interface customer_manage_payment_sources_params {
  }
  export interface customer_collect_now_params {
    id: string;
  }
  export interface card_collect_now_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_collect_now_params {
    gateway_account_id?: string;
  }
  export interface customer_collect_now_params {
  }
  export interface quote_accept_quote_params {
    id: string;
  }
  export interface subscription_extend_subscription_params {
    id: string;
  }
  export interface customer_extend_subscription_params {
  }
  export interface gifter_checkout_gift_params {
    customer_id?: string;
  }
  export interface gifter_checkout_gift_params {
    locale?: string;
  }
  export interface subscription_checkout_gift_params {
    plan_id: string;
  }
  export interface subscription_checkout_gift_params {
    plan_quantity?: number;
  }
  export interface subscription_checkout_gift_params {
    plan_quantity_in_decimal?: string;
  }
  export interface subscription_checkout_gift_params {
    coupon?: string;
  }
  export interface addons_checkout_gift_params {
    id?: string;
  }
  export interface addons_checkout_gift_params {
    quantity?: number;
  }
  export interface addons_checkout_gift_params {
    quantity_in_decimal?: string;
  }
  export interface gift_claim_gift_params {
    id: string;
  }
  export interface customer_claim_gift_params {
    locale?: string;
  }
}
