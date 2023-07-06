import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

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

let instance;
ulEl.addEventListener('click', onClick);
function onClick(evt) {
    console.dir(evt.target.nodeName);
    evt.preventDefault();
    console.log(evt.target.dataset.source)
    instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)
    instance.show();
    document.addEventListener('keyup', onButtonClick);
}
function onButtonClick(evt) {
    console.dir(evt.target);
    if (evt.key === "Escape") {
        instance.close();
        document.removeEventListener("keyup", onButtonClick);
    }
}

