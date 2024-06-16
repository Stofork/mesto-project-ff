import './pages/index.css';
import { initialCards } from './scripts/cards.js';
import { createCard, deleteCard, likeCard, approximationCard } from './scripts/card.js';
import { setProfile, editProfile } from './scripts/profile.js';
import { editNewCard, setNewCard } from './scripts/newCard.js';

//
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

initialCards.forEach(element => {
    const card = createCard(element, deleteCard, likeCard);
    cardList.append(card);
});

profileForm.addEventListener('submit', editProfile);

newCardForm.addEventListener('submit', editNewCard);

profileEditButton.addEventListener('click', () => setProfile(profileEdit));

addCardButton.addEventListener('click', () => setNewCard(addCardEdit));

// console.log(cardNameInput);
// cardImage.addEventListener('click', () => approximationCard(1));

export { cardList, profileTitle, profileDescription, titleInput, descriptionInput, cardNameInput, cardLinkInput };