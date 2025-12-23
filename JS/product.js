const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
const img_src = urlParams.get("image");

document.getElementById("title").innerText = title;
document.getElementById("image").src = img_src;
