import { useState } from "react";

export default function useSearch(products) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCat, setSearchCat] = useState("All");
  const [isInStockOnly, setIsInStockOnly] = useState(false);

  let filteredProducts = products;

  if (searchTerm) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (
    searchCat !==
    // value is lowercase
    "All".toLowerCase()
  ) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === searchCat
    );
  }

  if (isInStockOnly) {
    filteredProducts = filteredProducts.filter((product) => product.stocked);
  }

  return {
    setSearchTerm,
    setSearchCat,
    setIsInStockOnly,
    filteredProducts,
  };
}
