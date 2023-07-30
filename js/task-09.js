const refs = {
  body: document.querySelector("body"),
  color: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),  
}

refs.btn.addEventListener('click', onClickBtn);

function onClickBtn(evt) {
  const changeColor = getRandomHexColor();
  refs.body.style.backgroundColor = changeColor;
  refs.color.innerText = changeColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}