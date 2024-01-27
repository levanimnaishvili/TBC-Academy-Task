function onDesktopScroll() {
  let header = document.getElementsByTagName("header")[0];
  if (window.scrollY > 84) {
    header.classList.add("header-scroll");
  }
}

function burgerAction() {
  burger.classList.toggle("cross");
  menu.classList.toggle("header-menu-toggle");
  overlay.classList.toggle("show-overlay");
}
