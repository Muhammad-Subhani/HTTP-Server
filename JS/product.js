const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
console.log(title);
const img_src = urlParams.get("image");
console.log(img_src);
const price = urlParams.get("price");
console.log(price);
const category = urlParams.get("category");
console.log(category);
const cnic = urlParams.get("data");
console.log(cnic);
// data-set pass nhi hota to different websites
function dikhao() {
  const box = document.getElementById("purchase");
  box.style.display = "block";
}
var newprice = parseInt(price);
console.log(newprice);
document.getElementById("title").innerText = title;
document.getElementById("T2").innerText += " " + title;
document.getElementById("image").src = img_src;
document.querySelector(".NI2").src = img_src;
document.getElementById("price").innerText = price;
document.getElementById("P2").innerText += " " + price;
document.querySelector(".BUY").innerText = `Buy For : ${newprice} Rs`;
document.getElementById("C2").innerText += " " + category;

if (category == "elec") {
  document.getElementById("category").innerText = "Electronics";
} else if (category == "shoewear") {
  document.getElementById("category").innerText = "ShoeWear";
}
const description = document.querySelector(".DP");
if (title === "Lenovo IdeaPad Slim 3") {
  description.innerText = `
  The Lenovo IdeaPad Slim 3 is an affordable, lightweight laptop ideal for everyday tasks like web browsing and document work. It offers various processor options (AMD Ryzen or Intel), decent battery life, and a 15.6-inch display, making it a practical choice for students and casual users on a budget.
  `;
}
if (title === "Sony Digital Camera") {
  description.innerText = `
  The Sony Digital Camera line includes a wide range of models from compact point-and-shoot cameras to advanced mirrorless systems. Known for excellent image quality, fast autofocus, and innovative features like in-body stabilization, Sony cameras are popular among both enthusiasts and professionals for photography and video recording.
  `;
}
if (title === "Infinix InBook") {
  description.innerText = `
 The Infinix InBook is a budget-friendly laptop offering solid performance for everyday tasks with Intel processors, up to 16GB RAM, and SSD storage. It features a sleek metal design, Full HD display, and long battery life, targeting students and professionals seeking an affordable yet capable notebook.
  `;
}
if (title === "Apple MacBook Pro 14 M5") {
  description.innerText = `
 The Apple MacBook Pro 14 with M5 chip delivers exceptional performance for professional workflows with advanced processing power, stunning Liquid Retina XDR display, and impressive battery life. It features a premium aluminum design, multiple Thunderbolt ports, and is ideal for creators, developers, and power users demanding top-tier performance and portability.
  `;
}
if (title === "Samsung T9 1TB SSD") {
  description.innerText = `
 The Samsung T9 1TB is a portable external SSD offering blazing-fast transfer speeds up to 2,000 MB/s with USB 3.2 Gen 2x2 connectivity. Its compact, durable design with shock resistance makes it perfect for photographers, content creators, and professionals needing reliable, high-speed portable storage.`;
}
if (title === "Ndure High Performance Sneakers") {
  description.innerText = `
 Ndure High Performance Sneakers are designed for active lifestyles, offering comfort and durability for sports and casual wear. They feature cushioned soles, breathable materials, and supportive construction at an affordable price point, making them a popular choice for budget-conscious consumers in Pakistan and neighboring markets.`;
}
if (title === "Elite Running Joggers") {
  description.innerText = `
 Elite Running Joggers are athletic pants designed for comfort during workouts and casual wear, featuring moisture-wicking fabric and a tapered fit. They offer flexibility, breathability, and practical details like zippered pockets, making them ideal for running, gym sessions, or everyday active use.`;
}

let i = 1;
function inc() {
  i++;
  document.getElementById("fcnt").innerText = i;
  document.querySelector(".BUY").innerText = "Buy For :" + i * newprice + "Rs";
}
function dec() {
  i--;
  if (i == 0) {
    box.style.opacity = "0";
  }
  document.getElementById("fcnt").innerText = i;
  document.querySelector(".BUY").innerText = "Buy For :" + i * newprice + "Rs";
}

function final() {
  alert("You have Succesfully Purchased");
  box.style.opacity = "0";
}
