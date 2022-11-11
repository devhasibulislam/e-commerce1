import { useEffect, useState } from "react";

function useCategoryProduct(category) {
  const [products, setProducts] = useState([]);
  const [temp, setTemp] = useState({});

  useEffect(() => {
    fetch(
      category === ""
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setTemp(data);
      })
      .catch((err) => console.error(err));
  }, [temp]);

  return products;
}

export default useCategoryProduct;
