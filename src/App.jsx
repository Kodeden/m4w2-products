import ProductList from "./components/ProductList/ProductList";
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
      <ProductList products={filteredProducts} />
    </>
  );
}

export default App;
