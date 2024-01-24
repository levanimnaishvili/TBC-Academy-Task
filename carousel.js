let carousel = document.getElementsByClassName("carousel")[0];
let btnLeft = document.getElementsByClassName("left")[0];
let btnRight = document.getElementsByClassName("right")[0];

let slideCount = 10;
let current = 1;
let slides = [];
let reminder = slideCount % 3;
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
      else slide.style.left = leftX;
      break;
    case 1:
      // reminder == 2
      // არის მასივის მეორე წევრი
      // შესაძლოა იყოს დარჩენილებიდან მეორე
      if (i + 1 < slideCount) slide.style.left = leftX;
      else slide.style.right = twoSlidePosX;
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

window.addEventListener("load", () => {
  for (let i = 0; i < slideCount; i++) {
    carousel.appendChild(slides[i]);
  }
});

function moveLeft() {
  if (slideCount <= 3) return;
  // მარცხნივ არაფერია
  if (current - 3 < 0 && reminder == 1) {
    // ნაშთი 1
    toggleSlides(current);
    current = slideCount - 1;
    toggleSlides(current, 1);
  } else if (current - 3 < 0 && reminder == 2) {
    // ნაშთი 2
    toggleSlides(current);
    current = slideCount - 1;
    toggleSlides(current, 2);
  } else if (current - 3 < 0 && reminder == 0) {
    // უნაშთო
    toggleSlides(current);
    current = slideCount - 2;
    toggleSlides(current);
  } else {
    //მარცხნივ ელემენტებია
    if (current < slideCount - reminder) {
      toggleSlides(current);
    } else {
      if (reminder == 1) {
        toggleSlides(current, 1);
      } else if (reminder == 2) {
        console.log(current);
        toggleSlides(current, 2);
      }
    }
    if (current === slideCount - 1 && reminder === 1) current -= 2;
    else current -= 3;
    toggleSlides(current);
  }
}
function moveRight() {
  if (slideCount <= 3) return;
  if (current + 2 == slideCount - 1 && reminder == 1) {
    toggleSlides(current);
    current += 2;
    toggleSlides(current, 1);
  } else if (current + 3 == slideCount - 1 && reminder == 2) {
    toggleSlides(current);
    current += 3;
    toggleSlides(current, 2);
  } else if (current + 3 > slideCount) {
    if (reminder == 1) {
      toggleSlides(current, 1);
    } else if (reminder == 2) {
      toggleSlides(current, 2);
    } else {
      toggleSlides(current);
    }
    current = 1;
    toggleSlides(current);
  } else {
    toggleSlides(current);
    current += 3;
    toggleSlides(current);
  }
}

function toggle(element) {
  element.style.opacity = element.style.opacity === "1" ? "0" : "1";
}
function toggleSlides(index, count) {
  switch (count) {
    case 1:
      toggle(slides[index]);
      break;
    case 2:
      toggle(slides[index - 1]);
      toggle(slides[index]);
      break;
    default:
      toggle(slides[index - 1]);
      toggle(slides[index]);
      toggle(slides[index + 1]);
      break;
  }
}

btnLeft.addEventListener("click", () => moveLeft());
btnRight.addEventListener("click", () => moveRight());

/* 
RIGHT >>>>>>

if rem == 1 && diplaying rem
  hide current / toggle(i-1); toggle(i); toggle(i+1)
  i+=2
  show next / toggle(i)

if rem == 2 && displaying rem
  hide current / toggle(i-1); toggle(i); toggle(i+1)
  i+=3
  show next / toggle(i-1); toggle(i);

if outrange
  hide current
    if rem == 1 toggle(i)
    else if rem == 2 toggle(i-1); toggle(i);
    else toggle(i-1); toggle(i); toggle(i+1)
  i=1
  show next / toggle(i-1); toggle(i); toggle(i+1)

else
  hide current / toggle(i-1); toggle(i); toggle(i+1)
  i+=3
  show next / toggle(i-1); toggle(i); toggle(i+1)

*/

/* 
<<<<<<< LEFT

if outrange && rem == 1
  hide current / toggle(i-1); toggle(i); toggle(i+1)
  i=count-1
  show next / toggle(i)

if outrange && rem == 2
  hide current / toggle(i-1); toggle(i); toggle(i+1)
  i=count-1
  show next / toggle(i-1); toggle(i);

if outrange && rem == 0
  hide current / toggle(i-1); toggle(i); toggle(i+1)
  i=count-2
  show next / toggle(i-1); toggle(i); toggle(i+1)

else
  hide current / toggle(i-1); toggle(i); toggle(i+1)
  i+=3
  show next / toggle(i-1); toggle(i); toggle(i+1)

*/
