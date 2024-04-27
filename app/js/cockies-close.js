document.addEventListener('DOMContentLoaded', function() {
    // Функция для открытия модального окна через 3 секунды
    function openModal() {
      var modal = document.querySelector('.homepage__modal');
      modal.style.display = 'grid'; // Изменено
      setTimeout(function() {
        modal.classList.add('homepage__modal-open');
      }, 100);
    }
  
    // Вызываем функцию открытия модального окна через 3 секунды после загрузки страницы
    setTimeout(openModal, 3000);
  
    // Обработчик события для закрытия модального окна при клике на кнопку закрытия
    var closeModalBtn = document.querySelector('.homepage__modal-close');
    closeModalBtn.addEventListener('click', function() {
      var modal = document.querySelector('.homepage__modal');
      modal.classList.remove('homepage__modal-open');
      setTimeout(function() {
        modal.style.display = 'none';
      }, 1000); // Изменено
    });
  
    // Обработчик события для закрытия модального окна при клике на кнопку "Хорошо"
    var closeOkayBtn = document.getElementById('homepage__close-modal-btn');
    closeOkayBtn.addEventListener('click', function() {
      var modal = document.querySelector('.homepage__modal');
      modal.classList.remove('homepage__modal-open');
      setTimeout(function() {
        modal.style.display = 'none';
      }, 1000); // Изменено
    });
  });
  