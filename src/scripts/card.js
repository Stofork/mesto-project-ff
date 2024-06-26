function createCard(cardInfo, deleteCard, likeCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardInfo.link;
    cardImage.alt = 'Фотография места, ' + cardInfo.name;

    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = cardInfo.name;

    const deleteButtonCard = cardElement.querySelector('.card__delete-button');
    deleteButtonCard.addEventListener('click', () => deleteCard(cardElement));

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', () => likeCard(cardElement));

    return cardElement;
}

function deleteCard(cardElement) {
    cardElement.remove();
}

function likeCard(cardElement) {
    const data = cardElement.querySelector('.card__like-button');
    data.classList.toggle('card__like-button_is-active');
}

export { createCard, deleteCard, likeCard };