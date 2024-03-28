function openModal(imgElement) {
    const modal = document.getElementById('works__modal');
    const modalImage = document.getElementById('modalImage');

    modalImage.src = imgElement.src;

    modal.style.display = 'block';

    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}
  
  function closeModal() {
    const modal = document.getElementById('works__modal');
  
    modal.style.display = 'none';

     modal.removeEventListener('click', closeModal);
     document.removeEventListener('keydown', closeModal);
  }
  
  const images = document.querySelectorAll('.works__image');
  
  images.forEach((img) => {
    img.addEventListener('click', () => {
        openModal(img);
    });
  });
  
const closeButton = document.querySelector('.button-close');

closeButton.addEventListener('click', () => {
    closeModal();
});