window.onload = function () {
  let progress = $("#scrollHorProgress");
  let vertProgress = $("#scrollVertProgress");

  window.onscroll = function () {
    // page scroll x axis
    let percentScrolled = window.scrollX / window.innerWidth / 2.5;
    progress[0].style.transform = `scaleX(${percentScrolled}`;

    // page scroll y axis
    let vertPercentScrolled = window.scrollY / window.innerHeight / 3;
    vertProgress[0].style.transform = `scaleY(${vertPercentScrolled})`;

    let scrollArrow = $("#scrollArrow");
    scrollArrow[0].style.display = "none";
  };
};
