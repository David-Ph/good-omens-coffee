let beansBlock = document.querySelector(".beans-articles");

beansBlock.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-remove")) {
    let id = e.target.parentNode.parentNode.querySelector(".id").value;
    fetch(`https://good-omens-coffee.herokuapp.com/beans/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.text())
      .then(() => window.history.go());
  }
});
