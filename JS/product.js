const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
const img_src = urlParams.get("image");
const price = urlParams.get("price");
category = urlParams.get("category");
const cnic = urlParams.get("data");

// data-set pass nhi hota to different websites
const box = document.getElementById("purchase");

function show() {
  box.style.display = "flex";
  console.log("shown");
}

if (category == "elec") {
  category = "Electronics";
  document.getElementById("category").innerText = category;
} else if (category == "shoewear") {
  category = "ShoeWear";
  document.getElementById("category").innerText = category;
} else if (category == "laptop") {
  category = "Laptop";
  document.getElementById("category").innerText = category;
} else if (category == "storage") {
  category = "Storage";
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
  "SanDisk Extreme PRO SD UHS-II Card (V90) - 64GB":
    "Capture once-in-a-lifetime moments with the SanDisk Extreme PRO SD UHS-II card. Its pro-level performance enables cinema-quality 8K3 video recording, brilliant high-res image capture, and maximum post-production workflow efficiency. These SDXC™ memory cards deliver our fastest speeds possible with SD UHS-II cards: write speeds up to 300MB/s, sustained minimum video write speeds of 90MB/s.",
  "SanDisk Ultra Dual Drive Go USB Type-C™ - 32GB":
    "Looking for storage that works across your USB Type-C™ and Type-A devices? The SanDisk Ultra Dual Drive Go USB Type-C is the 2-in-1 flash drive that lets you easily move files between your USB Type-C smartphone, tablets, and Mac and USB Type-A computers.2 Now you can take even more photos and access them across your devices.",
  "SanDisk Ultra® USB Type-C™ Flash Drive - 32GB":
    "The SanDisk Ultra® USB Type-C™ Flash Drive plugs right in to your USB Type-C™ computers, smartphones and tablets2 so you can quickly and easily store and transfer photos, videos and other files between devices.",
  "Lenovo IdeaPad Slim 3":
    "The Lenovo IdeaPad Slim 3 is an affordable, lightweight laptop ideal for everyday tasks like web browsing and document work. It offers various processor options (AMD Ryzen or Intel), decent battery life, and a 15.6-inch display, making it a practical choice for students and casual users on a budget.",
  "Sony A7 Full-Frame Mirrorless Digital Camera":
    "The Sony Digital Camera line includes a wide range of models from compact point-and-shoot cameras to advanced mirrorless systems. Known for excellent image quality, fast autofocus, and innovative features like in-body stabilization, Sony cameras are popular among both enthusiasts and professionals for photography and video recording.",
  "Canon EOS M3 Mirrorless Digital Camera with 18-55mm Lens":
    "Capture high-resolution images and full HD 1080p video with the compact black EOS M3 Mirrorless Digital Camera with 18-55mm Lens. The M3 features a 24.2MP APS-C CMOS sensor and a DIGIC 6 Image Processor to with an ISO sensitivity range of 100 to 12800, expandable up to 25600. An intuitive 3.0 1,040k-dot touchscreen LCD allows you to focus and shoot an image with a single tap on the screen. The touchscreen has a ClearView II coating and tilts up 180° and down 45°, making it easy to compose and shoot selfies as well as low-angle shots.",
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
  "Canon EOS 200D II With EF-S 18-55mm f/4-5.6 IS STM Lens":
    "EOS 200D II is Canon’s lightest DSLR with a Vari-angle Touch Screen LCD. Weighing only a little heavier than a bottle of water*, the camera slides right into your bag for that everyday photography. Packed into its petite body is Canon’s 24.1-megapixels APS-C CMOS sensor, DIGIC 8 processor and a bunch of features that would make snapping your everyday life seamlessly easier.",
  "Nikon NIKKOR Z MC 50MM F/2.8S":
    "Achieve a wide range of creative presentations with this highly portable and lightweight lens that is suitable across a range of photography genres. Combining the best of NIKKOR Z and the Z mount’s optical innovation, enjoy a stress-free shooting experience with its focusing performance.",
  "Nikon PC-E Micro-NIKKOR 85mm f/2.8D":
    "Well-suited for product and tabletop photography, the PC-E Micro-NIKKOR 85mm f/2.8D from Nikon is a specialized short-telephoto prime offering tilt and shift movements for controlling your focus and perspective. Up to +/- 8.5° of tilt is possible, for focus control; +/- 11.5mm of shift, to adjust perspective and composition; and +/- 90° of rotation is also possible for adjusting the axis of these movements. Further benefitted by the movements, this lens is also a micro optic and provides a 1:2 maximum magnification ratio along with a 1.3' minimum focusing distance for working with close-up subjects.",
  "Canon EF-S 18-55mm f/3.5-5.6 IS STM Lens":
    "This EF-s 18-55m f/3.5-5.6 IS STM lens is manufactured by Canon. It is compatible with APS-C format camera. The focal length range is about 18-55mm which is equal to the 29-88mm when used in 35mm format.",
  "Champion Sneakers":
    "Make a statement with these distinctive Champion sneakers featuring a unique black and white geometric design. The chunky silhouette and premium construction provide all-day comfort and durability. Perfect for both athletic activities and casual streetwear, these sneakers blend retro-inspired styling with contemporary performance features.",
  "Blundstone Boots":
    "Sophisticated black leather ankle boots that exude elegance and refinement. With a sleek silhouette and polished finish, these boots are perfect for professional settings or evening occasions. The quality leather construction ensures durability, while the comfortable fit makes them suitable for all-day wear.",
  "Leather Fumes":
    "Sophisticated black leather ankle boots that exude elegance and refinement. With a sleek silhouette and polished finish, these boots are perfect for professional settings or evening occasions. The quality leather construction ensures durability, while the comfortable fit makes them suitable for all-day wear.",
  "Leather Neivele":
    "Distinguished brown leather boots featuring a unique crocodile-embossed texture that adds a touch of luxury to any outfit. The lace-up design and ankle-height cut provide both style and functionality. These boots are crafted for the modern gentleman who appreciates fine details and premium materials.",
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
  document.querySelector(".BUY").innerText = "Buy for Rs " + i * newprice;
}

function final() {
  alert("You have Succesfully Purchased");
  box.style.display = "none";
  i = 1;
}

// ColorScheme

var color;
var page = urlParams.get("page");

if (page == "tech-products") {
  color = "#da794b";
  console.log("Color Set");
} else if (page == "Shoewear") {
  color = "#da951d";
  console.log("Color Set");
} else {
  color = "tan";
}
document.documentElement.style.setProperty("--color", color);
