async function getOrders() {
  return await fetch("https://good-omens-coffee.herokuapp.com/orders")
    .then((response) => response.json())
    .then((data) => data);
}
