class Card extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <div class="card product" id=${this.getAttribute("id")}>
          <a href="./product.html?title=${this.getAttribute("title")}&image=${this.getAttribute("image")}">
          <img
            class="product-image"
            src=${this.getAttribute("image")}
            alt="Product-Pic"
          /></a>
          <h4 class="card-title">${this.getAttribute("title")}</h4>
          <span class="price">${this.getAttribute("price")}</span>
          <button id="add-to-cart">Add to Cart</button>
        </div>
      `;
  }
}

customElements.define("card-comp", Card);
