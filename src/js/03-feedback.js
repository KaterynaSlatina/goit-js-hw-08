import throttle from "lodash.throttle";

const FEEDBACK_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');

const formData = {
email: "email.value",
message: "message.value",
};

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem('FEEDBACK_KEY', JSON.stringify(formData));
}

function inTextarea() {
    const savedMassage = JSON.parse(localStorage.getItem('FEEDBACK_KEY'));
    if (savedMassage === null) {
        return
    }
}