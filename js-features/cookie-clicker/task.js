const clickerCounter = document.getElementById("clicker__counter");
const speedCounter = document.getElementById("speed__counter");
const cookie = document.getElementById("cookie");
let startTime = new Date();
console.log(startTime);
cookie.onclick = function () {
  clickerCounter.textContent ++;
  let clickTime = new Date();
  let clickSpeed = clickerCounter.textContent / ((clickTime - startTime) / 1000);
  speedCounter.textContent = clickSpeed.toFixed(2);
  if (cookie.width === 200) {
    cookie.width = 250;
  } else {
    cookie.width = 200;
  }
}