import { useEffect, useState } from "react";

function useCategory() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return products;
}

export default useCategory;
