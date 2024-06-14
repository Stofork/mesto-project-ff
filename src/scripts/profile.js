import { openModal, closeModal } from './modal.js' // Функции обработки popup

// Открыть редактро профиля
function editProfile(profileEdit) {
    openModal(profileEdit);
}

function closeProfile(closeProfileEdit) {
    closeModal(closeProfileEdit);
}

export { editProfile, closeProfile };