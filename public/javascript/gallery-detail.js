const $activeImage = document.querySelector(".product-image .active");
const $productImages = document.querySelectorAll(".image-list img");
const $navItem = document.querySelector("a.toggle-nav");

function changeImage(e) {
  $activeImage.src = e.target.src;
}

function toggleNavigation() {
  this.nextElementSibling.classList.toggle("active");
}

$productImages.forEach((image) => image.addEventListener("mouseover", changeImage));
$navItem.addEventListener("mouseover", toggleNavigation);

