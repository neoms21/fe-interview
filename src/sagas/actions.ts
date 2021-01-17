import { Category, Merchant } from "types";
import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_MERCHANTS_SUCCESS,
  TOGGLE_MERCHANT,
  TOGGLE_MERCHANT_SUCCESS,
} from "./action-types";

export const raiseFetchAction = (type: string) => ({ type });

export const fetchMerchantsSuccessAction = (merchants: Array<Merchant>) => ({
  type: FETCH_MERCHANTS_SUCCESS,
  merchants,
});

export const fetchCategoriesSuccessAction = (categories: Array<Category>) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories,
});

export const toggleMerchantAction = (merchantId: string, isBill: boolean) => ({
  type: TOGGLE_MERCHANT,
  merchantId,
  isBill,
});

export const toggleMerchantSuccessAction = (merchant: Merchant) => ({
  type: TOGGLE_MERCHANT_SUCCESS,
  merchant,
});
