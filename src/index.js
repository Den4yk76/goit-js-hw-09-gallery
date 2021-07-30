import galleryItems from './app.js';
import './sass/main.scss';
import '../src/images/icon-close.svg';
import { refs } from './refs.js';
import { onGalleryClick, onCloseBtnClick, onBackdropClick, onPressKey } from './functions.js';

export const galleryRefersArray = galleryItems.map(item => item.original);
export const makeGallerymarkup = galleryItems.map(makeElementOfGallery).join('');
refs.galleryEl.insertAdjacentHTML('afterbegin', makeGallerymarkup);

function makeElementOfGallery({ preview, original, description }) {
  return `<li class="gallery__item js-gallery__item">
        <a
            class="gallery__link"
            href="${original}"
        >
            <img
                class="gallery__image js-gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`;
}

refs.galleryEl.addEventListener('click', onGalleryClick);
refs.modalCloseBtn.addEventListener('click', onCloseBtnClick);
refs.backdropEl.addEventListener('click', onBackdropClick);
