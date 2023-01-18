import PropTypes from "prop-types";

export default function InputSearch({ id, label, onChange }) {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        Search
      </label>
      <input
        type="search"
        id={id}
        placeholder="🔍 Search"
        className="rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        onChange={onChange}
      />
    </>
  );
}

InputSearch.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
