class Card extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <a href="./product.html?title=${this.getAttribute("title")}&image=${this.getAttribute("image")}&price=${this.getAttribute("price")}&category=${this.getAttribute("id")}&data=${this.getAttribute("pehchan")}"> 
        <div class="card product" id=${this.getAttribute("id")} data-cnic=${this.getAttribute("pehchan")}>
          <img
            class="product-image"
            src=${this.getAttribute("image")}
            alt="Product-Pic"
          />
          <h4 class="card-title">${this.getAttribute("title")}</h4>
          <span class="price">Rs ${this.getAttribute("price")}/-</span>
          <button id="add-to-cart">Add to Cart</button>
        </div>
        </a>
      `;
  }
}

customElements.define("card-comp", Card);
