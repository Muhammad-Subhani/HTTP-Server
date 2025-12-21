class Card extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <div class="card">
          <img
            class="product-image"
            src=${this.getAttribute("image")}
            alt="Product-Pic"
          />
          <h4 class="card-title">${this.getAttribute("title")}</h4>
          <span class="price">${this.getAttribute("price")}</span>
        </div>
      `;
  }
}

customElements.define("card-comp", Card);
