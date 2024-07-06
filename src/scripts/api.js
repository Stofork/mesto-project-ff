import { editProfile } from "./profile";

const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-17',
    headers: {
        authorization: '2a690146-f0db-4fdf-9e86-88ee97049bc8',
        'Content-Type': 'application/json'
    }
}

export const getInitialProfile = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }

    return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const editInitialProfile = (titleInput, descriptionInput) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: titleInput,
            about: descriptionInput
        })
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }

    return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }

    return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const addInitialCards = (newCard) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: newCard.name,
            link: newCard.link
        })
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }

    return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const delInitialCards = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }

    return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const likeCards = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: config.headers
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }

    return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const delLikeCards = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }

    return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const editAvatarProfile = (newAvatar) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: newAvatar
        })
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }

    return Promise.reject(`Ошибка: ${res.status}`);
    });
}