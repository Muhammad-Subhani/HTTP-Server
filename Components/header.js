class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <header class="header box-shadow">
        <div class="header-title">EFLYER</div>
        <div class="header-pages">
          <div class="header-element">Home</div>
          <div class="header-element">Products</div>
          <div class="header-element">About</div>
        </div>
    </header>
      `;
  }
}

customElements.define("header-comp", Header);
