import apiServices from "./apiService.js";
import imageCard from "../templates/image-card.hbs";

const refs = {
  searchForm: document.querySelector("#search-form"),
  gallery: document.querySelector("#gallery"),
};

refs.searchForm.addEventListener("submit", searchFormSubmitHandler);

//-------------------------------------------

function searchFormSubmitHandler(e) {
  e.preventDefault();

  apiServices.page;

  const form = e.currentTarget;
  const input = form.elements.query;

  //   clearListItems();

  apiServices.resetPage();
  apiServices.serchQuery = input.value;
  fetchImages();

  input.value = "";
}

function fetchImages() {
  apiServices.fetchImages().then((images) => {
    insertListItems(images);
  });
}

function insertListItems(images) {
  const markup = imageCard(images);

  refs.gallery.insertAdjacentHTML("beforeend", markup);
}

function clearListItems() {
  refs.gallery.innerHTML = "";
}
