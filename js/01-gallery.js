import { galleryItems } from './gallery-items.js';
// Change code below this line

{/* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li> */}

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



//console.log(galleryItems);
