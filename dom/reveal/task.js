const reveals = Array.from(document.querySelectorAll(".reveal"));

window.onscroll = () => reveals.forEach( reveal => {
  if (reveal.getBoundingClientRect().top < window.innerHeight) {
    reveal.classList.add("reveal_active");
  }
})