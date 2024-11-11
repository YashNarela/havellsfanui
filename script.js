let burger = document.querySelector(".burger");

let list = document.querySelector(".lic");

burger.addEventListener("click", () => {
  list.classList.toggle("active");
});
