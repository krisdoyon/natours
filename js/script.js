///////////////////////////////////////////////////////////////////////////////////////////////////////
// NAVIGATION

const navBtn = document.querySelector(".navigation__btn");
const topBar = document.querySelector(".navigation__btn-bar:nth-child(1)");
const middleBar = document.querySelector(".navigation__btn-bar:nth-child(2)");
const bottomBar = document.querySelector(".navigation__btn-bar:nth-child(3)");
const barsArr = [...document.querySelectorAll(".navigation__btn-bar")];
const navBackground = document.querySelector(".navigation__background");
const navigation = document.querySelector(".navigation__nav");

let navOpen = false;

const handleNavClick = function () {
  if (navOpen) {
    barsArr.forEach((bar) => {
      bar.style.top = "50%";
      bar.style.left = "50%";
      bar.style.transform = "translate(-50%,-50%)";
      bar.style.marginLeft = "0";
      navBackground.style.transform = "scale(1)";
      navigation.style.animation = "hideNav 1s forwards";
      // navigation.style.visibility = "hidden";
      // navigation.style.opacity = "0";

      navOpen = false;
    });
    middleBar.style.opacity = "1";
    topBar.style.marginTop = "-1.2rem";
    bottomBar.style.marginTop = "1.2rem";
  } else if (!navOpen) {
    [topBar, bottomBar].forEach((bar) => {
      bar.style.transform = `rotate(${bar === bottomBar ? "-" : ""}135deg)`;
      bar.style.marginLeft = `${-bar.offsetWidth / 2}px`;
      bar.style.marginTop = "0";
    });
    middleBar.style.opacity = "0";
    navBackground.style.transform = "scale(80)";
    navigation.style.animation = "showNav 1s forwards";

    // navigation.style.visibility = "visible";
    // navigation.style.opacity = "1";

    navOpen = true;
  }
};

navBtn.addEventListener("click", handleNavClick);
///////////////////////////////////////////////////////////////////////////////////////////////////////
// SKEW SECTIONS

const skew = 15;

const skewSections = function () {
  const sectionsArr = [
    document.querySelector(".section-about"),
    document.querySelector(".section-features"),
  ];
  const header = document.querySelector(".header");
  header.style.clipPath = `polygon(0 0, 100% 0, 100% calc(${header.offsetHeight}px - ${skew}rem), 0 100%)`;
  sectionsArr.forEach((section) => {
    const height = section.offsetHeight;
    section.style.clipPath = `polygon(0 ${skew}rem, 100% 0, 100% calc(${height}px - ${skew}rem), 0 100%)`;
    section.style.marginTop = `-${skew}rem`;
  });
  document.querySelector(".section-tours").style.marginTop = `-${skew}rem`;
};

skewSections();

window.addEventListener("resize", skewSections);
