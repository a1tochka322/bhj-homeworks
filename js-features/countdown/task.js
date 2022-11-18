const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const intervalID = setInterval(function () {
  seconds.textContent --;
  if (seconds.textContent < 1 && minutes.textContent < 1 && hours.textContent < 1) {
    alert("Вы победили в конкурсе!");
    location.assign("https://itorrents-igruha.org/engine/download.php?id=4871");
    clearInterval(intervalID);
  }
  if (seconds.textContent < 0) {
    minutes.textContent --;
    seconds.textContent = "59";
  }
  if (minutes.textContent < 0) {
    hours.textContent --;
    minutes.textContent = "59";
  }
  seconds.textContent = seconds.textContent.length < 2 ? '0' + seconds.textContent : seconds.textContent;
  minutes.textContent = minutes.textContent.length < 2 ? '0' + minutes.textContent : minutes.textContent;
  hours.textContent = hours.textContent.length < 2 ? '0' + hours.textContent : hours.textContent;

}, 1000)

