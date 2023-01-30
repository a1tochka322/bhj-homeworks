const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById("welcome")
const userId = document.getElementById("user_id")
const signoutBtn = document.getElementById("signout__btn");

// localStorage.clear();


if (localStorage.userId) {
    signin.classList.remove("signin_active")
    welcome.classList.add("welcome_active");
    userId.innerHTML = localStorage.userId;
} else {
    auth();
}

signoutBtn.onclick = () => {
    signin.classList.add("signin_active")
    welcome.classList.remove("welcome_active");
    localStorage.clear();
}

function auth() {
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(signinForm);
        let request = new XMLHttpRequest();
        request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        request.send(formData);
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                let data = JSON.parse(this.responseText);
                if (data.success) {
                    welcome.classList.add("welcome_active");
                    signin.classList.remove("signin_active")
                    localStorage.userId = data.user_id;
                    userId.innerHTML = localStorage.userId;
                } else {
                    alert('Неверный логин/пароль');
                }
            }
        }
        clearForm(signinForm.querySelectorAll("input"));

    });
}

function clearForm(fields) {
    fields.forEach(field => {
        field.value = '';
    })
}
