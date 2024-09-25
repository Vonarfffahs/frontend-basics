'use strict';

const form = document.querySelector('.form-variant7');
const td7 = document.querySelector('#my-variant');
const colorInput = document.querySelector('#color');
const rows = document.querySelectorAll('tr'); 
let clickTimeout;

form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const outputDiv = document.querySelector('.sent-data');
        
        const data = new FormData(form).entries();

        const jsonData = data.reduce((acc, [key, val]) => {
            acc[key] = val;
            return acc;
        }, {});

        const isFormValid = formValidation(jsonData);

        if (isFormValid) {
            outputDiv.innerHTML = `
                <h2>Введені дані</h2>
                <p>ПІБ: ${jsonData.name}</p>
                <p>Варіант: ${jsonData.variant}</p>
                <p>Номер телефону: ${jsonData.phone}</p>
                <p>Факультет: ${jsonData.faculty}</p>
                <p>Адреса: ${jsonData.address}</p>
            `;
        }
    }
);

function formValidation(data) {
    if ( !(/\p{Alpha}{2,}\s\p{Alpha}\.\p{Alpha}\./u.test(data.name))) {
        alert('Некоректний запис імені. Приклад: "Сидоров В.І."');
        return false;
    }

    if (!data.variant || data.variant === '00' || !(/\b\d{2}\b/.test(data.variant))) {
        alert('Некоректний запис варіанта. Варіант повинен містити дві цифри і не бути 00');
        return false;
    }

    if (!data.phone || !(/\(\d{3}\)-\d{3}-\d{2}-\b\d{2}\b/.test(data.phone))) {
        alert('Некоректний запис номеру телефона. Приклад: (123)-456-78-90');
        return false;
    }

    if (!data.faculty || !(/^\p{Alpha}{4}$/u.test(data.faculty))) {
        alert('Некоректний запис факультету. Назва повинна містити 4 літери. Приклад: ФІОТ');
        return false;
    }

    if (!data.address || !(/м\.\s\b\d{6}\b/.test(data.address))) {
        alert('Некоректний запис адреси. Приклад: "м. 123456"');
        return false;
    }

    return true;
}


td7.addEventListener('mouseenter', (e) => {
    if(e.target.tagName === "TD" && e.target.id === "my-variant") {
        e.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        e.target.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
});

td7.addEventListener('click', (e) => {
    if(e.target.tagName === "TD" && e.target.id === "my-variant") {
        clickTimeout = setTimeout(() => {
            colorInput.style.top = e.clientY + 'px';
            colorInput.style.left = e.clientX + 'px';
            colorInput.click();
            
        }, 250);
    }
});

clearTimeout(clickTimeout);

colorInput.addEventListener('input', (e) => {
    td7.style.backgroundColor = e.target.value;
});

td7.addEventListener('dblclick', (e) => {
    if(e.target.tagName === "TD" && e.target.id === "my-variant") {

        rows[1].style.backgroundColor = td7.style.backgroundColor;
        rows[1+2].style.backgroundColor = td7.style.backgroundColor;
        rows[1+4].style.backgroundColor = td7.style.backgroundColor;
    }
});