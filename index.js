let items = document.querySelectorAll(".caro .item");

items.forEach((el) => {
  // number of slides per carousel-item
  const minPerSlide = 5;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

let selectList = document.querySelectorAll(".list");

for (let i = 0; i < selectList.length; i++) {
  selectList[i].addEventListener("click", function (e) {
    let j = 0;
    while (j < selectList.length) {
      selectList[j++].className = "list";
    }
    selectList[i].className = "list active";

    e.preventDefault();
  });
}

let toggleSelect = document.querySelector(".toggler");
let optionSelect = document.querySelector(".options");
let topSelect = document.querySelector(".top");

toggleSelect.addEventListener("click", function () {
  toggleSelect.classList.toggle("active");
  optionSelect.classList.toggle("active");
  topSelect.classList.toggle("active");
});
