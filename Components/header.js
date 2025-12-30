function scrollToAbout() {
  console.log("Scrolling");
  const aboutSection = document.getElementById("about-us");
  aboutSection.scrollIntoView({
    behaviour: "smooth",
    block: "center",
  });
}

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="header box-shadow">
        <div class="header-title"><img src="Assets/Images/globe.png" class = "logo"><a href="./home.html">CosmoBUY</a></div>
        <div class="header-pages">
          <div class="header-element"><a href="./home.html">Home</a></div>
          <div class="header-element"><a href="./tech-products.html">Tech Gadgets</a></div>
          <div class="header-element"><a href="./shoewear.html">ShoeWear</a></div>
          <div class="header-element" onclick="scrollToAbout()">About</div>
        </div>
    </header>
      `;
  }
}

customElements.define("header-comp", Header);
