const faqItems = document.querySelectorAll('.faq__item');
const faqImages = document.querySelectorAll('.faq__item-image');

faqItems.forEach((item, index) => {
    const question = item.querySelector('.faq__item-question');
    const answer = item.querySelector('.faq__item-answer');

    item.addEventListener('click', () => {
        const isAnswerVisible = getComputedStyle(answer).display !== 'none';

        if (!isAnswerVisible) {
            answer.style.display = 'block';
            item.classList.add('open');
            faqImages[index].setAttribute('src', 'app/images/src/faq/Minus.svg');
        } else {
            answer.style.display = 'none';
            item.classList.remove('open');
            faqImages[index].setAttribute('src', 'app/images/src/faq/Plus.svg');
        }
    });

    faqImages[index].addEventListener('click', event => {
        event.stopPropagation();
        const isAnswerVisible = getComputedStyle(answer).display !== 'none';

        if (!isAnswerVisible) {
            answer.style.display = 'block';
            item.classList.add('open');
            faqImages[index].setAttribute('src', 'app/images/src/faq/Minus.svg');
        } else {
            answer.style.display = 'none';
            item.classList.remove('open');
            faqImages[index].setAttribute('src', 'app/images/src/faq/Plus.svg');
        }
    });
});



