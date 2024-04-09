import "./src/assets/styles/styles.scss";
const sendBtn = document.getElementById('btn-send');
const name = document.getElementById('request-input-name');
const surname = document.getElementById('request-input-surname');
const patronymic = document.getElementById('request-input-patronymic');
const form = document.getElementById("form");

const xhr = new XMLHttpRequest();
xhr.open("POST", "http://httpbin.org/post"); // Простая эмуляция успешного запроса на Backend.

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);

sendBtn.onclick = function () {
    if (name.value && surname.value && patronymic.value) {
        xhr.onload = () => {
            if (xhr.status === 200) {
                form.style.display = 'none';
                document.getElementById('req-title').style.display = 'none';
                document.getElementById('req-description').style.display = 'none';
                document.getElementById('req-success-block').style.display = 'flex';
            } else {
                alert('Ошибка запроса. Повторите позже.')
            }
        };
        xhr.send('Фамилия - ' + surname.value + ' Имя - ' + name.value + ' Отчество - ' + patronymic.value);
    }
}
