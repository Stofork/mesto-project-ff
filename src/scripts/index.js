// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function addCard(cardInfo, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButtonCard = cardElement.querySelector('.card__delete-button');

    const cardImage = cardElement.querySelector('.card__image');
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

// @todo: Вывести карточки на страницу
initialCards.forEach(element => {
    const card = addCard(element, deleteCard);
    cardList.append(card);
});