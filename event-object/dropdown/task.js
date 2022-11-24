const values = Array.from(document.querySelectorAll(".dropdown__value"));
const dropdown = Array.from(document.querySelectorAll(".dropdown__list"));
console.log(dropdown)

values.forEach((value, index) => {
  value.onclick = () => {
    if (dropdown[index].classList.contains("dropdown__list_active")) {
      dropdown[index].classList.remove("dropdown__list_active")
    } else {
      dropdown[index].classList.add("dropdown__list_active")
    }
  };
  const list = Array.from(dropdown[index].querySelectorAll(".dropdown__item"));
  console.log(list)
  list.forEach(item => item.onclick = (event) => {
    event.preventDefault();
    dropdown[index].classList.remove("dropdown__list_active");
    values[index].textContent = item.textContent;
  })
})
