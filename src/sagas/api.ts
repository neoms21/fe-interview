import { Category, Merchant } from "types/";
import axios from "axios";
import { APIConstants } from "shared/constants";

export const fetchMerchantsApi = async (): Promise<Array<Merchant>> => {
  const { data } = await axios.get<Array<Merchant>>(
    `${APIConstants.base}/merchants`
  );
  return data;
};

export const fetchCategoriesApi = async (): Promise<Array<Category>> => {
  const { data } = await axios.get<Array<Category>>(
    `${APIConstants.base}/categories`
  );

  return data;
};

export const toggleMerchantApi = async (
  merchantId: string,
  isBill: boolean
): Promise<Merchant> => {
  const { data } = await axios.patch<Merchant>(
    `${APIConstants.base}/merchants/${merchantId}`,
    { isBill }
  );

  return data;
};
