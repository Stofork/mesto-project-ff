import './pages/index.css';
import { initialCards } from './scripts/cards.js';
import { createCard, deleteCard, likeCard } from './scripts/card.js';
import { setProfile, editProfile } from './scripts/profile.js';
import { createNewCard, setNewCard } from './scripts/newCard.js';
import { openModal } from './scripts/modal.js'

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
    const cardImage = card.querySelector('.card__image')
    cardImage.addEventListener('click', () => approximationCard(element.name, element.link));
    cardList.append(card);
});

function approximationCard(name, link) {

    const popupImg = document.querySelector('.popup__image');
    popupImg.src = link;

    const popupCaption = document.querySelector('.popup__caption');
    popupCaption.textContent = name;

    const popup = document.querySelector('.popup_type_image');
    openModal(popup);
}

profileForm.addEventListener('submit', editProfile);

newCardForm.addEventListener('submit', createNewCard);

profileEditButton.addEventListener('click', () => setProfile(profileEdit));

addCardButton.addEventListener('click', () => setNewCard(addCardEdit));

export { cardList, profileTitle, profileDescription, titleInput, descriptionInput, cardNameInput, cardLinkInput, approximationCard };