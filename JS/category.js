function showCards(event, category) {
  cards = document.getElementsByClassName("product");

  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }

  for (i = 0; i < cards.length; i++) {
    if (cards[i].id == category) {
      cards[i].style.display = "flex";
    }
  }

  activeButtons = document.getElementsByClassName("active-category");
  for (i = 0; i < activeButtons.length; i++) {
    activeButtons[i].className = activeButtons[i].className.replaceAll(
      " active-category",
      "",
    );
  }

  event.currentTarget.className += " active-category";
}

function showAll(event) {
  cards = document.getElementsByClassName("product");
  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = "flex";
  }

  activeButtons = document.getElementsByClassName("active-category");
  for (i = 0; i < activeButtons.length; i++) {
    activeButtons[i].className = activeButtons[i].className.replaceAll(
      " active-category",
      "",
    );
  }

  event.currentTarget.className += " active-category";
}
