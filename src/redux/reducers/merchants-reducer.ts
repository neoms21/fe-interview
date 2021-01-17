import { Category, Merchant, MerchantsState } from "./../../types/index";
import {
  ReducerActionTypes,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_MERCHANTS_SUCCESS,
  TOGGLE_MERCHANT_SUCCESS,
} from "./../../sagas/action-types";
import { Reducer } from "redux";

export const initMerchantsState: MerchantsState = {
  merchants: {},
  categories: {},
};

export const merchantsReducer: Reducer<MerchantsState, ReducerActionTypes> = (
  state: MerchantsState = initMerchantsState,
  action: ReducerActionTypes
): MerchantsState => {
  switch (action.type) {
    case FETCH_MERCHANTS_SUCCESS:
      return {
        ...state,
        merchants: action.merchants.reduce(
          (acc: Record<string, Merchant>, merchant: Merchant) => ({
            ...acc,
            [merchant.id]: merchant,
          }),
          {}
        ),
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories.reduce(
          (acc: Record<string, Category>, category: Category) => ({
            ...acc,
            [category.id.toString()]: category,
          }),
          {}
        ),
      };
    case TOGGLE_MERCHANT_SUCCESS:
      const { merchant } = action;

      return {
        ...state,
        merchants: { ...state.merchants, [merchant.id]: { ...merchant } },
      };

    default:
      return {
        ...state,
      };
  }
};
