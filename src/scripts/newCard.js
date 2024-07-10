import { createCard, deleteCard, changingLikeCard } from './card.js';
import { cardList, cardNameInput, cardLinkInput, approximationCard} from '../index.js';
import { openModal, closeModal} from './modal.js';
import { addCard } from './api.js'

function valuveNewCard(addCardEdit) {
    addCardEdit.querySelector(`.popup__form`).reset()
    openModal(addCardEdit);
}

function addNewCard(addCardEdit, profileId) {
    const buttonSave = addCardEdit.querySelector('.popup__button');
    const newCardName = cardNameInput.value;
    const newCardLink = cardLinkInput.value;

    const newCard = {
        name: newCardName,
        link: newCardLink,
    };

    buttonSave.textContent = 'Сохранение...';
    const newCardInfo = addCard(newCard);
    newCardInfo
        .then((newCardInfo) => {
            const card = createCard(newCardInfo, deleteCard, changingLikeCard, approximationCard, profileId);
            cardList.prepend(card);
            closeModal(addCardEdit);
        })
        .catch(err => console.log(`Ошибка добавления карточки: ${err}`))
        .finally(() =>{
            buttonSave.textContent = 'Сохранить';
        });
}

export { addNewCard, valuveNewCard };