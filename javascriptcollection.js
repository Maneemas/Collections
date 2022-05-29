const toggleAll = (els, cl) => {els.forEach((el) => el.classList.toggle(cl))}
const btns = document.querySelectorAll("button");
const images = [
  document.querySelectorAll("div.cat-1"),
  document.querySelectorAll("div.cat-2"),
];

btns.forEach((el) => {
  el.addEventListener("click", (ev) => {
    toggleAll(images[ev.target.dataset.category-1], "active");
  });
});


