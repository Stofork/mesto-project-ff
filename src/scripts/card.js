import { openModal } from './modal.js' // Функции обработки popup

// @todo: Функция создания карточки
function createCard(cardInfo, deleteCard, likeCard, approximationCard) {
    // Шаблон карточки
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    // Выводим карточку
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardInfo.link; // Ссылка на картинку
    cardImage.alt = 'Фотография места, ' + cardInfo.name; // Описание картинки

    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = cardInfo.name; // Текст к каринки

    // Удаление карточки
    const deleteButtonCard = cardElement.querySelector('.card__delete-button');
    deleteButtonCard.addEventListener('click', () => deleteCard(cardElement));

    // Лайк карточки
    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', () => likeCard(cardElement));

    // Приблизить карточку
    cardImage.addEventListener('click', () => approximationCard(cardElement));

    // Возвращаем элемент
    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
    cardElement.remove();
}

// @todo: Функция лайка карточки
function likeCard(cardElement) {
    const data = cardElement.querySelector('.card__like-button');
    data.classList.toggle('card__like-button_is-active');
}

// @todo: Функция увеличения карточки
function approximationCard(cardElement) {
    // Увеличение картинки
    const data = document.querySelector('.popup_type_image');
    openModal(data);
    // Ссылка на картинку
    const popupImg = document.querySelector('.popup__image');
    popupImg.src = cardElement.querySelector('.card__image').src;
    // Подпись к картинке
    const popupCaption = document.querySelector('.popup__caption');
    popupCaption.textContent = cardElement.querySelector('.card__title').textContent;
}

export { createCard, deleteCard, likeCard, approximationCard };