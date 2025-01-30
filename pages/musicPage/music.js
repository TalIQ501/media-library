import { Music } from "../../modules/objects.js";
import { createGrid, processFormData, convertDDMMYY } from "../../modules/utils.js";
import { fetchData } from "../../backend/fetch.js";

const musicDiv = document.getElementById('grid-music');
const emptyDiv = document.getElementById('empty-div-music');

const getMusic = async () => {
    const data = await fetchData("music");
    const music = [];

    Object.entries(data).forEach(([musicName, musicDetail]) => {
        const newMusic = new Music(
            musicName,
            musicDetail["author"],
            musicDetail["language"],
            musicDetail["image"],
            musicDetail["genre"],
            convertDDMMYY(musicDetail["date_added"]),
            convertDDMMYY(musicDetail["date_published"])
        );
        music.push(newMusic);
    });

    return music;
}

const filterMusic = (formData, lst) => {
    while (musicDiv.firstChild) {
        musicDiv.removeChild(musicDiv.firstChild)
    }

    const musicFilters = new Set(["language", "genre"])

    const processedData = processFormData(formData, musicFilters)

    createGrid(lst, 'createMusicElem', musicDiv, processedData);

    if (!musicDiv.firstChild) {
        emptyDiv.textContent = 'No item matches your description'
    }
}

(async () => {
    const music = await getMusic();

    if (music.length === 0) {
        emptyDiv.textContent = 'Music unavailable';
        return
    } 

    createGrid(music, 'createMusicElem', musicDiv);

    const musicForm = document.getElementById('music-form');

    musicForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const newMusic = await getMusic();

        if (newMusic.length === 0) {
            emptyDiv.textContent = 'Music unavailable';
            return
        } 

        filterMusic(formData, newMusic);
    })
})();