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
        <input class='pd-20' type="text" placeholder="Search the Items" />
        <div class="mag">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <button id="categories">Categories</button>
      </div>
      `;
  }
}

customElements.define("search-bar", SEARCH);

