import { Book } from "../../modules/objects.js";
import { createGrid } from "../../modules/utils.js";

const booksDiv = document.getElementById('grid-books')

async function fetchData() {
    try {
        const res = await fetch('/data/db.json');
        const data = await res.json();
        return data;
    } catch (err) {
        console.error('Error fetching data: ', err);
    }
}

(async () => {
    const data = await fetchData();
    const books = [];
    
    Object.entries(data["books"]).forEach(([key, book]) => {
        const newBook = new Book(
            key,
            book["author"],
            book["language"],
            book["image"],
            book["genre"],
            book["date_added"],
            book["date_published"]
        );
        
        books.push(newBook);
    });

    if (books) {
        createGrid(books, 'createBookElem', booksDiv);
    } else {
        console.log('Data is incorrect');
        console.log(typeof data);
        console.log(data);
    }
})();