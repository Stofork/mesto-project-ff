(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t,n){var r=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),o=r.querySelector(".card__image");return o.src=e.link,o.alt="Фотография места, "+e.name,r.querySelector(".card__title").textContent=e.name,r.querySelector(".card__delete-button").addEventListener("click",(function(){return t(r)})),r.querySelector(".card__like-button").addEventListener("click",(function(){return n(r)})),r}function n(e){e.remove()}function r(e){e.querySelector(".card__like-button").classList.toggle("card__like-button_is-active")}e.d({},{Sf:()=>E,fv:()=>b,hL:()=>k,aq:()=>L,Bl:()=>f,mo:()=>m,Qn:()=>_,hz:()=>v});var o="popup_is-opened",c="popup__close";function u(e){e.classList.add(o),e.addEventListener("click",d),e.addEventListener("submit",i),document.addEventListener("keydown",p)}function a(e){e.classList.remove(o),e.removeEventListener("click",d),e.removeEventListener("submit",i),document.removeEventListener("keydown",p)}function i(){a(document.querySelector(".".concat(o)))}function p(e){"Escape"===e.key&&a(document.querySelector(".".concat(o)))}function d(e){(e.target===e.currentTarget||e.target.classList.contains(c))&&a(e.currentTarget)}var l=document.querySelector(".popup_type_edit"),s=document.querySelector(".popup_type_new-card"),_=document.querySelector(".profile__title"),m=document.querySelector(".profile__description"),y=document.forms["edit-profile"],v=y.querySelector(".popup__input_type_name"),f=y.querySelector(".popup__input_type_description"),k=document.querySelector(".places__list"),q=document.querySelector(".profile__edit-button"),S=document.querySelector(".profile__add-button"),g=document.forms["new-place"],L=g.querySelector(".popup__input_type_card-name"),b=g.querySelector(".popup__input_type_url");function E(e,t){document.querySelector(".popup__image").src=t,document.querySelector(".popup__caption").textContent=e,u(document.querySelector(".popup_type_image"))}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var o=t(e,n,r);o.querySelector(".card__image").addEventListener("click",(function(){return E(e.name,e.link)})),k.append(o)})),y.addEventListener("submit",(function(e){e.preventDefault(),_.textContent=v.value,m.textContent=f.value})),g.addEventListener("submit",(function(e){e.preventDefault();var o=L.value,c=b.value,u=t({name:o,link:c},n,r);u.querySelector(".card__image").addEventListener("click",(function(){return E(o,c)})),k.prepend(u)})),q.addEventListener("click",(function(){return function(e){e.querySelector(".popup__form").reset(),v.value=_.textContent,f.value=m.textContent,u(e)}(l)})),S.addEventListener("click",(function(){return function(e){e.querySelector(".popup__form").reset(),u(e)}(s)}))})();