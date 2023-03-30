import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(
   ({preview, original, description}) =>
   `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
 </li>`
);

gallery.insertAdjacentHTML("beforeend", markup.join(""));
gallery.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  const {target} = evt;
  if (!target.classList.contains("gallery__image")) {
    return;
  }
  if (target.nodeName === "IMG") {
  const instance = basicLightbox.create
  (`<img src="${target.dataset.source}" width="800" 
  height="600">`, {
    onClose: () => {
      document.addEventListener("keydown", Keys)}});
      function Keys(evt) {
        if (evt.key === "Escape") {
            instance.close();
        }
      }
  instance.show();  
  }
}


//console.log(galleryItems)
