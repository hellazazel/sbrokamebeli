document.addEventListener('DOMContentLoaded', function() {
const inputs = document.querySelectorAll('.homepage__input');

  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      input.parentElement.querySelector('.homepage__label').classList.add('focus');
    });

    input.addEventListener('blur', function() {
      if (input.value === '') {
        input.parentElement.querySelector('.homepage__label').classList.remove('focus');
      }
    });
  });
});

const allForms = document.querySelectorAll('form');

allForms.forEach(form => {
    const formInputs = form.querySelectorAll('input[type="tel"]');

    formInputs.forEach(input => {
        input.addEventListener('keypress', function(event) {
            const charCode = event.which ? event.which : event.keyCode;

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                event.preventDefault();
            }
        });
    });
});




