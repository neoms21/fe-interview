import { render, screen } from "@testing-library/react";
import Merchants from "components/Merchants";

describe("Merchants test", () => {
  test("renders Merchants component", () => {
    render(<Merchants merchantSetAsBill={false} />);
  });
});
