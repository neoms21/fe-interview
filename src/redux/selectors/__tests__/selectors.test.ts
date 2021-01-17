import { getFormattedMerchants } from "redux/selectors";

const appState: AppState = {
  merchants: {
    merchants: {
      m1: {
        id: "m1",
        name: "merchant1",
        iconUrl: "dummy",
        categoryId: 1,
        isBill: false,
        transactions: [],
      },
      m2: {
        id: "m2",
        name: "merchant2",
        iconUrl: "dummy",
        categoryId: 1,
        isBill: true,
        transactions: [],
      },
    },
    categories: { 1: { id: 1, iconUrl: "ci", name: "c1" } },
  },
};
describe("selectors test", () => {
  it("should create a shape of merchants required by UI(non-bill)", () => {
    const uiMerchants = getFormattedMerchants(appState, false);

    expect(uiMerchants).toEqual([
      {
        id: "m1",
        name: "merchant1",
        iconUrl: "dummy",
        categoryId: 1,
        isBill: false,
        transactions: [],
        categoryIconUrl: "ci",
        categoryName: "c1",
      },
    ]);
  });
  it("should create a shape of merchants required by UI(bill)", () => {
    const uiMerchants = getFormattedMerchants(appState, true);

    expect(uiMerchants).toEqual([
      {
        id: "m2",
        name: "merchant2",
        iconUrl: "dummy",
        categoryId: 1,
        isBill: true,
        transactions: [],
        categoryIconUrl: "ci",
        categoryName: "c1",
      },
    ]);
  });
});
