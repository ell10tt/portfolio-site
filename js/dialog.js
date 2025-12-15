const openButtons = document.querySelectorAll('.dialog__button');
const closeButtons = document.querySelectorAll('.close__dialog__button');

openButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-target');
        const modal = document.getElementById(modalId);
        modal.showModal();
    });
});

closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = button.closest('dialog');
        modal.close();
    });
});

const modals = document.querySelectorAll('.modal__window');

modals.forEach(modal => {
    const slides = modal.querySelectorAll('.slide');
    const prevBtn = modal.querySelector('.prev__slide');
    const nextBtn = modal.querySelector('.next__slide');

    if (!slides.length || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    };


    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    });
});