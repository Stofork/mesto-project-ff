import { profile, profileTitle, profileDescription, titleInput, descriptionInput } from '../index.js';

function getProfile(profile) {
    titleInput.value = profile.profileName;
    descriptionInput.value = profile.profileDescription;

    profileTitle.textContent = profile.profileName;
    profileDescription.textContent = profile.profileDescription;
}

function editProfile(evt) {
    evt.preventDefault();
  
    profile.profileName = titleInput.value;
    profile.profileDescription = descriptionInput.value;
  
    getProfile(profile);
  };

export { getProfile, editProfile };