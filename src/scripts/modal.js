import { classOpen } from '../index.js';

// Открытие popup
function openModal(popup) {
    popup.classList.add(classOpen);
    document.addEventListener('keydown', closeModalEsc);
    popup.addEventListener('click', closeModalOverlay);
}

function closeModal(popup) {
    popup.classList.remove(classOpen);
    document.removeEventListener('keydown', closeModalEsc);
    popup.removeEventListener('click', closeModalOverlay);
}

function closeModalEsc(evt) {
    if(evt.key==='Escape'){
        closeModal(profileEdit);
    }
}

function closeModalOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      const popup = document.querySelector(selector.openModal);
      closeModal(popup);
    }
  }

export { openModal, closeModal };