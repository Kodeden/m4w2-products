import SearchBar from "./components/SearchBar";
import useFetch from "./hooks/useFetch";
import useSearch from "./hooks/useSearch";

const BASE_URL = "http://localhost:3001/products";

function App() {
  const products = useFetch(BASE_URL);
  const { setSearchTerm, setSearchCat, setIsInStockOnly, filteredProducts } =
    useSearch(products);

  return (
    <>
      <h1 className="my-4 text-center text-2xl font-black">Product App</h1>
      <SearchBar
        categories={[...new Set(products.map((product) => product.category))]}
        setSearchTerm={setSearchTerm}
        setSearchCat={setSearchCat}
        setIsInStockOnly={setIsInStockOnly}
      />
      <ul className="container mx-auto mt-8 flex flex-col items-center justify-center">
        {filteredProducts.map((product) => (
          <li key={product.name} className="border-y py-2">
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
