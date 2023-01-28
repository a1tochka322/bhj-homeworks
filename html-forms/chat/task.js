const chatWidget = document.querySelector(".chat-widget");
const chatMessages = document.getElementById("chat-widget__messages");
const chatContainer = document.querySelector(".chat-widget__messages-container");
let myTimeout;

function afk() {
    let currentTime = new Date().toLocaleTimeString().slice(0,-3);
    chatMessages.innerHTML += `
            <div class="message">
            <div class="message__time">${currentTime}</div>
            <div class="message__text">Вы где? Время отвчеать!</div>
            </div>`;
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatWidget.onclick = function () {
    if (!chatWidget.classList.contains("chat-widget_active")) {
        myTimeout = setTimeout(afk, 30000);
        chatWidget.classList.add("chat-widget_active");
    }
};


const text = document.getElementById("chat-widget__input");

text.onkeyup = (e) => {
    if ((e.keyCode === 13) && (text.value.length>0)) {
        let currentTime = new Date().toLocaleTimeString().slice(0,-3);
        chatMessages.innerHTML += `
            <div class="message message_client">
            <div class="message__time">${currentTime}</div>
            <div class="message__text">${text.value}</div>
            </div>
            <div class="message">
            <div class="message__time">${currentTime}</div>
            <div class="message__text">Добрый день!</div>
            </div>`
        text.value = '';
        chatContainer.scrollTop = chatContainer.scrollHeight;
        clearTimeout(myTimeout);
    }
}