import { createCard, deleteCard, changingLikeCard } from './card.js';
import { cardList, cardNameInput, cardLinkInput, approximationCard } from '../index.js';
import { openModal } from './modal.js';
import { addInitialCards } from './api.js'

function valuveNewCard(addCardEdit) {
    addCardEdit.querySelector(`.popup__form`).reset()
    addCardEdit.querySelector('.popup__button').textContent = 'Сохранить';
    openModal(addCardEdit);
}

function createNewCard(profile) {
    const newCardName = cardNameInput.value;
    const newCardLink = cardLinkInput.value;

    const newCard = {
        name: newCardName,
        link: newCardLink,
    };

    const newCardInfo = addInitialCards(newCard);
    newCardInfo
        .then((newCardInfo) => {
            const card = createCard(newCardInfo, deleteCard, changingLikeCard, profile);
            const cardImage = card.querySelector('.card__image')
            cardImage.addEventListener('click', () => approximationCard(newCardName, newCardLink));
            cardList.prepend(card);
        })
}

export { createNewCard, valuveNewCard };