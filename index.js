let carousel = document.getElementsByClassName("carousel")[0];
let btnLeft = document.getElementsByClassName("left")[0];
let btnRight = document.getElementsByClassName("right")[0];

let SCount = 10;
let curLeft = 0;
let curMid = 1;
let curRight = 2;
let slides = [];
let reminder = slides.length % 3;
for (let i = 0; i < SCount; i++) {
  let slide = document.createElement("li");
  slide.textContent = i;
  slide.style.transformOrigin = "50% 50%";
  slide.style.width = "250px";
  slide.style.opacity = "0";
  slide.style.height = `${Math.random() * 50 + 100}px`;
  slide.style.backgroundColor = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
  if (i === curLeft || i === curMid || i === curRight) {
    slide.style.top = "50%";
    slide.style.left = carousel.style.width;
  }
  slides.push(slide);
}

window.addEventListener("load", () => {
  for (let i = 0; i < SCount; i++) {
    carousel.appendChild(slides[i]);
  }
});

function moveSlide(direction) {
  if (direction === "left") {
    toggleEl(slides[curLeft], slides[curMid], slides[curRight]);
    if (curLeft - 3 < 0) {
      curLeft = slides.length - reminder;
      curMid = slides.length - reminder + 1;
      curRight = slides.length - reminder + 2;
    }
    curLeft -= 3;
    curMid -= 3;
    curRight -= 3;
    slides;
    toggleEl(slides[curLeft], slides[curMid], slides[curRight]);
  }
  if (direction === "right") {
    toggleEl(slides[curLeft], slides[curMid], slides[curRight]);
    curLeft += 3;
    curMid += 3;
    curRight += 3;
    toggleEl(slides[curLeft], slides[curMid], slides[curRight]);
  }
}
function toggleEl(...args) {
  for (const element of args) {
    if (element && element?.style) {
      element.style.display =
        element.style.display === "none" ? "block" : "none";
    }
    console.log(element.style.display);
  }
}

btnLeft.addEventListener("click", () => {
  moveSlide("left");
});
btnRight.addEventListener("click", () => {
  moveSlide("right");
});

