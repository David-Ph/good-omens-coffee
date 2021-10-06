async function getBeans() {
  return await fetch("https://good-omens-coffee.herokuapp.com/beans")
    .then((response) => response.json())
    .then((data) => data);
}
