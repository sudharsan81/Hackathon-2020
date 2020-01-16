import React from "react";
import { render, getByAltText } from "@testing-library/react";
import App from "./App";

test("renders logo", () => {
  const { getByAltText } = render(<App />);
  const logo = getByAltText("logo");
  expect(logo).toBeInTheDocument();
});

// test("renders navigation bar", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
