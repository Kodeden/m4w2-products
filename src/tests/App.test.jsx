import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

describe("🔍 Search", () => {
  it("filters by search term", async () => {
    const query = "a";
    const filteredProducts = data.products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );

    const user = userEvent.setup();
    render(<App />);

    const searchInput = screen.getByLabelText(/search/i);

    // ⚠️ Wait for the products to load
    await screen.findAllByRole("listitem");

    await user.type(searchInput, query);

    const displayedProducts = await screen.findAllByRole("listitem");

    expect(displayedProducts).toHaveLength(filteredProducts.length);
  });

  it("filters by category", async () => {
    const category = "electronics";

    const user = userEvent.setup();
    const filteredProducts = data.products.filter(
      (product) => product.category.toLowerCase() === category
    );

    render(<App />);

    const categorySelect = screen.getByLabelText(/category/i);

    // ⚠️ Wait for the products to load
    await screen.findAllByRole("listitem");

    await user.selectOptions(categorySelect, category);

    const displayedProducts = await screen.findAllByRole("listitem");

    expect(displayedProducts).toHaveLength(filteredProducts.length);
  });

  it("filters by in stock only", async () => {
    const user = userEvent.setup();
    const filteredProducts = data.products.filter((product) => product.stocked);

    render(<App />);

    const inStockCheckbox = screen.getByLabelText(
      // Includes the phrase 'in stock' in the label (RegEx)
      /in stock/i
    );

    // ⚠️ Wait for the products to load
    await screen.findAllByRole("listitem");

    await user.click(inStockCheckbox);

    const displayedProducts = await screen.findAllByRole("listitem");

    expect(displayedProducts).toHaveLength(filteredProducts.length);
  });
});
