import useFetch from "./hooks/useFetch";

const BASE_URL = "http://localhost:3001/products";

function App() {
  const products = useFetch(BASE_URL);

  return (
    <ul className="container mx-auto mt-8 flex flex-col items-center justify-center">
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - {product.price}
        </li>
      ))}
    </ul>
  );
}

export default App;
