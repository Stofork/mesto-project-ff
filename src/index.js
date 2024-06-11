import './pages/index.css'; // добавьте импорт главного файла стилей 
import { initialCards } from './scripts/cards.js';
import { createCard, deleteCard, likeCard } from './scripts/card.js';

const cardList = document.querySelector('.places__list');

initialCards.forEach(element => {
    const card = createCard(element, deleteCard, likeCard);
    cardList.append(card);
});

// Редактор профиля
function pop() {
    const data = document.querySelector('.popup_type_edit');
    data.classList.add('popup_is-opened');
    console.log(data);
}
// console.log(document.querySelector('.profile__edit-button'));
const profileButton = document.querySelector('.profile__edit-button');
profileButton.addEventListener('click', () => pop());

// Добавление карточки

function popCart() {
    const data = document.querySelector('.popup__image');
    data.classList.add('popup_is-opened');
    console.log(data);
}

const profileButtonCard = document.querySelector('.profile__add-button');
profileButtonCard.addEventListener('click', () => popCart());