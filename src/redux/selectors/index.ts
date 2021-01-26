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
    averageSpend: merchant.transactions.length
      ? merchant.transactions.reduce(
          (total, transaction) => total + transaction.amount,
          0
        ) / merchant.transactions.length
      : 0,
  }));
};

export const getSelectedMerchantsCount = (state: AppState): number[] => {
  const merchantsFromState = Object.values(state.merchants.merchants);
  
  const selectedMerchants = merchantsFromState.filter((m) => m.isBill);
  const prospectiveMerchants = merchantsFromState.filter((m) => !m.isBill);

  return [selectedMerchants.length, prospectiveMerchants.length];
};
