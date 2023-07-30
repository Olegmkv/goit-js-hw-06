let counterValue = 0;
const counterDisplay = document.querySelector("#value");

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

decrementButton.addEventListener("click", onClickDecrement);
incrementButton.addEventListener("click", onClickIncrement);

function onClickDecrement() {
    counterValue -= 1;
    counterDisplay.innerText = counterValue;
}

function onClickIncrement() {
    counterValue += 1;
    counterDisplay.innerText = counterValue;
}