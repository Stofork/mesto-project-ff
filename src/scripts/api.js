const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-17',
    headers: {
        authorization: '2a690146-f0db-4fdf-9e86-88ee97049bc8',
        'Content-Type': 'application/json'
    }
}

function getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
} 

export const getInitialProfile = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
    .then(res => {
        return getResponseData(res);
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
        return getResponseData(res);
    });
}

export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    })
    .then(res => {
        return getResponseData(res);
    });
}

export const addCard = (newCard) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: newCard.name,
            link: newCard.link
        })
    })
    .then(res => {
        return getResponseData(res);
    });
}

export const delInitialCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
    .then(res => {
        return getResponseData(res);
    });
}

export const likeCards = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: config.headers
    })
    .then(res => {
        return getResponseData(res);
    });
}

export const delLikeCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
    .then(res => {
        return getResponseData(res);
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
        return getResponseData(res);
    });
}