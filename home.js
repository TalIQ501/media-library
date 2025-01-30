import { Book } from './modules/objects.js';
import { createGrid, convertDDMMYY } from './modules/utils.js';
import { fetchData } from './backend/fetch.js';

const booksDiv = document.getElementById('recs-grid-books');
const booksDivEmpty = document.getElementById('empty-div-books');

const moviesDiv = document.getElementById('recs-grid-movies');
const moviesDivEmpty = document.getElementById('empty-div-movies');

const gamesDiv = document.getElementById('recs-grid-games');
const gamesDivEmpty = document.getElementById('empty-div-games');

const musicDiv = document.getElementById('recs-grid-music');
const musicDivEmpty = document.getElementById('empty-div-music');

const getBooks = async () => {
    const data = await fetchData("books");
    const books = [];
    
    Object.entries(data).forEach(([key, book]) => {
        const newBook = new Book(
            key,
            book["author"],
            book["language"],
            book["image"],
            book["genre"],
            convertDDMMYY(book["date_added"]),
            convertDDMMYY(book["date_published"])
        );
    
        books.push(newBook);
    });

    let recBooks = books;

    if (recBooks.length === 0) {
        booksDivEmpty.textContent = 'Books unavailable'
    }

    createGrid(recBooks, "createBookElem", booksDiv, {sort : 'date_added'}, 4);
}

const getMovies = async () => {
    const data = await fetchData("movies");
    const movies = [];
    
    Object.entries(data).forEach(([key, movie]) => {
        const newBook = new Book(
            key,
            movie["author"],
            movie["language"],
            movie["image"],
            movie["genre"],
            convertDDMMYY(movie["date_added"]),
            convertDDMMYY(movie["date_published"])
        );
    
        movies.push(newMovie);
    });

    let recMovies = movies;

    if (recMovies.length === 0) {
        moviesDivEmpty.textContent = 'Movies unavailable'
    }

    createGrid(recMovies, "createMovieElem", moviesDiv, {sort : 'date_added'}, 4);
}

const getGames = async () => {
    const data = await fetchData("games");
    const games = [];
    
    Object.entries(data).forEach(([key, game]) => {
        const newBook = new Book(
            key,
            game["author"],
            game["language"],
            game["image"],
            game["genre"],
            convertDDMMYY(game["date_added"]),
            convertDDMMYY(game["date_published"])
        );
    
        games.push(newGame);
    });

    let recGames = games;

    if (recGames.length === 0) {
        gamesDivEmpty.textContent = 'Games unavailable'
    }

    createGrid(recGames, "createGameElem", gamesDiv, {sort : 'date_added'}, 4);
}

const getMusic = async () => {
    const data = await fetchData("music");
    const music = [];
    
    Object.entries(data).forEach(([key, music]) => {
        const newMusic = new Book(
            key,
            music["author"],
            music["language"],
            music["image"],
            music["genre"],
            convertDDMMYY(music["date_added"]),
            convertDDMMYY(music["date_published"])
        );
    
        music.push(newMusic);
    });

    let recMusic = music;

    if (recMusic.length === 0) {
        musicDivEmpty.textContent = 'Music unavailable'
    }

    createGrid(recMusic, "createMusicElem", musicDiv, {sort : 'date_added'}, 4);
}

(async () => {
    await getBooks();

    await getMovies();

    await getGames();

    await getMusic();
})();