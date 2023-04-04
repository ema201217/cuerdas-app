/* FORMULARIO DE ELIMINACIÓN DE PRODUCTO */

const $formDelete = document.querySelector("#formDelete");
const $placeholderInputTitle = document.querySelector(".placeholderInputTitle");
const $titleContent = document.querySelector(".titleContent");
const $textToWrite = document.querySelector(".textToWrite");
const activeDeleteProduct = ({ title, id }) => {
  $formDelete.action = `/admin/productos/eliminar/${id}?_method=DELETE`;
  $titleContent.textContent = title;
  $placeholderInputTitle.placeholder = "/" + title + "/";
  $textToWrite.textContent = title;
};



