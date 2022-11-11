import { useEffect, useState } from "react";

function useProduct() {
  const [products, setProducts] = useState([]);
  const [temp, setTemp] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setTemp(data); // refetch at certain interval
      })
      .catch((err) => console.error(err));
  }, [temp]);

  return products;
}

export default useProduct;
