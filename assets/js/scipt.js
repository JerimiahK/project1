window.onload = function () {
  const horizontalProg = $("#scrollHor");
  const verticleProg = $("#scrollVert");

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollX * 0.000231;
    horizontalProg[0].style.transform = `scaleX(${scrolled}`;
    console.log(scrolled);
  });

  window.addEventListener("scroll", () => {
    const scrollVert = window.scrollY * 0.000069;
    console.log(scrollVert);
    verticleProg[0].style.transform = `scaleY(${scrollVert}`;
  });
};
