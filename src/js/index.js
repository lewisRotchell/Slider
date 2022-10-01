const slides = document.querySelectorAll(".slider__slide");
const nextSlide = document.querySelector(".slider__controls-next");
const prevSlide = document.querySelector(".slider__controls-prev");
const sliderWrapper = document.querySelector(".slider__wrapper");
const slidesNum = slides.length;

const endClone = slides[slides.length - 1].cloneNode(true);
const startClone = slides[0].cloneNode(true);

//slideWidth corresponds with the width set on .slider
//Also make sure that the transform property in css is set as width * -1
const slideWidth = slides[0].clientWidth;
console.log(slideWidth);

sliderWrapper.prepend(endClone);
sliderWrapper.append(startClone);

console.log(sliderWrapper);

let translate = -slideWidth;

nextSlide.addEventListener("click", () => {
  translate -= slideWidth;
  if (translate === (slidesNum + 1) * -slideWidth) {
    sliderWrapper.style.transition = "unset";
    translate = 0;
    sliderWrapper.style.transform = `translate3d(${translate}px, 0px, 0px)`;

    setTimeout(() => {
      translate -= slideWidth;
      sliderWrapper.style.transition = "transform 0.5s ease";
      sliderWrapper.style.transform = `translate3d(${translate}px, 0px, 0px)`;
    }, 0);
  }
  sliderWrapper.style.transform = `translate3d(${translate}px, 0px, 0px)`;
});

prevSlide.addEventListener("click", () => {
  translate += slideWidth;
  if (translate === 0) {
    sliderWrapper.style.transition = "unset";
    translate = (slidesNum + 1) * -slideWidth;
    sliderWrapper.style.transform = `translate3d(${translate}px, 0px, 0px)`;

    setTimeout(() => {
      translate += slideWidth;

      sliderWrapper.style.transition = "transform 0.5s ease";
      sliderWrapper.style.transform = `translate3d(${translate}px, 0px, 0px)`;
    }, 0);
  }
  sliderWrapper.style.transform = `translate3d(${translate}px, 0px, 0px)`;
});
