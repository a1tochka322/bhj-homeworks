const modalClose = document.querySelector(".modal__close");
const modal = document.getElementById("subscribe-modal");


function getCookie(name) {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}

if (getCookie('modalclose') !== 'closed') {
    modal.classList.add("modal_active")
}

modalClose.onclick = () => {
    modal.classList.remove("modal_active");
    document.cookie = 'modalclose=closed';
}