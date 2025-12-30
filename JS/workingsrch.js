const input = document.getElementById("feed");
const srchbtn = document.getElementById("find");
srchbtn.addEventListener("click", () => {
  let cards = document.querySelectorAll("card-comp");
  cards.forEach((card) => {
    let title = card.getAttribute("title").toLocaleLowerCase().trim();
    let srchitem = input.value.toLocaleLowerCase().trim();
    if ((srchitem = "" || title.includes(srchitem))) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});

