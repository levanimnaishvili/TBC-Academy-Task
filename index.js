window.addEventListener("scroll", () => {
  let header = document.getElementsByTagName("header")[0];
  if (window.scrollY > 84) {
    header.classList.add("header-scroll");
  }
});
