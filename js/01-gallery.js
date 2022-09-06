import { galleryItems } from './gallery-items.js';
// Change code below this line





const galleryOfImages = document.querySelector('.gallery');
galleryOfImages.insertAdjacentHTML('beforeend', createImagesMarkup(galleryItems));
galleryOfImages.addEventListener('click', imagesPicker)


function createImagesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return galleryOfImages.insertAdjacentHTML('afterbegin' ,
            `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}", 
        data-source="${original}", 
        alt="${description}", width="366", height="234"
        </a>
        </div>`);
    })
        .join('');
}



function imagesPicker(e) {
    e.preventDefault();
    const imagesEl = e.target.classList.contains('gallery__image');
    if (!imagesEl) {
        return
    }
console.log(e.target);
}



const instance = basicLightbox.create(`
    <div class="modal">
<a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}", 
        data-source="${original}", 
        alt="${description}", width="366", height="234"
        </a>
    </div>
`)
instance.show();
console.log(instance);
console.log(basicLightbox);
