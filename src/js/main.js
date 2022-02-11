import imageItems from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const clouseBtn = document.querySelector('[data-action="close-lightbox"]');
const originImgRef = document.querySelector('.lightbox__image');

imageItems.forEach((image, index) => {
  const imageList = `<li class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" data-index="${index}" alt="${image.description}"/></a></li>`;
  galleryRef.insertAdjacentHTML('beforeend', imageList);
});

function openModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;
  originImgRef.setAttribute('src', e.target.dataset.source);
  originImgRef.setAttribute('alt', e.target.alt);
  lightboxRef.classList.add('is-open');
}

function closeModal() {
  lightboxRef.classList.remove('is-open');
  originImgRef.setAttribute('src', '');
  originImgRef.setAttribute('alt', '');
}

function btnClose(e) {
  if (e.target === clouseBtn) {
    closeModal();
  }
}

function lightBoxClose(e) {
  if (e.currentTarget.nodeName === e.target.nodeName) {
    closeModal();
  }
}

function closeEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function btnSlider(event) {
  let index = event.target.firstElementChild.dataset.index;
  if (event.code === 'ArrowLeft' && index > 0) {
    index--;
  }
  if (event.code === 'ArrowRight' && index < imageItems.length - 1) {
    index++;
  }
  event.target.firstElementChild.dataset.index = index;
  originImgRef.setAttribute('src', imageItems[index].original);
  originImgRef.setAttribute('alt', imageItems[index].description);
}

galleryRef.addEventListener('click', openModal);
lightboxRef.addEventListener('click', btnClose);
lightboxRef.addEventListener('click', lightBoxClose);
window.addEventListener('keydown', closeEsc);
window.addEventListener('keydown', btnSlider);
