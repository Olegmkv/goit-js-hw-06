let nameUser = "Anonymous";

const fieldNameInput = document.querySelector("#name-input");
const fieldNameOutput = document.querySelector("#name-output");

fieldNameInput.addEventListener("input", onInputFieldName);

function onInputFieldName(evt) {
    nameUser = evt.currentTarget.value;
    if (nameUser.trim() === "") {
        nameUser = "Anonymous";
    }
    fieldNameOutput.innerText = nameUser;
};
