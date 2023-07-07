import { galleryItems } from './gallery-items.js';

const ulEl = document.querySelector('.gallery');
const element = galleryItems.map(galleryItem => {
    const itemElm = document.createElement('li');
    itemElm.classList.add('gallery__item');

    const linkElm = document.createElement('a');
    linkElm.classList.add('gallery__link');
    linkElm.href = galleryItem.original;

    const imgElm = document.createElement('img');
    imgElm.classList.add('gallery__image');
    imgElm.src = galleryItem.preview;
    imgElm.setAttribute('data-source', galleryItem.original);
    imgElm.alt = galleryItem.description;

    itemElm.appendChild(linkElm);
    linkElm.appendChild(imgElm);

    return itemElm;
})
ulEl.append(...element);

ulEl.addEventListener('click', onClick);

let instance;

function onClick(evt) {
    if (evt.target.nodeName !== "IMG") {
        return;
    }
    evt.preventDefault();

    instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="600">`,
        {
            onShow: (instance) => { document.addEventListener('keyup', onButtonClick); },
            onClose: (instance) => { document.removeEventListener("keyup", onButtonClick); }
        });
    instance.show();
}

function onButtonClick(evt) {
    if (evt.key === "Escape") {
        instance.close();
    }
}

