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
        <input class='pd-20 reveal' id="feed" type="text" placeholder="Search the Items" />
        <div class="mag reveal" id="find">
        <a href ="#Our-Products">
        <i class="fa-solid fa-magnifying-glass"></i>
        </a>
        </div>
        <button id="categories" onclick="scrollToProducts()">Categories</button>
      </div>
      `;
  }
}

customElements.define("search-bar", SEARCH);
