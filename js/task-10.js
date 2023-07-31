const elements = {
  numberBoxes: document.querySelector("#controls > input"),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  showBoxes: document.querySelector("#boxes"),
}
const SIDE_INIT = 30; //мінімальний розмір контейнера

//слухачі подій
elements.btnCreate.addEventListener("click", onClickBtnCreate);
elements.btnDestroy.addEventListener("click", onClickBtnDestroy);

//обробка події створення контейнерів
function onClickBtnCreate() {
  createBoxes(elements.numberBoxes.value);
}

//обробка події вилучення контейнерів
function onClickBtnDestroy() {
  elements.showBoxes.innerHTML = "";
}

// вставка в розмітку контейнерів
function createBoxes(amount) {
  if (amount === 0) return;

  const markingBoxes = [];
  for (let i = 0; i < amount; i += 1){
    const sideSize = SIDE_INIT + i * 10;
    markingBoxes[i] = `<div style="width:${sideSize}px; height:${sideSize}px; background-color:${getRandomHexColor()}"></div>`;
  }
  elements.showBoxes.insertAdjacentHTML("afterbegin", markingBoxes.join("")); 
}

// генерація рандомного кольору в hex форматі
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }
  