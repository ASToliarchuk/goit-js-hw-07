import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);

const markup = galleryItems.map(({ preview, original, description }) => 
   `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
   </a>
</li>`);

gallery.insertAdjacentHTML(`afterbegin`, markup.join(''));

gallery.addEventListener(`click`, onClickModalOpen);

function onClickModalOpen(event)
{
    event.preventDefault();

if (event.target.nodeName !== `IMG`) {
        return;
    }
    const modalWindow = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" height="600">`);
    modalWindow.show();




if (modalWindow.show() === true) {
    document.addEventListener('keydown', event => {
            
if (event.code === 'Escape') {
        modalWindow.close();
}
    });
    
    } else {
    document.removeEventListener('keydown', event => {
if (event.code === 'Escape') {
        modalWindow.close();
}
    });
    }
};