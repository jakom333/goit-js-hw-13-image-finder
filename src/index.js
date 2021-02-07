import "./styles.css";
import apiService from "./js/apiService.js";
const gallery = document.querySelector(".gallery");

const form = document.querySelector("#search-form");
const loadMoreBtn = document.querySelector(".load-more");
form.addEventListener("submit", searchImages);
let input = "";
function searchImages(event) {
  event.preventDefault();
  input = event.target[0].value;
  gallery.innerHTML = "";
  apiService.fetchImages(input);
  loadMoreBtn.classList.remove("is-hidden");
}

loadMoreBtn.addEventListener("click", loadNextPage);

function loadNextPage() {
  apiService.pageIncrement();
  apiService.fetchImages(input);
}
