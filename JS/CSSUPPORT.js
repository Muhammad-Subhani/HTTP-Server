window.addEventListener("scroll", dikhao);

let hasAnimated1 = false;
let hasAnimated2 = false;
let hasAnimated3 = false;


function dikhao() {
  let Reveal = document.querySelectorAll(".count");
  const HC = document.getElementById("cd-h1");
  const PA = document.getElementById("cd-h2");
  const B = document.getElementById("cd-h3");

  for (let j = 0; j < Reveal.length; j++) {
    let winheight = window.innerHeight;
    let rvltop = Reveal[j].getBoundingClientRect().top;
    console.log(j, rvltop);
    let points = 100;

    if (rvltop < winheight - points) {
      Reveal[j].classList.add("active");
    } else {
      Reveal[j].classList.remove("active");
    }
if (HC.classList.contains("active") && !hasAnimated1) {
  hasAnimated1 = true;
  let a = 0;
  let part1 = setInterval(() => {
    HC.innerText = a + "+";
    a++;
    if (a > 1000) {
      clearInterval(part1);
    }
  }, 4);
}

if (PA.classList.contains("active") && !hasAnimated2) {
  hasAnimated2 = true;
  let a = 0;
  let part2 = setInterval(() => {
    PA.innerText = a + "+";
    a++;
    if (a > 1200) {
      clearInterval(part2);
    }
  }, 0.5);
}

if (B.classList.contains("active") && !hasAnimated3) {
  hasAnimated3 = true;
  let a = 0;
  let part3 = setInterval(() => {
    B.innerText = a + "+";
    a++;
    if (a > 50) {
      clearInterval(part3);
    }
  }, 50);
}
  }
}

//   // NOW check and start animations AFTER adding active class


dikhao();



