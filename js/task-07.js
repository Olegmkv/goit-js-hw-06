const fontSizeControl = document.querySelector("#font-size-control");
const changedText = document.querySelector("#text");

fontSizeControl.addEventListener("input", onInputFontSize);

// функція зміни розміру тексту за значенням "ползунку"
function onInputFontSize(evt) {
    const fontSize = evt.currentTarget.value;
    changedText.style.fontSize = `${fontSize}px`;
}