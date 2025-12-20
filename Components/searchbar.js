class SEARCH extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <div class="srch">
        <div class="menu">
          <span class="material-symbols-outlined"> menu </span>
        </div>
        <input type="text" placeholder="Search The Item" />
        <div class="mag">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <button id="categories">categories</button>
      </div>
      `;
  }
}

customElements.define("search-bar", SEARCH);