import PropTypes from "prop-types";
import { InputCheckBox, InputSearch, Select } from "./Form";

export default function SearchBar({
  categories,
  setSearchTerm,
  setSearchCat,
  setIsInStockOnly,
}) {
  return (
    <form className="my-4 flex flex-col items-center gap-y-4">
      <InputSearch
        id="search"
        label="Search"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      <Select
        id="category"
        label="Category"
        options={categories}
        onChange={(e) => {
          setSearchCat(e.target.value);
        }}
      />

      <InputCheckBox
        id="in-stock-only"
        label="Only show products in stock"
        onChange={() => {
          setIsInStockOnly((prev) => !prev);
        }}
      />
    </form>
  );
}

SearchBar.defaultProps = {
  categories: [],
};

SearchBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  setSearchCat: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  setIsInStockOnly: PropTypes.func.isRequired,
};
