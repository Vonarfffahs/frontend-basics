'use strict';

// (7%10)+1 = 8
const eighthElement = document.getElementById('eighth-element'),
      ninthElement = document.querySelector('#ninth-element'),
      imgActionsCap = document.querySelector('#img-actions-cap'),
      addBtn = document.querySelector('#add-btn'),
      increaseBtn = document.querySelector('#increase-btn'),
      decreaseBtn = document.querySelector('#decrease-btn'),
      deleteBtn = document.querySelector('#delete-btn');
let img = document.createElement('img'),
    isImageAdded = false;

eighthElement.addEventListener('click', e => {
    e.preventDefault();

    if (e.target && e.target.id === eighthElement.id) {
        changeElemColor(e.target, 'eight-elem-color-change');
    }
});

ninthElement.addEventListener('click', e => {
    e.preventDefault();

    if (e.target && e.target.id === ninthElement.id) {
        changeElemColor(e.target, 'ninth-elem-color-change');
    }
});

function changeElemColor(elem, className) {
    elem.classList.contains(className) 
        ? elem.classList.remove(className)
        : elem.classList.add(className);
}

img.src = "https://vidviday.ua/storage/media/tour/4342/vipusknii-2.jpg";
img.alt = "Кам'янець-Подільський";
img.width = 450;
img.height = 300;

addBtn.addEventListener('click', () => {
    if (!isImageAdded) {
        imgActionsCap.before(img);
        isImageAdded = true;
    }
});

increaseBtn.addEventListener('click', () => {
    if (isImageAdded) {
        img.style.width = (img.width * 2) + 'px';
        img.style.height = (img.height * 2) + 'px';
    }
});

decreaseBtn.addEventListener('click', () => {
    if (isImageAdded) {
        img.style.width = (img.width / 2) + 'px';
        img.style.height = (img.height / 2) + 'px';
    }
});

deleteBtn.addEventListener('click', () => {
    if (isImageAdded) {
        img.style.width = 450 + 'px';
        img.style.height = 300 + 'px';
        img.remove();
        isImageAdded = false;
    }
});