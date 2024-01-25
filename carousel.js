let carousel = document.getElementsByClassName("carousel")[0];
let btnLeft = document.getElementsByClassName("left")[0];
let btnRight = document.getElementsByClassName("right")[0];

let slideCount = 10;
let current = 1;
let slides = [];
let navBullets = [];
let reminder = slideCount % 3;

window.addEventListener("load", () => {
  for (let i = 0; i < slideCount; i++) {
    let slide = document.createElement("li");
    slide.textContent = i;
    let width = 200;
    let height = 60;

    //dimensions are required to compute proper position of elements
    let posTop = `${carousel.clientHeight / 2 - height / 2}px`;
    let leftX = `${carousel.clientWidth / 2 - width / 2}px`;

    //psitions if slide count has reminder, if reminder is 1 position will be mid, we need to calculate position for rem-2 case
    let twoSlidePosX = `${carousel.clientWidth / 3 - width / 2}px`;

    slide.style.position = "absolute";
    slide.style.width = `${width}px`;
    slide.style.height = `${height}px`;
    slide.style.top = posTop;

    //initially all element except first three are hidden
    slide.style.opacity = 0;

    if (i == 0 || i == 1 || i == 2) {
      slide.style.opacity = 1;
    }

    slide.style.backgroundColor = `rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`;

    switch (i % 3) {
      case 0:
        // reminder == 1
        // არის მასივის პირველი წევრი
        // შესაძლოა იყოს ერთადერთი ელემენტი ან პირველი ორიდან
        if (i + 2 < slideCount) slide.style.left = 0;
        else if (i + 2 == slideCount) slide.style.left = twoSlidePosX;
        else {
          slide.style.left = leftX;
          let bullet = createBullet(i, 1);
          navBullets.push(bullet);
        }
        break;
      case 1:
        // reminder == 2
        // არის მასივის მეორე წევრი
        // შესაძლოა იყოს დარჩენილებიდან მეორე
        if (i + 1 < slideCount) {
          slide.style.left = leftX;
          if (slideCount > 3) {
            let bullet = createBullet(i);
            navBullets.push(bullet);
          }
        } else {
          slide.style.right = twoSlidePosX;
          let bullet = createBullet(i, 2);
          navBullets.push(bullet);
        }
        break;
      case 2:
        // reminder == 0
        // არის მასივის მესამე წევრი
        // ვერ იქნება ნარჩენებში
        slide.style.right = 0;
        break;
    }
    slides.push(slide);
  }

  for (let i = 0; i < slideCount; i++) {
    carousel.appendChild(slides[i]);
  }
  if (navBullets) {
    let bulletContainer = document.createElement("div");
    bulletContainer.classList.add("bullets-container");
    for (let bullet of navBullets) {
      bulletContainer.appendChild(bullet);
    }
    carousel.appendChild(bulletContainer);
  }
});
let intervalId;
if (slideCount > 3) {
  intervalId = setInterval(() => {
    moveRight();
  }, 3000);
}
carousel.addEventListener("mouseenter", () => {
  if (intervalId) clearInterval(intervalId);
});
carousel.addEventListener("mouseleave", () => {
  if (slideCount > 3) {
    intervalId = setInterval(() => {
      moveRight();
    }, 3000);
  }
});
function moveLeft() {
  if (slideCount <= 3) return;
  if (current - 3 < 0 && reminder == 1) {
    hideAll();
    current = slideCount - 1;
    showSlides(current, 1);
  } else if (current - 3 < 0 && reminder == 2) {
    hideAll();
    current = slideCount - 1;
    showSlides(current, 2);
  } else if (current - 3 < 0 && reminder == 0) {
    hideAll();
    current = slideCount - 2;
    showSlides(current);
  } else {
    hideAll();
    if (current === slideCount - 1 && reminder === 1) current -= 2;
    else current -= 3;
    showSlides(current);
  }
}
function moveRight() {
  if (slideCount <= 3) return;
  if (current + 2 == slideCount - 1 && reminder == 1) {
    hideAll();
    current += 2;
    showSlides(current, 1);
  } else if (current + 3 == slideCount - 1 && reminder == 2) {
    hideAll();
    current += 3;
    showSlides(current, 2);
  } else if (current + 3 > slideCount) {
    hideAll();
    current = 1;
    showSlides(current);
  } else {
    hideAll();
    current += 3;
    showSlides(current);
  }
}

btnLeft.addEventListener("click", () => moveLeft());
btnRight.addEventListener("click", () => moveRight());

function createBullet(slideIndex, slidesToShow) {
  let bullet = document.createElement("button");
  bullet.classList.add("bullet");
  bullet.addEventListener("click", () => {
    if (current === slideIndex) return;
    else {
      hideAll();
      current = slideIndex;
      slidesToShow
        ? showSlides(slideIndex, slidesToShow)
        : showSlides(slideIndex);
    }
  });
  return bullet;
}
function showSlides(index, count) {
  switch (count) {
    case 1:
      slides[index].style.opacity = "1";
      break;
    case 2:
      slides[index - 1].style.opacity = "1";
      slides[index].style.opacity = "1";
      break;
    default:
      slides[index - 1].style.opacity = "1";
      slides[index].style.opacity = "1";
      slides[index + 1].style.opacity = "1";
      break;
  }
}
function hideAll() {
  for (let slide of slides) {
    slide.style.opacity = "0";
  }
}
