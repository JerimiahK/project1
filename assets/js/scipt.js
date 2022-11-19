window.onload = function () {
  const progressBar = $("#scroller");
  console.log(progressBar);
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollX * 0.000208335;
    console.log(scrolled);
    progressBar[0].style.transform = `scaleX(${scrolled}`;
  });
};
