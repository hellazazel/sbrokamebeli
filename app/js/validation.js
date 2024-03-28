    document.addEventListener("DOMContentLoaded", function () {
        // Для каждой формы на странице
        const forms = document.querySelectorAll(".homepage__form");

        forms.forEach(function(form) {
            const nameInput = form.querySelector(".homepage__input[name='user__name']");
            const telInput = form.querySelector(".homepage__input[name='user__tel']");
            const submitButton = form.querySelector(".homepage__button");

            function checkValidity() {
                const nameValue = nameInput.value.trim();
                const telValue = telInput.value.trim();

                if (nameValue !== "" && telValue.length === 12) {
                    submitButton.classList.remove("disabled");
                } else {
                    submitButton.classList.add("disabled");
                }
            }

            nameInput.addEventListener("input", checkValidity);
            telInput.addEventListener("input", checkValidity);
        });
    });
