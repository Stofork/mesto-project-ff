import { profileTitle, profileDescription, titleInput, descriptionInput } from '../index.js';
import { openModal } from './modal.js';

function setProfile(profileEdit) {
  profileEdit.querySelector(`.popup__form`).reset();

  titleInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;

  openModal(profileEdit);
}

function editProfile(evt) {
  evt.preventDefault();

  profileTitle.textContent = titleInput.value;
  profileDescription.textContent = descriptionInput.value;

};

export { setProfile, editProfile };