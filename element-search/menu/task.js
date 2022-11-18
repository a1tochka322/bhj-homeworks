const menuList = Array.from(document.querySelectorAll(".menu_sub"));
menuList.forEach(item => {
  const menuLink = item.parentElement.querySelector(".menu__link");
  menuLink.onclick = () => {
    menuList.forEach((list) => {
      if (item.closest(".menu_main") === list.closest(".menu_main")) {
        list.classList.remove("menu_active")
      }
    })
    item.classList.add("menu_active");
    return false
  }
})