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
