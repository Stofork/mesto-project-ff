const classOpen = 'popup_is-opened';
const classClose = 'popup__close';

function openModal(popup) {
    popup.classList.add(classOpen);
    popup.addEventListener('click', closeModalOverlay);
    popup.addEventListener('submit', closeModalSub);
    document.addEventListener('keydown', closeModalEsc);
}

function closeModal(popup) {
    popup.classList.remove(classOpen);
    popup.removeEventListener('click', closeModalOverlay);
    popup.removeEventListener('submit', closeModalSub);
    document.removeEventListener('keydown', closeModalEsc);
}

function closeModalSub() {
    const openedPopup = document.querySelector(`.${classOpen}`);
    closeModal(openedPopup);
}

function closeModalEsc(evt) {
    if(evt.key==='Escape'){
        const openedPopup = document.querySelector(`.${classOpen}`);
        closeModal(openedPopup);
    }
}

function closeModalOverlay(evt) {
    if (evt.target === evt.currentTarget || evt.target.classList.contains(classClose)) {
        closeModal(evt.currentTarget);
    }
}

export { openModal, closeModal };