const form = document.querySelector('.question-form');
const submitBtn = form.querySelector('.questiom-form__input[type="submit"]');
const nameSurname = form.querySelector('.questiom-form__input[type="text"]');
const phone = form.querySelector('.questiom-form__input[type="tel"]');
const email = form.querySelector('.questiom-form__input[type="email"]');

const validations = form.querySelectorAll('.validation');

const inputContainers = form.querySelectorAll('.question-form__input-container');


const generateError = function (text) {
  const error = document.createElement('div');
  error.className = 'error';
  error.style.color = 'red';
  error.innerHTML = text;
  return error;
}

const validationClear = function() {
  const errors = form.querySelectorAll('.error')

    for (let i = 0; i < errors.length; i++) {
      errors[i].remove();
    }
}

const checkInputEmpty = function() {
  for (let i = 0; i < validations.length; i++) {
    if (!validations[i].value) {

      const error = generateError('поле не может быть пустым');
      if (validations[i].id !== "email")
        form[i].parentElement.insertBefore(error, validations[i]);
    }
  }
}

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  validationClear();
  checkInputEmpty();
})