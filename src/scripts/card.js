// @todo: Функция создания карточки
function createCard(cardInfo, deleteCard, likeCard, plusCart) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    
    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', () => likeCard(cardElement));

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardInfo.link;
    cardImage.alt = 'Фотография места, ' + cardInfo.name;
    cardImage.addEventListener('click', () => plusCart(cardElement));

    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = cardInfo.name;
    
    const deleteButtonCard = cardElement.querySelector('.card__delete-button');
    deleteButtonCard.addEventListener('click', () => deleteCard(cardElement));

    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
    cardElement.remove();
}

// @todo: Функция лайка карточки
// const likeCard = (evt) => evt.target.classList.toggle('card__like-button_is-active');

function likeCard(cardElement) {
    // const data = cardElement = document.querySelector('.card__like-button');
    // data.classList.toggle('card__like-button_is-active');
    cardElement.toggle('card__like-button_is-active');
}


// Увеличение картинки
function plusCart(cardElement) {
    const data = document.querySelector('.popup_type_image');
    data.classList.add('popup_is-opened');

    const imgData = document.querySelector('.popup__image');
    imgData.src = cardElement.querySelector('.card__image').src;

    const popupCaption = document.querySelector('.popup__caption');
    popupCaption.textContent = cardElement.querySelector('.card__description').querySelector('.card__title').textContent;
    
    console.log(cardElement.querySelector('.card__description').querySelector('.card__title').textContent);
}

export { createCard, deleteCard, likeCard, plusCart };