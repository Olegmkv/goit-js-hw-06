const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onSubmitLoginForm)

//функція обробки форми "логіну"
function onSubmitLoginForm(evt) {
    evt.preventDefault();
    //перевірка на валідність
    const { elements: { email, password } } = evt.currentTarget;
    if (email.value.trim() === "" || password.value.trim() === "") {
        alert("Заповніть пусті поля");
        return;
    }
    // формування об'єкту форм для бек-офісу
    const formData = new FormData(evt.currentTarget);
    const backEndFormData = {};
    formData.forEach((value, name) => { backEndFormData[name] = value; });
    console.log(backEndFormData);
    // очистка форми, не знаю як автоматично всі поля скинути
    evt.currentTarget.elements.email.value = '';
    evt.currentTarget.elements.password.value = '';
}
