const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
const img_src = urlParams.get("image");
const price = urlParams.get("price");
const category = urlParams.get("category");

document.getElementById("title").innerText = title;
document.getElementById("image").src = img_src;
document.getElementById("price").innerText = price;

if (category == "elec") {
  document.getElementById("category").innerText = "Electronics";
} else if (category == "shoewear") {
  document.getElementById("category").innerText = "ShoeWear";
}
