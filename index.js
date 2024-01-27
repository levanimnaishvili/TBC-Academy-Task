window.addEventListener("scroll", () => {
  let header = document.getElementsByTagName("header")[0];
  if (window.scrollY > 84) {
    header.classList.add("header-scroll");
  }
});

let startY = 0;
// For mobile devices
window.addEventListener("touchmove", (e) => {
  let header = document.getElementsByTagName("header")[0];
  let currentY = e.touches[0].screenY;

  if (startY < currentY) {
    header.classList.remove("scroll-down");
    header.classList.add("scroll-up");
  } else {
    header.classList.add("header-scroll");
    header.classList.remove("scroll-up");
    header.classList.add("scroll-down");
  }

  startY = currentY;
});
let burger = document.getElementById("mobile-burger");
let topL = document.getElementsByClassName("burger-line-top")[0];
let mid = document.getElementsByClassName("burger-line-mid")[0];
let bot = document.getElementsByClassName("burger-line-bot")[0];
let menu = document.getElementById("header-menu");
let overlay = document.getElementById("overlay");
burger.addEventListener("click", () => {
  burgerAction();
});
overlay.addEventListener("click", () => {
  burgerAction();
});
function burgerAction() {
  topL.classList.toggle("burger-top-cross");
  mid.classList.toggle("burger-mid-cross");
  bot.classList.toggle("burger-bot-cross");
  menu.classList.toggle("header-menu-toggle");
  overlay.classList.toggle("show-overlay");
}

let carouselContainer = document.getElementById("usaid-carousel");

console.log(carouselItems);
let carousel = new Carousel(carouselItems, carouselContainer)
carousel.createCarousel()