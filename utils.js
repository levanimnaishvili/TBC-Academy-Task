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

function createBlueArrowSVG() {
  var svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgElement.setAttribute("viewBox", "1.833 2.667 13.334 10.666");
  svgElement.setAttribute("height", "16");
  svgElement.setAttribute("width", "17");
  svgElement.setAttribute("data-type", "color");
  svgElement.setAttribute("role", "presentation");
  svgElement.setAttribute("aria-hidden", "true");

  var gElement = document.createElementNS("http://www.w3.org/2000/svg", "g");

  var pathElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  pathElement.setAttribute("fill", "#00aeff");
  pathElement.setAttribute(
    "d",
    "m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z"
  );

  gElement.appendChild(pathElement);

  svgElement.appendChild(gElement);

  return svgElement;
}
