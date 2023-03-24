// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

//console.log(galleryItems);
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const gallaryMarkup = createGalleryItemsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', gallaryMarkup);



//console.log(createGalleryItemsMarkup(galleryItems));

function createGalleryItemsMarkup(items){
return items.map(({preview, original, description})=> {
    return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"
    />
  </a>
</li> `;
})
.join('');
}

new SimpleLightbox('.gallery a', {
    captionsData:"alt",
    captionPosition:"bottom",
	captionDelay: 250
});

