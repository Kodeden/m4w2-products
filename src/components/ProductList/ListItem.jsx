import PropTypes from "prop-types";

export default function ListItem({ product }) {
  return (
    <li key={product.id} className="border-b py-2 first:border-t">
      {product.name} - {product.price}
    </li>
  );
}

ListItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};
