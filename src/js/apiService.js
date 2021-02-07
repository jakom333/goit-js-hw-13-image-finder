import imageCard from "../templates/image-card.hbs";

const gallery = document.querySelector(".gallery");

const baseUrl = "https://pixabay.com/api/";
const apiKey = "20188573-7bb6e1f85b49a99e39f48e5e2";

export default {
  page: 1,
  fetchImages(searchQuery) {
    const url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        markup(data);
        window.scrollTo({
          top: document.documentElement.offsetHeight,
          behavior: "smooth",
        });
      });
  },
  pageIncrement() {
    this.page += 1;
  },
};

function markup(data) {
  const imageMarkup = data.hits.map((el) => imageCard(el)).join("");
  gallery.insertAdjacentHTML("beforeend", imageMarkup);
}
