const textarea = document.getElementById("editor");
const clearBtn = document.getElementById("clear-btn")

textarea.value = localStorage.text;
textarea.oninput = () => localStorage.text = textarea.value;
clearBtn.onclick = () => {
    textarea.value = "";
    localStorage.text = textarea.value;
}
