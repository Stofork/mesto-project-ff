import { likeCards, delLikeCards, getInitialCards, delInitialCards } from './api.js';

function createCard(cardInfo, deleteCard, changingLikeCard, profile) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardInfo.link;
    cardImage.alt = 'Фотография места, ' + cardInfo.name;
    
    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = cardInfo.name;

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', () => changingLikeCard(cardElement, likeButton, cardInfo, profile._id));
    
    const deleteButtonCard = cardElement.querySelector('.card__delete-button');
    deleteButtonCard.addEventListener('click', () => deleteCard(cardElement, cardInfo._id));

    if (cardInfo.owner._id !== profile._id) {
        deleteButtonCard.remove();
    }

    const cardLike = cardElement.querySelector('.card__like-count');
    const likes = cardInfo.likes.length;
    cardLike.textContent = likes;
 
    if (cardInfo.likes.find(item => item._id == profile._id)) {
        likeButton.classList.add('card__like-button_is-active');
    } else { 
        likeButton.classList.remove('card__like-button_is-active');
    } 
    
    return cardElement;
}

function deleteCard(cardElement, cardId) {
    cardElement.remove();
    delInitialCards(cardId);
}

function changingLikeCard(cardElement, likeButton, cardInfo, profileId) {
    getInitialCards()
        .then((cards) => {
            cards.forEach(element => {
                if (element._id == cardInfo._id) {
                    if (element.likes.length == 0) {
                        likeButton.classList.add('card__like-button_is-active');
                        const like = likeCards(element._id);
                        likesСounter(cardElement, like);
                        
                    } else {
                        if (element.likes.find(item => item._id == profileId)) {
                            likeButton.classList.remove('card__like-button_is-active');
                            const like = delLikeCards(element._id);
                            likesСounter(cardElement, like);
                        } else {
                            likeButton.classList.add('card__like-button_is-active');
                            const like = likeCards(element._id);
                            likesСounter(cardElement, like);
                        }
                    }
                }
            });
        });
}

function likesСounter(cardElement, like) {
    const cardLike = cardElement.querySelector('.card__like-count');
    like
        .then((like) => {
            cardLike.textContent = like.likes.length;
        });
}

export { createCard, deleteCard, changingLikeCard };