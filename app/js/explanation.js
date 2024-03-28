const itemElements = document.querySelectorAll('.explanation__item-element');
const explanationItems = document.querySelectorAll('.explanation__item');

function hideItems() {
    explanationItems.forEach((item, index) => {
        item.style.backgroundColor = '';
        const container = document.querySelectorAll('.explanation__item-container')[index];
        container.style.display = '';
    });
}

document.addEventListener('click', (event) => {
    const isClickedInside = document.querySelector('.explanation__list').contains(event.target);
    if (!isClickedInside) {
        hideItems();
    }
});

itemElements.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();

        hideItems();
        const container = document.querySelectorAll('.explanation__item-container')[index];
        container.style.display = 'block';

        explanationItems[index].style.backgroundColor = '#FFCC48';
    });
});

const buttonOpen = document.querySelector('.explanation__button-open');
const form = document.querySelector('.homepage__form-wrapper');
let formVisible = false;

buttonOpen.addEventListener('click', function() {
    if (!formVisible) {
        event.preventDefault();
        form.style.display = 'block';
        buttonOpen.style.transform = "rotate(180deg)";
        formVisible = true;
    } else {
        event.preventDefault();
        form.style.display = 'none';
        buttonOpen.style.transform = "rotate(0deg)";
        formVisible = false;
    }
});

function checkWindowSize() {
    if (window.innerWidth <= 1440) {
        form.style.display = 'block';
    }
    else {
        form.style.display = 'none';
    }
}

window.addEventListener('load', checkWindowSize);
window.addEventListener('resize', checkWindowSize);