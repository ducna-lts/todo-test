import App from "../App";
import { render, screen } from "../test/test-utils";
import { BrowserRouter } from "react-router-dom";

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/todos/i)).toBeInTheDocument();
  });
});
