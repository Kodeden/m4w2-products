import PropTypes from "prop-types";
import ListItem from "./ListItem";

export default function ProductList({ products }) {
  return (
    <ul className="container mx-auto mt-8 flex flex-col items-center justify-center">
      {products.map((product) => (
        <ListItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ),
};
