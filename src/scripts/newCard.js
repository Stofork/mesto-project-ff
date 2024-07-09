import { createCard, deleteCard, changingLikeCard } from './card.js';
import { cardList, cardNameInput, cardLinkInput } from '../index.js';
import { openModal, closeModal} from './modal.js';
import { addCard } from './api.js'

function valuveNewCard(addCardEdit) {
    addCardEdit.querySelector(`.popup__form`).reset()
    addCardEdit.querySelector('.popup__button').textContent = 'Сохранить';
    openModal(addCardEdit);
}

function addNewCard(addCardEdit, profileId) {
    const newCardName = cardNameInput.value;
    const newCardLink = cardLinkInput.value;

    const newCard = {
        name: newCardName,
        link: newCardLink,
    };

    const newCardInfo = addCard(newCard);
    newCardInfo
        .then((newCardInfo) => {
            const card = createCard(newCardInfo, deleteCard, changingLikeCard, profileId);
            cardList.prepend(card);
            closeModal(addCardEdit);
        })
        .catch(err => console.log(`Ошибка добавления карточки: ${err}`));
}

export { addNewCard, valuveNewCard };