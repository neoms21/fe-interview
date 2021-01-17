import { render, screen, fireEvent } from "@testing-library/react";
import Merchants from "components/Merchants";
import * as redux from "react-redux";
import { AppState } from "types";

const appState: AppState = {
  merchants: {
    merchants: {
      "5a5caa1efe33900100fd8ed5": {
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
      "5a5caa8efe33900100fd8ed6": {
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
    },

    categories: {
      "1": {
        iconUrl:
          "https://s3.eu-west-2.amazonaws.com/cleoassets/images/category_icons/income.png",
        id: 1,
        name: "Phone",
      },
      "2": {
        iconUrl:
          "https://s3.eu-west-2.amazonaws.com/cleoassets/images/category_icons/entertainment.png",
        id: 2,
        name: "TV",
      },
    },
  },
};

describe("Merchants test", () => {
  describe("Rendering", () => {
    it("renders Merchants component with Non bills merchants", () => {
      const mockDispacth = jest.fn();
      jest
        .spyOn(redux, "useSelector")
        .mockImplementation((callback) => callback(appState));

      jest.spyOn(redux, "useDispatch").mockImplementation(mockDispacth);
      const { getByTestId } = render(<Merchants merchantSetAsBill={false} />);

      expect(screen.getByText("Vodafone")).toBeInTheDocument();
      expect(screen.queryByText("Sky TV")).toBeNull();
    });

    it("renders Merchants component with  bills merchants", () => {
      const mockDispacth = jest.fn();
      jest
        .spyOn(redux, "useSelector")
        .mockImplementation((callback) => callback(appState));

      jest.spyOn(redux, "useDispatch").mockImplementation(mockDispacth);
      const { getByTestId } = render(<Merchants merchantSetAsBill />);

      expect(screen.getByText("Sky TV")).toBeInTheDocument();
      expect(screen.queryByText("Vodafone")).toBeNull();
    });
  });

  describe("Interactions", () => {
    it("should dispatch the toggle merchant action", () => {
      const mockDispacth = jest.fn();
      jest
        .spyOn(redux, "useSelector")
        .mockImplementation((callback) => callback(appState));

      jest.spyOn(redux, "useDispatch").mockImplementation(() => mockDispacth);
      const { getByTestId } = render(<Merchants merchantSetAsBill={false} />);

      const toggleButton = getByTestId("btnToggle");

      fireEvent.click(toggleButton);

      expect(mockDispacth).toHaveBeenCalledWith({
        isBill: true,
        merchantId: "5a5caa1efe33900100fd8ed5",
        type: "TOGGLE_MERCHANT",
      });
    });

    // TODO was planning to test toggle of chevron using this but jsdom doesn't support it yet

    // it.only("should toggle the chevron", () => {
    //   const mockDispacth = jest.fn();
    //   jest
    //     .spyOn(redux, "useSelector")
    //     .mockImplementation((callback) => callback(appState));

    //   jest.spyOn(redux, "useDispatch").mockImplementation(() => mockDispacth);
    //   const { getByTestId } = render(<Merchants merchantSetAsBill={false} />);

    //   const merchantAccordion = getByTestId("5a5caa1efe33900100fd8ed5");
    //   console.log(window.getComputedStyle(merchantAccordion, ":before"));
    //   expect(merchantAccordion).toHaveStyle("background-image: aqqq");

    //   fireEvent.click(merchantAccordion);
    // });
  });
});
