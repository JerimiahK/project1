window.onload = function () {
  let progress = $("#scrollHorProgress");
  let vertProgress = $("#scrollVertProgress");

  window.onscroll = function () {
    // page scroll x axis
    let percentScrolled = window.scrollX / window.innerWidth / 2.5;
    console.log(percentScrolled);
    progress[0].style.transform = `scaleX(${percentScrolled}`;

    // page scroll y axis
    let vertPercentScrolled = window.scrollY / window.innerHeight / 2.5;
    vertProgress[0].style.transform = `scaleY(${vertPercentScrolled})`;
  };

  // window.onscroll = function () {
  //   let vertPercentScrolled = window.scrollY / window.innerHeight / 3;
  //   vertProgress[0].style.transform = `scaleY(${vertPercentScrolled})`;
  //   console.log(vertProgress);
  // };
};
