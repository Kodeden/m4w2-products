import PropTypes from "prop-types";

export default function SearchBar({ categories }) {
  return (
    <form className="my-4 flex flex-col items-center gap-y-4">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="search"
        id="search"
        placeholder="🔍 Search"
        className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />

      <label htmlFor="category" className="sr-only">
        Category
      </label>
      <select id="category" name="category">
        <option value="all">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div className="flex items-center gap-x-2">
        <input type="checkbox" id="in-stock-only" />
        <label htmlFor="in-stock-only">Only show products in stock</label>
      </div>
    </form>
  );
}

SearchBar.defaultProps = {
  categories: [],
};

SearchBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};
