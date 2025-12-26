const pics = document.querySelectorAll(".cdabba");
const screen = document.querySelector(".screen");
let i = 0;
function chalo() {
  screen.style.transform = `translateX(-${i * 100}%)`;
}
const agla = document.getElementById("Forward");
const pichla = document.getElementById("Previous");
agla.addEventListener("click", () => {
  i++;
  if (i > 2) i = 0;
  chalo();
});
pichla.addEventListener("click", () => {
  i--;
  if (i < 0) i = 0;
  chalo();
});
setInterval(() => {
  i++;
  if (i > 2) {
    i = 0;
  }
  chalo();
}, 4000);

