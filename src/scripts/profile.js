import { profileTitle, profileDescription, profileImage, titleInput, descriptionInput, avatarLinkInput} from '../index.js';
import { openModal } from './modal.js';
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

function editProfile(evt) {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...';

  profileTitle.textContent = titleInput.value;
  profileDescription.textContent = descriptionInput.value;

  editInitialProfile(titleInput.value, descriptionInput.value);

};

function valuvAvatar(avatarEdit) {
  avatarEdit.querySelector(`.popup__form`).reset();
  avatarEdit.querySelector('.popup__button').textContent = 'Сохранить';
  openModal(avatarEdit);
}

function editAvatar(evt) {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...';
  
  editAvatarProfile(avatarLinkInput.value);
  profileImage.style.backgroundImage = `url(${avatarLinkInput.value})`;
}

export { valuveProfile, editProfile, getProfile, valuvAvatar, editAvatar };