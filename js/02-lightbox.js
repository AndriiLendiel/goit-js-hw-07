import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryNet = document.querySelector('.gallery');

const createGalleryNet = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> `
}).join('');

galleryNet.insertAdjacentHTML("afterbegin", createGalleryNet);


const lightbox = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: "alt",
  captionDelay: 250,
});

