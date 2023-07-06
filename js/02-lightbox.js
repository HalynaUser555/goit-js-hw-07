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
    imgElm.alt = galleryItem.description;

    itemElm.appendChild(linkElm);
    linkElm.appendChild(imgElm);

    return itemElm;
})
ulEl.append(...element);

console.dir(document.querySelectorAll('.gallery a'));

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
})

ulEl.addEventListener('click', onClick);
function onClick(evt) {
    console.dir(evt);
    evt.preventDefault();

    lightbox.open();
    document.addEventListener('keyup', onButtonClick);
}
function onButtonClick(evt) {
    console.dir(evt.target);
    if (evt.key === "Escape") {
        lightbox.close();
        document.removeEventListener("keyup", onButtonClick);
    }
}

