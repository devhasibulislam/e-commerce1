import { useEffect, useState } from "react";

function useCategoryProduct(category) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      category === ""
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [category]);

  return products;
}

export default useCategoryProduct;
