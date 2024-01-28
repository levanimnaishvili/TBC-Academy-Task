class Carousel {
  constructor(slideList, carouselContainer) {
    if (!Array.isArray(slideList)) {
      throw new Error(
        "Carousel excepts list of slides data as Array (first argument)"
      );
    }
    if (!(carouselContainer instanceof Element)) {
      throw new Error(
        "Carousel container must be a HTML Element (second argument)"
      );
    }
    this.slideList = slideList;
    this.carouselContainer = carouselContainer;
    this.slideCount = this.slideList.length;
    this._currentScreenIndex = 1;
    this.bulletContainer =
      this.slideCount > 3 ? document.createElement("div") : null;
    this.screenListRef = [null];
    this.screenIndexRef = 0;
    this.bulletContainer.classList.add("bullets-container");
  }
  createCarousel() {
    let screen = document.createElement("div");
    screen.classList.add("carousel-current-screen");
    for (let i = 1; i <= this.slideCount; i++) {
      let slide = new Image();
      let slideWrapper = document.createElement('div');
      slide.src = this.slideList[i - 1].slideImage;
      slide.alt = this.slideList[i - 1].alt;
      slide.classList.add('carousel-slide-image')
      slideWrapper.appendChild(slide)
      slideWrapper.classList.add('carousel-slide-wrapper')
      screen.appendChild(slideWrapper);
      if (i % 3 === 0) {
        screen.classList.add("carousel-screen");
        this.carouselContainer.appendChild(screen);
        this.screenListRef.push(screen);
        if (this.slideCount > 3) {
          this.screenIndexRef++;
          this.createBullet(this.screenIndexRef);
        }
        screen = document.createElement("div");
      } else if (i === this.slideCount) {
        screen.classList.add("carousel-screen");
        screen.classList.add("carousel-screen-reminder");
        this.carouselContainer.appendChild(screen);
        this.screenListRef.push(screen);
        if (this.slideCount > 3) {
          this.screenIndexRef++;
          this.createBullet(this.screenIndexRef);
        }
      }
    }
    this.carouselContainer.appendChild(this.bulletContainer);
  }
  createBullet(screenIndex) {
    if (!this.bulletContainer) {
      throw new Error("Not enough carousel screens to require bullets!");
    }
    let bullet = document.createElement("button");
    bullet.classList.add("bullet");
    bullet.addEventListener("click", () => {
      if (screenIndex === this._currentScreenIndex) return;
      this.screenListRef[this._currentScreenIndex].classList.toggle(
        "carousel-current-screen"
      );
      this.screenListRef[screenIndex].classList.toggle(
        "carousel-current-screen"
      );
      this._currentScreenIndex = screenIndex;
    });
    this.bulletContainer.appendChild(bullet);
  }
  moveLeft() {
    if (!(this.slideCount > 3)) return;
    this.screenListRef[this._currentScreenIndex].classList.toggle(
      "carousel-current-screen"
    );
    if (this._currentScreenIndex === 1) {
      this._currentScreenIndex = this.screenIndexRef;
    } else this._currentScreenIndex--;
    this.screenListRef[this._currentScreenIndex].classList.toggle(
      "carousel-current-screen"
    );
  }
  moveRight() {
    if (!(this.slideCount > 3)) return;
    this.screenListRef[this._currentScreenIndex].classList.toggle(
      "carousel-current-screen"
    );
    if (this._currentScreenIndex === this.screenIndexRef) {
      this._currentScreenIndex = 1;
    } else this._currentScreenIndex++;
    this.screenListRef[this._currentScreenIndex].classList.toggle(
      "carousel-current-screen"
    );
  }
}
