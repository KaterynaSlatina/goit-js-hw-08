import throttle from "lodash.throttle";

const FEEDBACK_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const savedMessage = function (evt) {
    const formData = {
        email: "email.value",
        message: "message.value",
    }
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
};

form.addEventListener('input', throttle(savedMessage, 500));



function inTextarea() {
    const savedValueKey = JSON.parse(localStorage.getItem('FEEDBACK_KEY'));
    if (savedValueKey) {
        email.value = savedValueKey.email;
        message.value = savedValueKey.message;
    } else {
        email.value = "";
        message.value = "";
    }
}


form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (!email.value || !message.value) {
        return alert`Please, fill in all the fields`
    };

    localStorage.removeItem(FEEDBACK_KEY);
    console.log({ email: email.value, message: message.value });

    // form.reset();
});
    

inTextarea();