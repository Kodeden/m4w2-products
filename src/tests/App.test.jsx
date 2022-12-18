import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import data from "../../db.json";
import App from "../App";

test("renders correctly", () => {
  const appRender = render(<App />);
  expect(appRender).toMatchSnapshot();
});

it("loads and displays products", async () => {
  render(<App />);
  const products = await screen.findAllByRole("listitem");
  expect(products).toHaveLength(data.products.length);
});
