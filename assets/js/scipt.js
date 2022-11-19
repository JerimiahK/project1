window.onload = function () {
  const horizontalProg = $("#scrollHor");
  const verticleProg = $("#scrollVert");

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollX * 0.000208335;
    horizontalProg[0].style.transform = `scaleX(${scrolled}`;
  });

  window.addEventListener("scroll", () => {
    const scrollVert = window.scrollY * 0.00108335;
    console.log(scrollVert)
    verticleProg[0].style.transform = `scaleY(${scrollVert}`;
  });
};
