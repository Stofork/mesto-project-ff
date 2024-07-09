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
  profileEdit.querySelector('.popup__button').textContent = 'Сохранить';
  titleInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(profileEdit);
}

function editProfile(profileEdit) {
  editInitialProfile(titleInput.value, descriptionInput.value)
    .then((res) => {
        profileTitle.textContent = res.name;
        profileDescription.textContent = res.about;
        closeModal(profileEdit); 
    }) 
    .catch(err => console.log(`Ошибка обновления профиля: ${err}`))
    .finally(() =>{
      profileEdit.querySelector('.popup__button').textContent = 'Сохранение...';
    });
};

function valuvAvatar(avatarEdit) {
  avatarEdit.querySelector(`.popup__form`).reset();
  avatarEdit.querySelector('.popup__button').textContent = 'Сохранить';
  openModal(avatarEdit);
}

function editAvatar(avatarEdit) {
  editAvatarProfile(avatarLinkInput.value)
    .then((res) => {
      profileImage.style.backgroundImage = `url(${res.avatar})`;
      closeModal(avatarEdit); 
  }) 
  .catch(err => console.log(`Ошибка обновления аватара: ${err}`))
  .finally(() =>{
    avatarEdit.querySelector('.popup__button').textContent = 'Сохранение...';
  });
}

export { valuveProfile, editProfile, getProfile, valuvAvatar, editAvatar };