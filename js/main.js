const open = document.getElementById("open");
const xmark = document.getElementById("xmark");
const navbar = document.querySelector(".navbar");
const head = document.querySelector("head");
xmark.style.display = "none";
navbar.classList.add("show");
open.onclick = () => {
  navbar.classList.add("show");

  xmark.style.display = "block";
  xmark.style.textAlign = "center";
  open.style.display = "none";
};

xmark.onclick = () => {
  navbar.classList.remove("show");
  open.style.display = "block";
  open.style.textAlign = "center";
  xmark.style.display = "none";
};
