window.onload = function () {
  const horizontalProg = $("#scrollHor");
  const verticleProg = $("#scrollVert");

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollX * 0.00023;
    horizontalProg[0].style.transform = `scaleX(${scrolled}`;
    console.log(scrolled);
  });

  window.addEventListener("scroll", () => {
    const scrollVert = window.scrollY * 0.00072;
    console.log(scrollVert);
    verticleProg[0].style.transform = `scaleY(${scrollVert}`;
  });
};
