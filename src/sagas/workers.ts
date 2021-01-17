import { call, put } from "redux-saga/effects";
import {
  fetchCategoriesSuccessAction,
  fetchMerchantsSuccessAction,
  toggleMerchantSuccessAction,
} from "./actions";

import { ToggleMerchantAction } from "./action-types";
import {
  fetchCategoriesApi,
  fetchMerchantsApi,
  toggleMerchantApi,
} from "./api";

export function* fetchMerchantsWorker(): any {
  try {
    const merchants = yield call(fetchMerchantsApi);

    yield put(fetchMerchantsSuccessAction(merchants));
  } catch (error) {
    console.error(
      "🚀 ~ file: workers.ts ~ line 18 ~ function*fetchMerchantsWorker ~ error",
      error
    );
  }
}

export function* fetchCategoriesWorker(): any {
  try {
    const categories = yield call(fetchCategoriesApi);

    yield put(fetchCategoriesSuccessAction(categories));
  } catch (error) {
    console.error(
      "🚀 ~ file: workers.ts ~ line 28 ~ function*fetchCategoriesWorker ~ error",
      error
    );
  }
}
export function* toggleMerchantWorker(action: ToggleMerchantAction): any {
  try {
    const { merchantId, isBill } = action;
    const merchant = yield call(toggleMerchantApi, merchantId, isBill);

    yield put(toggleMerchantSuccessAction(merchant));
  } catch (error) {
    console.error(
      "🚀 ~ file: workers.ts ~ line 39 ~ function*toggleMerchantWorker ~ error",
      error
    );
  }
}
