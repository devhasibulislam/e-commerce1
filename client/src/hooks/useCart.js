function addToCart(product) {
  const cart = getFromCart();
  cart.push(product);
  localStorage.setItem("ysos-cart", JSON.stringify(cart));
}

function getFromCart() {
  const cart = localStorage.getItem("ysos-cart");
  let items = null;

  if (cart) {
    items = JSON.parse(cart);
  } else {
    items = [];
  }

  return items;
}

function checkInCart(id) {
  const pid = getFromCart().map((cart) => cart.id);
  if (pid.includes(id)) return true;
}

function removeFromCart(id) {
  const products = getFromCart();
  const matchedProducts = products.filter((product) => product.id !== id);

  localStorage.setItem("ysos-cart", JSON.stringify(matchedProducts));
}

export { addToCart, getFromCart, checkInCart, removeFromCart };
