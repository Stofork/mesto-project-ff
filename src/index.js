import './pages/index.css';
import { createCard, deleteCard, changingLikeCard } from './scripts/card.js';
import { valuveProfile, editProfile, getProfile, valuvAvatar, editAvatar } from './scripts/profile.js';
import { addNewCard, valuveNewCard } from './scripts/newCard.js';
import { openModal } from './scripts/modal.js'
import { enableValidation, clearValidation} from './scripts/validation.js'
import { getInitialCards, getInitialProfile} from './scripts/api.js'

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const profileEdit = document.querySelector('.popup_type_edit');
const avatarEdit = document.querySelector('.popup_avatar_edit');
const avatarEditButton = document.querySelector('.profile__image-over');
const newAvatarForm = document.forms['edit-profile-avatar'];
const avatarLinkInput = newAvatarForm.querySelector('.popup__input_type_url');
const addCardEdit = document.querySelector('.popup_type_new-card');
const profileTitle = document.querySelector('.profile__title');
const profileImage = document.querySelector('.profile__image');
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

function processingProfile(profile) {
    getProfile(profile);
}

function processingCard(cards, profileId) {
    cards.forEach(element => {
        const card = createCard(element, deleteCard, changingLikeCard, profileId);
        const cardImage = card.querySelector('.card__image')
        cardImage.addEventListener('click', () => approximationCard(element.name, element.link));
        cardList.append(card);
    });
}

function approximationCard(name, link) {
    const popupImg = document.querySelector('.popup__image');
    popupImg.src = link;
    popupImg.alt = 'Фотография места, ' + name;

    const popupCaption = document.querySelector('.popup__caption');
    popupCaption.textContent = name;

    const popup = document.querySelector('.popup_type_image');
    openModal(popup);
}

function processingeditProfile(evt) {
    evt.preventDefault();
    editProfile(profileEdit);
}

profileForm.addEventListener('submit', processingeditProfile);

function processingNewCard(evt) {
    evt.preventDefault();
    
    getInitialProfile()
        .then((profile) => {
            addNewCard(addCardEdit, profile._id);
        })
        .catch(err => console.log(`Ошибка загрузки профиля при добавление карточки: ${err}`))
        .finally(() =>{
            addCardEdit.querySelector('.popup__button').textContent = 'Сохранение...';
        });
}

newCardForm.addEventListener('submit', processingNewCard);

function setProfile(profileEdit) {
    valuveProfile(profileEdit);
    clearValidation(profileEdit, validationConfig);
}

profileEditButton.addEventListener('click', () => setProfile(profileEdit));

function setAvatarProfile(avatarEdit) {
    valuvAvatar(avatarEdit);
    clearValidation(avatarEdit, validationConfig);
}

avatarEditButton.addEventListener('click', () => setAvatarProfile(avatarEdit));

function processingEditAvatar(evt) {
    evt.preventDefault();
    editAvatar(avatarEdit);
}

newAvatarForm.addEventListener('submit', processingEditAvatar);

function setNewCard(addCardEdit) {
    valuveNewCard(addCardEdit);
    clearValidation(addCardEdit, validationConfig);
}

addCardButton.addEventListener('click', () => setNewCard(addCardEdit));

enableValidation(validationConfig);

Promise.all([ getInitialProfile(), getInitialCards() ])
    .then(([ profile, cards ]) => {
        processingProfile(profile);
        processingCard(cards, profile._id);
    })
    .catch(err => console.log(`Ошибка первоначальной загрузки: ${err}`));

export { cardList, profileTitle, profileDescription, profileImage, titleInput, descriptionInput, cardNameInput, cardLinkInput, approximationCard, avatarLinkInput };