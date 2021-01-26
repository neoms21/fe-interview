import { toggleMerchantSuccessAction } from "./../actions";
import { runSaga } from "redux-saga";
import {
  fetchMerchantsSuccessAction,
  fetchCategoriesSuccessAction,
} from "sagas/actions";
import {
  fetchCategoriesWorker,
  fetchMerchantsWorker,
  toggleMerchantWorker,
} from "sagas/workers";
import * as api from "../api";
import { TOGGLE_MERCHANT } from "sagas/action-types";

describe("Sagas tests", () => {
  it("should call api and dispatch success action for fetch merchants", async () => {
    const mockMerchants = [
      {
        name: "m1",
        id: "1",
        iconUrl: "dummy",
        isBill: false,
        categoryId: 1,
        transactions: [],
      },
    ];
    
    const mockMerchantsApi = jest
      .spyOn(api, "fetchMerchantsApi")
      .mockImplementation(() => Promise.resolve(mockMerchants));
    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchMerchantsWorker
    );

    expect(mockMerchantsApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchMerchantsSuccessAction(mockMerchants)]);
    mockMerchantsApi.mockClear();
  });

  it("should call api and dispatch success action for fetch categories", async () => {
    const mockCategories = [
      {
        id: 1,
        name: "C1",
        iconUrl: "dummy",
      },
    ];
    const mockCategoriesApi = jest
      .spyOn(api, "fetchCategoriesApi")
      .mockImplementation(() => Promise.resolve(mockCategories));
    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchCategoriesWorker
    );

    expect(mockCategoriesApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchCategoriesSuccessAction(mockCategories)]);
    mockCategoriesApi.mockClear();
  });

  it("should call update merchant api and dispatch success action to update store", async () => {
    const mockMerchant = {
      name: "m1",
      id: "1",
      iconUrl: "dummy",
      isBill: false,
      categoryId: 1,
      transactions: [],
    };

    const mockUpdateMerchantApi = jest
      .spyOn(api, "toggleMerchantApi")
      .mockImplementation(() => Promise.resolve(mockMerchant));
    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      toggleMerchantWorker,
      { type: TOGGLE_MERCHANT, merchantId: "m1", isBill: false }
    );

    expect(mockUpdateMerchantApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([toggleMerchantSuccessAction(mockMerchant)]);
    mockUpdateMerchantApi.mockClear();
  });
});
