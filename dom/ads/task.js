let counter = 0;
let currentMs;
let color = [];
const ms = [];
const cases = Array.from(document.querySelectorAll(".rotator__case"));
cases.forEach((item, i) => {
  ms[i] = item.dataset.speed;
  color[i] = item.dataset.color;
})
cases[0].style.color = color[0];

function changer() {
  cases[counter].classList.toggle("rotator__case_active");
  counter = (counter + 1) % cases.length;
  cases[counter].classList.toggle("rotator__case_active");
  cases[counter].style.color = color[counter];
  currentMs = ms[counter];
  clearInterval(id)
  id = setInterval(changer, currentMs);
}

let id = setInterval(changer, ms[0]);
