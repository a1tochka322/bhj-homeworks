const checkboxes = document.querySelectorAll(".interest__check");

addEventListener("change", (e) => {
    const curLi = e.target.closest(".interest")
    const childCheck = curLi.querySelectorAll(".interests_active .interest__check")
    if (e.target.checked === true) {
        childCheck.forEach(check => check.checked = true)
    } else {
        childCheck.forEach(check => check.checked = false)
    }
})