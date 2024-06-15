import './pages/index.css';
import { initialCards } from './scripts/cards.js';
import { createCard, deleteCard, likeCard, approximationCard } from './scripts/card.js';
import { getProfile, editProfile } from './scripts/profile.js';
import { openModal } from './scripts/modal.js';
import { newCard } from './scripts/newCard.js';

//
const classOpen = 'popup_is-opened';
const classClose = 'popup__close';
const profileEdit = document.querySelector('.popup_type_edit');
const addCardEdit = document.querySelector('.popup_type_new-card');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileForm = document.forms['edit-profile'];
const titleInput = profileForm.querySelector('.popup__input_type_name');
const descriptionInput = profileForm.querySelector('.popup__input_type_description');
const cardList = document.querySelector('.places__list');
const profileEditButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');
const newCardForm = document.forms['new-place'];
const cardNameInput = newCardForm.querySelector('.popup__input_type_card-name');
const cardLinkInput = newCardForm.querySelector('.popup__input_type_url');
//

const profile = {
    profileName: 'Жак-Ив Кусто',
    profileDescription: 'Исследователь океана'
};

initialCards.forEach(element => {
    const card = createCard(element, deleteCard, likeCard, approximationCard);
    cardList.append(card);
});

getProfile(profile);

profileForm.addEventListener('submit', editProfile);

newCardForm.addEventListener('submit', newCard);

profileEditButton.addEventListener('click', () => openModal(profileEdit));

addCardButton.addEventListener('click', () => openModal(addCardEdit));

export { cardList, classOpen, classClose, profile, profileTitle, profileDescription, titleInput, descriptionInput, cardNameInput, cardLinkInput };