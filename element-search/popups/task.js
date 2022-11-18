const modal = document.getElementById("modal_main");
const closeBtn = Array.from(document.querySelectorAll("div.modal__close"));
const successBtn = document.querySelector(".show-success");
const successWindow = document.getElementById("modal_success");
successBtn.onclick = () => {
  modal.classList.remove("modal_active");
  successWindow.classList.add("modal_active");
};
modal.classList.add("modal_active");
closeBtn.forEach(btn => btn.onclick = () => {
  modal.classList.remove("modal_active");
  successWindow.classList.remove("modal_active");

})