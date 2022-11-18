const left = document.querySelector(".slider__arrow_prev");
const right = document.querySelector(".slider__arrow_next");
const items = Array.from(document.querySelectorAll(".slider__item"))
let activeIndex = items.indexOf(document.querySelector(".slider__item_active"));
const dots = Array.from(document.querySelectorAll(".slider__dot"));

dots[activeIndex].classList.add("slider__dot_active");

left.onclick = () => {
  items[activeIndex].classList.remove("slider__item_active");
  dots[activeIndex].classList.remove("slider__dot_active");
  if (activeIndex === 0) {
    activeIndex = items.length-1;

  } else {
    activeIndex --;
  }
  items[activeIndex].classList.add("slider__item_active");
  dots[activeIndex].classList.add("slider__dot_active");
}
right.onclick = () => {
  items[activeIndex].classList.remove("slider__item_active");
  dots[activeIndex].classList.remove("slider__dot_active");
  if ((activeIndex + 1) === items.length) {
    activeIndex = 0;
  } else {
    activeIndex ++;
  }
  items[activeIndex].classList.add("slider__item_active");
  dots[activeIndex].classList.add("slider__dot_active");

}

dots.forEach((dot, index) => {
  dot.onclick = () => {
    items[activeIndex].classList.remove("slider__item_active");
    dots[activeIndex].classList.remove("slider__dot_active");
    activeIndex = index;
    items[activeIndex].classList.add("slider__item_active");
    dots[activeIndex].classList.add("slider__dot_active");

  }
})