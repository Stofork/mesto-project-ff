import { classOpen, classClose } from '../index.js';

function openModal(popup) {
    popup.classList.add(classOpen);
    popup.addEventListener('click', closeModalBut);
    popup.addEventListener('click', closeModalOverlay);
    popup.addEventListener('submit', closeModalSub);
    document.addEventListener('keydown', closeModalEsc);
}

function closeModal(popup) {
    popup.classList.remove(classOpen);
    popup.removeEventListener('click', closeModalBut);
    popup.removeEventListener('click', closeModalOverlay);
    popup.removeEventListener('submit', closeModalSub);
    document.removeEventListener('keydown', closeModalEsc);
}

function closeModalBut(evt) {
    const openedPopup = document.querySelector(`.${classOpen}`);
    const closedPopup = openedPopup.querySelector(`.${classClose}`);

    if (evt.target === closedPopup) {
        closeModal(openedPopup);
    }
}

function closeModalSub(evt) {
    const openedPopup = document.querySelector(`.${classOpen}`);
    closeModal(openedPopup);
}

function closeModalEsc(evt) {
    const openedPopup = document.querySelector(`.${classOpen}`);

    if(evt.key==='Escape'){
        closeModal(openedPopup);
    }
}

function closeModalOverlay(evt) {
    const openedPopup = document.querySelector(`.${classOpen}`);

    if (evt.target === evt.currentTarget) {
        closeModal(openedPopup);
    }
}

export { openModal, closeModal };