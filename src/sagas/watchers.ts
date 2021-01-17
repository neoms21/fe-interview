import {
  FETCH_MERCHANTS,
  FETCH_CATEGORIES,
  TOGGLE_MERCHANT,
} from "./action-types";
import { fork, ForkEffect, takeEvery, takeLatest } from "redux-saga/effects";
import {
  fetchCategoriesWorker,
  fetchMerchantsWorker,
  toggleMerchantWorker,
} from "./workers";

function* getMerchantsWatcher() {
  yield takeEvery(FETCH_MERCHANTS, fetchMerchantsWorker);
}

function* getCategoriesWatcher() {
  yield takeEvery(FETCH_CATEGORIES, fetchCategoriesWorker);
}

function* toggleMerchantWatcher() {
  yield takeLatest(TOGGLE_MERCHANT, toggleMerchantWorker);
}

export const listsWatchers: ForkEffect[] = [
  fork(getMerchantsWatcher),
  fork(getCategoriesWatcher),
  fork(toggleMerchantWatcher),
];
