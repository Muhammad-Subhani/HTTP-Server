const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
const img_src = urlParams.get("image");
const price = urlParams.get("price");
category = urlParams.get("category");
const cnic = urlParams.get("data");

// data-set pass nhi hota to different websites
const box = document.getElementById("purchase");
function dikhao() {
  box.style.display = "flex";
}

if (category == "elec") {
  category = "Electronics";
  document.getElementById("category").innerText = category;
} else if (category == "shoewear") {
  category = "ShoeWear";
  document.getElementById("category").innerText = category;
}
var newprice = parseInt(price);

document.getElementById("title").innerText = title;
document.getElementById("T2").innerText += " " + title;
document.getElementById("image").src = img_src;
document.querySelector(".NI2").src = img_src;
document.getElementById("price").innerText = price;
document.getElementById("P2").innerText += " " + price;
document.querySelector(".BUY").innerText = `Buy for Rs ${newprice}`;
document.getElementById("C2").innerText += " " + category;

const description = document.querySelector(".DP");

// Mapped the descriptions of the products against their titles so that they can be accessed later
const descs = {
  "Lenovo IdeaPad Slim 3":
    "The Lenovo IdeaPad Slim 3 is an affordable, lightweight laptop ideal for everyday tasks like web browsing and document work. It offers various processor options (AMD Ryzen or Intel), decent battery life, and a 15.6-inch display, making it a practical choice for students and casual users on a budget.",
  "Sony Digital Camera":
    "The Sony Digital Camera line includes a wide range of models from compact point-and-shoot cameras to advanced mirrorless systems. Known for excellent image quality, fast autofocus, and innovative features like in-body stabilization, Sony cameras are popular among both enthusiasts and professionals for photography and video recording.",
  "Infinix InBook":
    "The Infinix InBook is a budget-friendly laptop offering solid performance for everyday tasks with Intel processors, up to 16GB RAM, and SSD storage. It features a sleek metal design, Full HD display, and long battery life, targeting students and professionals seeking an affordable yet capable notebook.",
  "Apple MacBook Pro 14 M5":
    "The Apple MacBook Pro 14 with M5 chip delivers exceptional performance for professional workflows with advanced processing power, stunning Liquid Retina XDR display, and impressive battery life. It features a premium aluminum design, multiple Thunderbolt ports, and is ideal for creators, developers, and power users demanding top-tier performance and portability.",
  "Samsung T9 1TB SSD":
    "The Samsung T9 1TB is a portable external SSD offering blazing-fast transfer speeds up to 2,000 MB/s with USB 3.2 Gen 2x2 connectivity. Its compact, durable design with shock resistance makes it perfect for photographers, content creators, and professionals needing reliable, high-speed portable storage.",
  "Ndure High Performance Sneakers":
    "Ndure High Performance Sneakers are designed for active lifestyles, offering comfort and durability for sports and casual wear. They feature cushioned soles, breathable materials, and supportive construction at an affordable price point, making them a popular choice for budget-conscious consumers in Pakistan and neighboring markets.",
  "Elite Running Joggers":
    "Elite Running Joggers are athletic pants designed for comfort during workouts and casual wear, featuring moisture-wicking fabric and a tapered fit. They offer flexibility, breathability, and practical details like zippered pockets, making them ideal for running, gym sessions, or everyday active use.",
};

description.innerText = descs[title];

let i = 1;
function inc() {
  i++;
  document.getElementById("fcnt").innerText = i;
  document.querySelector(".BUY").innerText = "Buy for Rs " + i * newprice;
}
function dec() {
  i--;
  if (i == 0) {
    box.style.display = "none";
    i = 1;
  }
  document.getElementById("fcnt").innerText = i;
  document.querySelector(".BUY").innerText = "Buy for Rs" + i * newprice;
}

function final() {
  alert("You have Succesfully Purchased");
  box.style.opacity = "0";
}
