import { createCard, deleteCard, likeCard } from './card.js';
import { cardList, cardNameInput, cardLinkInput } from '../index.js';
import { openModal } from './modal.js';
import { approximationCard } from './card.js';

function setNewCard(addCardEdit) {
    addCardEdit.querySelector(`.popup__form`).reset()
    openModal(addCardEdit);
}

function editNewCard(evt) {
    evt.preventDefault();
    
    const newCardName = cardNameInput.value;
    const newCardLink = cardLinkInput.value;

    const newCard = {
        name: newCardName,
        link: newCardLink,
    };

    const card = createCard(newCard, deleteCard, likeCard);
    const cardImage = card.querySelector('.card__image')
    cardImage.addEventListener('click', () => approximationCard(newCardName, newCardLink));
    cardList.prepend(card);

}

export { editNewCard, setNewCard };