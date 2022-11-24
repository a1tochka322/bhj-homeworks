const tabContainers = Array.from(document.querySelectorAll(".tabs"));

tabContainers.forEach(container => {
  const tabs = Array.from(container.querySelectorAll(".tab"));
  const tabsContent = Array.from(container.querySelectorAll(".tab__content"));
  tabs.forEach((tab, index) => {
    tab.onclick = () => {
      tabs.forEach((item, i) => {
        item.classList.remove("tab_active");
        tabsContent[i].classList.remove("tab__content_active");
      })
      tab.classList.add("tab_active");
      tabsContent[index].classList.add("tab__content_active");
    }
  })
})