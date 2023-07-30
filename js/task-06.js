const inputText = document.querySelector("#validation-input");

inputText.addEventListener("blur", onBlurInputText);
const validLength = Number(inputText.dataset.length);

//функція візульного відображення валідації довжини введеного тексту 
function onBlurInputText(evt) {
    const inputTextLength = evt.currentTarget.value.length;
    if (inputTextLength < validLength) {
        inputText.classList.remove("valid");
        inputText.classList.remove("invalid");
    } else if (inputTextLength === validLength) {
        inputText.classList.add("valid");
        inputText.classList.remove("invalid");
    } else {
        inputText.classList.add("invalid");
        inputText.classList.remove("valid");
     }
}