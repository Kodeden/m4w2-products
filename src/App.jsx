import React from "react";

const BASE_URL = "http://localhost:3001/products";

function App() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
