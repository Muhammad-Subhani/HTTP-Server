class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1>Header</h1>
      </header>
      `;
  }
}

customElements.define("header-comp", Header);
