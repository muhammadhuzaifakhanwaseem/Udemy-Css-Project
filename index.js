let head = document.querySelector(".main-header");
let art1 = document.querySelector(".art1");
let art3 = document.querySelector(".art3");
let card = document.getElementById("packages");
function scroll() {
  if (window.scrollY >= 100) {
    head.style.background = "rgba(0, 46, 46, 0.793)";
  } else if (scrollY >= 0) {
    head.style.background = "rgb(0, 27, 27)";
  }
}
function scroll() {
  if (window.scrollY >= 700) {
    card.style.opacity = "0";
  } else if (scrollY >= 0) {
    card.style.opacity = "1";
  }
}
function scroll() {
  if (window.scrollY >= 400) {
    art1.style.width = "70%";
    art3.style.width = "70%";
  } else if (scrollY >= 0) {
    art1.style.width = "0%";
    art3.style.width = "0%";
  }
}




function myFunction(x) {
  let side = document.querySelector(".side");
  x.classList.toggle("change");
  side.classList.toggle("side-open");
}
