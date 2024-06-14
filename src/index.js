import './pages/index.css'; // добавьте импорт главного файла стилей 
import { initialCards } from './scripts/cards.js'; // Готовый шаблон с картинками
import { createCard, deleteCard, likeCard, approximationCard } from './scripts/card.js'; // Функции работы с ракточками
import { editProfile, closeProfile } from './scripts/profile.js' // Функции обработки popup

//
const classOpen = 'popup_is-opened';
const profileEdit = document.querySelector('.popup_type_edit');
//

const cardList = document.querySelector('.places__list');
// Перебираем все карточки
initialCards.forEach(element => {
    const card = createCard(element, deleteCard, likeCard, approximationCard);
    cardList.append(card);
});

const profileButton = document.querySelector('.profile__edit-button');
profileButton.addEventListener('click', () => editProfile(profileEdit));

const closePprofileButton = document.querySelector('.popup__close');
closePprofileButton.addEventListener('click', () => closeProfile(profileEdit));

// document.addEventListener('keydown', function(event) {
//     if(event.key==='Escape'){
//         closeProfile(profileEdit);
//     }
// });

// Редактор профиля
// function pop() {
//     const data = document.querySelector('.popup_type_edit');
//     data.classList.add('popup_is-opened');
// }
// console.log(document.querySelector('.profile__edit-button'));
// const profileButton = document.querySelector('.profile__edit-button');
// profileButton.addEventListener('click', () => openPop());

// Добавление карточки

// function popCart() {
//     const data = document.querySelector('.popup_type_new-card');
//     data.classList.add('popup_is-opened');
// }

// const profileButtonCard = document.querySelector('.profile__add-button');
// profileButtonCard.addEventListener('click', () => popCart());

export { classOpen };