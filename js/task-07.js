const fontSizeControl = document.querySelector("#font-size-control");
const ChangedText = document.querySelector("#text");

fontSizeControl.addEventListener("input", onInputFontSize);

function onInputFontSize(evt) {
    const fonttest = evt.currentTarget.value;
    console.log(`"${fonttest}px"`);
    ChangedText.style.fontSize = `"${fonttest}px"`;
}