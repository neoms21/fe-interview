import { Category, Merchant } from "types";
export const FETCH_MERCHANTS = "FETCH_MERCHANTS";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

export const FETCH_MERCHANTS_SUCCESS = "FETCH_MERCHANTS_SUCCESS";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";

export const TOGGLE_MERCHANT = "TOGGLE_MERCHANT";
export const TOGGLE_MERCHANT_SUCCESS = "TOGGLE_MERCHANT_SUCCESS";

export interface ToggleMerchantAction {
  type: typeof TOGGLE_MERCHANT;
  merchantId: string;
  isBill: boolean;
}
interface FetchMerchantsSuccessAction {
  type: typeof FETCH_MERCHANTS_SUCCESS;
  merchants: Array<Merchant>;
}
interface FetchCategoriesSuccessAction {
  type: typeof FETCH_CATEGORIES_SUCCESS;
  categories: Array<Category>;
}

interface ToggleMerchantSuccessAction {
  type: typeof TOGGLE_MERCHANT_SUCCESS;
  merchant: Merchant;
}

export type ReducerActionTypes =
  | FetchMerchantsSuccessAction
  | FetchCategoriesSuccessAction
  | ToggleMerchantSuccessAction;
