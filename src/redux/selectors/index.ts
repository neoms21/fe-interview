import { UiMerchant } from "./../../types/index";
import { AppState } from "types";

export const getFormattedMerchants = (
  state: AppState,
  setAsBill: boolean
): Array<UiMerchant> => {
  const { categories } = state.merchants;
  const merchantsFromState = Object.values(state.merchants.merchants);
  const filteredMerchants = merchantsFromState.filter(
    (m) => m.isBill === setAsBill
  );

  return filteredMerchants.map((merchant) => ({
    ...merchant,
    categoryIconUrl: categories[merchant.categoryId.toString()]?.iconUrl,
    categoryName: categories[merchant.categoryId.toString()]?.name,
  }));
};
