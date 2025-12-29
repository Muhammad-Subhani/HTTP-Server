function showCards(event, category, section) {
  cards = document.getElementsByClassName("product");

  for (i = 0; i < cards.length; i++) {
    if (cards[i].getAttribute("pehchan") == section) {
      cards[i].style.display = "none";
    }
  }

  for (i = 0; i < cards.length; i++) {
    // Compares the category of cards with the provided category and decides whether to show them or hide
    if (cards[i].id == category) {
      cards[i].style.display = "flex";
    }
  }

  activeButtons = document.getElementsByClassName(section);
  for (i = 0; i < activeButtons.length; i++) {
    console.log(i);
    activeButtons[i].className = activeButtons[i].className.replaceAll(
      " active-category",
      "",
    );
  }

  event.currentTarget.className += " active-category";
}

function showAll(event, section) {
  cards = document.getElementsByClassName("product");
  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = "flex";
  }

  // Changing the active style from the previous button to All button
  activeButtons = document.getElementsByClassName(section);
  for (i = 0; i < activeButtons.length; i++) {
    activeButtons[i].className = activeButtons[i].className.replaceAll(
      " active-category",
      "",
    );
  }

  event.currentTarget.className += " active-category";
}
