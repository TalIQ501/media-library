import { Game } from "../../modules/objects.js";
import { createGrid, processFormData, convertDDMMYY } from "../../modules/utils.js";
import { fetchData } from "../../backend/fetch.js";

const gamesDiv = document.getElementById('grid-games');
const emptyDiv = document.getElementById('empty-div-games');

const getGames = async () => {
    const data = await fetchData("games");
    const games = [];

    Object.entries(data).forEach(([gameName, gameDetail]) => {
        const newGame = new Game(
            gameName,
            gameDetail["publisher"],
            gameDetail["language"],
            gameDetail["image"],
            gameDetail["genre"],
            convertDDMMYY(gameDetail["date_added"]),
            convertDDMMYY(gameDetail["date_published"])
        );
        games.push(newGame);
    });
    return games;
}

const filterGames = (formData, lst) => {
    while (gamesDiv.firstChild) {
        gamesDiv.removeChild(gamesDiv.firstChild)
    }

    const gameFilters = new Set(["language", "genre"])

    const processedData = processFormData(formData, gameFilters)

    createGrid(lst, 'createGameElem', gamesDiv, processedData);

    if (!gamesDiv.firstChild) {
        emptyDiv.textContent = 'No item matches your description'
    }
}

(async () => {
    const games = await getGames();

    console.log(games)

    if (games.length === 0) {
        emptyDiv.textContent = 'Games unavailable';
        return
    } 

    createGrid(games, 'createGameElem', gamesDiv);

    const gamesForm = document.getElementById('games-form');

    gamesForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const newGames = await getGames();

        if (games.length === 0) {
            emptyDiv.textContent = 'Games unavailable';
            return
        }

        emptyDiv.textContent = '';

        filterGames(formData, newGames);
    })
})();