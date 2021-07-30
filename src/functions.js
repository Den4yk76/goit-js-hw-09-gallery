import { refs } from './refs.js';
import galleryItems from './app.js';
import { galleryRefersArray } from './index.js';

export function onGalleryClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('js-gallery__image')) {
    return;
  }

  refs.ligtboxEl.classList.add('is-open');
  refs.jsLightboxImageEl.src = e.target.dataset.source;
  refs.jsLightboxImageEl.alt = e.target.alt;
  window.addEventListener('keydown', onPressKey);
}

export function onCloseBtnClick(e) {
  refs.ligtboxEl.classList.remove('is-open');
  refs.jsLightboxImageEl.src = '';
  refs.jsLightboxImageEl.alt = '';
  window.removeEventListener('keydown', onPressKey);
}

export function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseBtnClick();
  }
}

export function onPressKey(e) {
  const currentNumber = galleryRefersArray.indexOf(refs.jsLightboxImageEl.src);
  if (e.code === 'Escape') {
    onCloseBtnClick();
  } else if (e.code === 'ArrowRight' && currentNumber < galleryRefersArray.length - 1) {
    refs.jsLightboxImageEl.src = galleryItems[currentNumber + 1].original;
    refs.jsLightboxImageEl.alt = [currentNumber + 1].description;
  } else if (e.code === 'ArrowLeft' && currentNumber > 0) {
    refs.jsLightboxImageEl.src = galleryItems[currentNumber - 1].original;
    refs.jsLightboxImageEl.alt = galleryItems[currentNumber - 1].description;
  }
}
