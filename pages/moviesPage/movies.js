import { Movie } from "../../modules/objects.js";
import { createGrid, processFormData, convertDDMMYY } from "../../modules/utils.js";
import { fetchData } from "../../backend/fetch.js";

const moviesDiv = document.getElementById('grid-movies');
const emptyDiv = document.getElementById('empty-div-movies');

const getMovies = async () => {
    const data = await fetchData("movies");
    const movies = [];

    Object.entries(data).forEach(([movieName, movieDetail]) => {
        const newMovie = new Movie(
            movieName,
            movieDetail["author"],
            movieDetail["language"],
            movieDetail["image"],
            movieDetail["genre"],
            convertDDMMYY(movieDetail["date_added"]),
            convertDDMMYY(movieDetail["date_published"])
        );
        movies.push(newMovie);
    });

    return movies;
}

const filterMovies = (formData, lst) => {
    while (moviesDiv.firstChild) {
        moviesDiv.removeChild(moviesDiv.firstChild)
    }

    const movieFilters = new Set(["language", "genre"])

    const processedData = processFormData(formData, movieFilters)

    createGrid(lst, 'createMovieElem', moviesDiv, processedData);

    if (!moviesDiv.firstChild) {
        emptyDiv.textContent = 'No item matches your selection';
    }
}

(async () => {
    const movies = await getMovies();

    if (movies.length === 0) {
        emptyDiv.textContent = 'Movies unavailable';
        return
    } 

    createGrid(movies, 'createMovieElem', moviesDiv);

    const moviesForm = document.getElementById('movies-form');

    moviesForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const newMovies = await getMovies();

        if (newMovies.length === 0) {
            emptyDiv.textContent = 'Movies unavailable';
            return
        } 

        filterMovies(formData, newMovies);
    })
})();