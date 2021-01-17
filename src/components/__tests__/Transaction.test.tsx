import { render, screen } from "@testing-library/react";
import TransactionComponent from "components/Transaction";

describe("Transaction test", () => {
  test("renders Transaction component", () => {
    render(
      <TransactionComponent
        transaction={{ id: 10, amount: 12, date: "2012-11-12" }}
      />
    );

    expect(screen.getByText("Mon, 12 Nov 2012")).toBeInTheDocument();
    expect(screen.getByText("£12.00")).toBeInTheDocument();
  });
});
