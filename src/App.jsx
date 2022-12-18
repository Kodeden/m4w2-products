import SearchBar from "./components/SearchBar";
import useFetch from "./hooks/useFetch";

const BASE_URL = "http://localhost:3001/products";

function App() {
  const products = useFetch(BASE_URL);

  return (
    <>
      <h1 className="my-4 text-center text-2xl font-black">Product App</h1>
      <SearchBar
        categories={[...new Set(products.map((product) => product.category))]}
      />
      <ul className="container mx-auto mt-8 flex flex-col items-center justify-center">
        {products.map((product) => (
          <li key={product.name} className="border-y py-2">
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
