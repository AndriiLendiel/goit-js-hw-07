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
        alt="${description}"/>
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
     }
galleryOfImages.addEventListener('click', callModal)

function callModal(e) {
	const instance = basicLightbox.create(`<div class="modal">
    <img src="${e.target.dataset.source}" alt="${e.target.alt}"/>
    </div>
`) 

    instance.show();

}

// const divModal = document.querySelector('.modal');
// document.addEventListener('keydown', closeModal);
// console.log(divModal);
// function closeModal(e) {    
//     if (e.code === 'Escape') {
//         instance.close();
//         // divModal.classList.remove('modal');
//     }
// }

galleryOfImages.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
        instance.close();
    }
})
