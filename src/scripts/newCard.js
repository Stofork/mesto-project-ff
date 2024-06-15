import { createCard, deleteCard, likeCard, approximationCard } from './card.js';
import { cardList, cardNameInput, cardLinkInput } from '../index.js';

function newCard(evt) {
    evt.preventDefault();

    const newCardName = cardNameInput.value;
    const newCardLink = cardLinkInput.value;

    const newCard = {
        name: newCardName,
        link: newCardLink,
    };

    const card = createCard(newCard, deleteCard, likeCard, approximationCard);
    cardList.prepend(card);
}

export { newCard };