/* eslint-disable no-unused-vars */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import Login from "../components/Login";
import App from "../App";

describe("Login Page: ", () => {
  it("renders the App component", () => {
    render(<Login />);

    expect(screen.getByText("Login")).toBeVisible(); // prints out the jsx in the App component unto the command line
  });
});

describe("Login Page: ", () => {
  it("renders the App component", async () => {
    //arrange
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const user = userEvent.setup();
    await user.click(screen.queryByText("Login"));

    //act
    await user.type(
      screen.getByPlaceholderText("E-mail adresiniz"),
      "emre@wit.com.tr"
    );
    await user.type(screen.getByLabelText("Password"), "1234Dr****");
    await user.click(screen.queryByText("Log In"));

    //assert
    expect(await screen.findByText("users")).toBeVisible();
  });
});
