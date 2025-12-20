const pics = document.querySelectorAll(".cdabba");
    const screen = document.querySelector(".screen");
    let i = 0;
    function chalo() {
      screen.style.transform = `translateX(-${i * 100}%)`;
    }
    setInterval(() => {
      i++;
      if (i > 2) {
        i = 0;
      }
      chalo();
    }, 3000);