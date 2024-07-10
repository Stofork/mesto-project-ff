import { profileTitle, profileDescription, profileImage, titleInput, descriptionInput, avatarLinkInput } from '../index.js';
import { openModal, closeModal } from './modal.js';
import { editInitialProfile, editAvatarProfile } from './api.js'

function getProfile(profile) {
  profileTitle.textContent = profile.name;
  profileDescription.textContent = profile.about;
  profileImage.style.backgroundImage = `url(${profile.avatar})`;
}

function valuveProfile(profileEdit) {
  profileEdit.querySelector(`.popup__form`).reset();
  
  titleInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(profileEdit);
}

function editProfile(profileEdit) {
  const buttonSave =   profileEdit.querySelector('.popup__button');
  buttonSave.textContent = 'Сохранение...';
  editInitialProfile(titleInput.value, descriptionInput.value)
    .then((res) => {
        profileTitle.textContent = res.name;
        profileDescription.textContent = res.about;
        closeModal(profileEdit); 
    }) 
    .catch(err => console.log(`Ошибка обновления профиля: ${err}`))
    .finally(() =>{
      buttonSave.textContent = 'Сохранить';
    });
};

function valuvAvatar(avatarEdit) {
  avatarEdit.querySelector(`.popup__form`).reset();
  openModal(avatarEdit);
}

function editAvatar(avatarEdit) {
  const buttonSave = avatarEdit.querySelector('.popup__button');
  buttonSave.textContent = 'Сохранение...';
  editAvatarProfile(avatarLinkInput.value)
    .then((res) => {
      profileImage.style.backgroundImage = `url(${res.avatar})`;
      closeModal(avatarEdit); 
  }) 
  .catch(err => console.log(`Ошибка обновления аватара: ${err}`))
  .finally(() =>{
    buttonSave.textContent = 'Сохранить';
  });
}

export { valuveProfile, editProfile, getProfile, valuvAvatar, editAvatar };