import { likeCards, delLikeCard, delInitialCard } from './api.js';

function createCard(cardInfo, deleteCard, changingLikeCard, approximationCard, profileId) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardInfo.link;
    cardImage.alt = 'Фотография места, ' + cardInfo.name;
    cardImage.addEventListener('click', () => approximationCard(cardInfo.name, cardInfo.link));

    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = cardInfo.name;

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', () => changingLikeCard(cardElement, likeButton, cardInfo));
    
    const deleteButtonCard = cardElement.querySelector('.card__delete-button');
    deleteButtonCard.addEventListener('click', () => deleteCard(cardElement, cardInfo._id));

    if (cardInfo.owner._id !== profileId) {
        deleteButtonCard.remove();
    }

    const cardLike = cardElement.querySelector('.card__like-count');
    const likes = cardInfo.likes.length;
    cardLike.textContent = likes;
 
    if (cardInfo.likes.find(item => item._id == profileId)) {
        likeButton.classList.add('card__like-button_is-active');
    } else { 
        likeButton.classList.remove('card__like-button_is-active');
    } 
    
    return cardElement;
}

function deleteCard(cardElement, cardId) {
    
    delInitialCard(cardId)
        .then(() => {
            cardElement.remove();
        })
        .catch(err => console.log(`Ошибка удаление карточки: ${err}`));
}

function changingLikeCard(cardElement, likeButton, cardInfo) {
    const cardLike = cardElement.querySelector('.card__like-count');
    const isLiked = likeButton.classList.contains('card__like-button_is-active');
    if (isLiked){
        delLikeCard(cardInfo._id)
            .then ((res) => { 
                cardLike.textContent = res.likes.length; 
                likeButton.classList.toggle('card__like-button_is-active'); 
            }) 
            .catch(err => console.log(`Ошибка функции удаление лайка: ${err}`));
    } else { 
        likeCards(cardInfo._id) 
            .then ((res) => { 
                cardLike.textContent = res.likes.length; 
                likeButton.classList.toggle('card__like-button_is-active'); 
            }) 
            .catch(err => console.log(`Ошибка функции постановки лайк: ${err}`));
    }  
}

export { createCard, deleteCard, changingLikeCard };