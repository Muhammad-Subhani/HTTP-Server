class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <header class="header box-shadow">
        <div class="header-title">EFLYER</div>
        <div class="header-pages">
          <div class="header-element"><a href="./home.html">Home</a></div>
          <div class="header-element"><a href="./products.html">Products</a></div>
          <div class="header-element"><a>About</a></div>
        </div>
    </header>
      `;
  }
}

customElements.define("header-comp", Header);
