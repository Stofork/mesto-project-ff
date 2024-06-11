// @todo: Темплейт карточки
// const cardTemplate = document.querySelector('#card-template').content; -> f.createCard

// @todo: DOM узлы
// const cardList = document.querySelector('.places__list'); -> index

// @todo: Функция создания карточки
function createCard(cardInfo, deleteCard, likeCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButtonCard = cardElement.querySelector('.card__delete-button');
    const cardImage = cardElement.querySelector('.card__image');
    
    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', likeCard);

    cardImage.src = cardInfo.link;
    cardImage.alt = 'Фотография места, ' + cardInfo.name;

    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = cardInfo.name;
    
    deleteButtonCard.addEventListener('click', () => deleteCard(cardElement));

    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
    cardElement.remove();
}

const likeCard = (evt) => evt.target.classList.toggle('card__like-button_is-active');

// @todo: Вывести карточки на страницу
// initialCards.forEach(element => {
//     const card = addCard(element, deleteCard);
//     cardList.append(card);
// }); -> index

export { createCard, deleteCard, likeCard};