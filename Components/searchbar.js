class SEARCH extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <div class="srch">
        <div class="menu reveal">
          <span class="material-symbols-outlined"> menu </span>
        </div>
        <input class='pd-20 reveal' type="text" placeholder="Search the Items" />
        <div class="mag reveal">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <button id="categories">Categories</button>
      </div>
      `;
  }
}

customElements.define("search-bar", SEARCH);
