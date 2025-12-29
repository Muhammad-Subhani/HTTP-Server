class Card extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.className = "card product";
    this.innerHTML = `
        <a  id=${this.getAttribute("id")} data-cnic=${this.getAttribute("pehchan")} href="./product.html?title=${this.getAttribute("title")}&image=${this.getAttribute("image")}&price=${this.getAttribute("price")}&category=${this.getAttribute("id")}&data=${this.getAttribute("pehchan")}">
          <img
            class="product-image"
            src=${this.getAttribute("image")}
            alt="Product-Pic"
          />
          <h4 class="card-title">${this.getAttribute("title")}</h4>
          <span class="price">Rs ${this.getAttribute("price")}/-</span>
          <button id="add-to-cart">Add to Cart</button>
        </a>
      `;
  }
}

customElements.define("card-comp", Card);
