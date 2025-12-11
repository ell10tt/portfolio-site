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