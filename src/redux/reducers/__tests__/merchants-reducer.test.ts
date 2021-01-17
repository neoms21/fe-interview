import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_MERCHANTS_SUCCESS,
  TOGGLE_MERCHANT_SUCCESS,
} from "./../../../sagas/action-types";
import { merchantsReducer } from "./../merchants-reducer";
const merchantsJson = [
  {
    categoryId: 1,
    iconUrl:
      "https://pbs.twimg.com/profile_images/1151788824093188097/wHfb5mYZ_bigger.png",
    id: "5a5caa1efe33900100fd8ed5",
    isBill: false,
    name: "Vodafone",
    transactions: [
      {
        amount: 12.34,
        date: "2018-01-13",
        id: 36,
      },
      {
        amount: 14.34,
        date: "2018-02-13",
        id: 37,
      },
      {
        amount: 15.54,
        date: "2018-03-13",
        id: 38,
      },
      {
        amount: 11.34,
        date: "2018-04-13",
        id: 39,
      },
      {
        amount: 18.99,
        date: "2018-05-13",
        id: 40,
      },
    ],
  },
  {
    categoryId: 2,
    iconUrl:
      "https://pbs.twimg.com/profile_images/1280004967726751744/1YFw1Bdu_bigger.jpg",
    id: "5a5caa8efe33900100fd8ed6",
    isBill: true,
    name: "Sky TV",
    transactions: [
      {
        amount: 82.17,
        date: "2018-01-01",
        id: 41,
      },
      {
        amount: 82.17,
        date: "2018-02-01",
        id: 42,
      },
      {
        amount: 82.17,
        date: "2018-03-01",
        id: 43,
      },
      {
        amount: 82.17,
        date: "2018-04-01",
        id: 44,
      },
      {
        amount: 82.17,
        date: "2018-05-01",
        id: 45,
      },
    ],
  },
];

describe("Merchants reducer test", () => {
  it("should set merchants on reducer", () => {
    const result = merchantsReducer(undefined, {
      type: FETCH_MERCHANTS_SUCCESS,
      merchants: merchantsJson,
    });

    expect(result.merchants).toEqual({
      "5a5caa1efe33900100fd8ed5": merchantsJson[0],
      "5a5caa8efe33900100fd8ed6": merchantsJson[1],
    });
  });

  it("should set categories on reducer", () => {
    const categoriesJson = [
      {
        iconUrl:
          "https://s3.eu-west-2.amazonaws.com/cleoassets/images/category_icons/income.png",
        id: 1,
        name: "Phone",
      },
      {
        iconUrl:
          "https://s3.eu-west-2.amazonaws.com/cleoassets/images/category_icons/entertainment.png",
        id: 2,
        name: "TV",
      },
    ];
    const result = merchantsReducer(undefined, {
      type: FETCH_CATEGORIES_SUCCESS,
      categories: categoriesJson,
    });

    expect(result.categories).toEqual({
      "1": categoriesJson[0],
      "2": categoriesJson[1],
    });
  });

  it("should toggle the merchant", () => {
    const merchant = {
      name: "A",
      transactions: [],
      isBill: false,
      id: "A1",
      iconUrl: "dummy",
      categoryId: 1,
    };
    const result = merchantsReducer(
      {
        merchants: {
          A1: merchant,
        },
        categories: {},
      },
      {
        type: TOGGLE_MERCHANT_SUCCESS,
        merchant: { ...merchant, isBill: true },
      }
    );

    expect(result).toEqual({
      merchants: {
        A1: { ...merchant, isBill: true },
      },
      categories: {},
    });
  });
});
