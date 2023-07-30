const refs = {
  body: document.querySelector("body"),
  color: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),  
}

refs.btn.addEventListener('click', onClickBtn);

// функція зміни кольру фону і виведення його hex значення
function onClickBtn(evt) {
  const changeColor = getRandomHexColor();
  refs.body.style.backgroundColor = changeColor;
  refs.color.innerText = changeColor;
}

// функція генерації довільного кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}