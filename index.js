window.addEventListener("scroll", () => onDesktopScroll());

// For mobile devices
let mobileStartY = 0;
const deltaYThreshold = 3;
window.addEventListener("touchmove", (e) => {
  let header = document.getElementsByTagName("header")[0];
  let currentY = e.touches[0].screenY;
  let deltaY = currentY - mobileStartY;

  if (deltaY > deltaYThreshold) {
    header.classList.remove("scroll-down");
    header.classList.add("scroll-up");
    console.log("up");
  } else if (deltaY < -deltaYThreshold) {
    header.classList.add("header-scroll");
    header.classList.remove("scroll-up");
    header.classList.add("scroll-down");
    console.log("down");
  }

  mobileStartY = currentY;
});

let burger = document.getElementById("mobile-burger");
let menu = document.getElementById("header-menu");
let overlay = document.getElementById("overlay");
burger.addEventListener("click", () => {
  burgerAction();
});
overlay.addEventListener("click", () => {
  burgerAction();
});

let carouselContainer = document.getElementById("usaid-carousel");
let carousel = new Carousel(carouselItems, carouselContainer);
carousel.createCarousel();

let carouselBtnLeft = document.getElementById("carousel-btn-left");
let carouselBtnRight = document.getElementById("carousel-btn-right");
carouselBtnLeft.addEventListener("click", () => {
  carousel.moveLeft();
});
carouselBtnRight.addEventListener("click", () => {
  carousel.moveRight();
});
let partnersSection = document.getElementsByClassName("partners")[0];
let autoCarouselID = setInterval(() => {
  carousel.moveRight();
}, 3000);
partnersSection.addEventListener("mouseenter", () => {
  clearInterval(autoCarouselID);
});
partnersSection.addEventListener("mouseleave", () => {
  autoCarouselID = setInterval(() => {
    carousel.moveRight();
  }, 3000);
});

window.addEventListener("load", () => {
  let courseListContainer = document.getElementById("usaid-course-list");
  for (let courseData of courseItems) {
    let courseItemInstance = new CourseItem(courseData);
    courseListContainer.appendChild(courseItemInstance.courseItem);
  }
});
