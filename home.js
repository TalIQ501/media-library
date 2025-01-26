import { Book } from './modules/objects.js';
import { createGrid, convertDDMMYY } from './modules/utils.js';
import { fetchData } from './backend/fetch.js';

const booksDiv = document.getElementById('recs-grid-books');

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
            convertDDMMYY(book["date_added"]),
            convertDDMMYY(book["date_published"])
        );
    
        books.push(newBook);
    });

    let recBooks = books;

    if (recBooks) {
        createGrid(recBooks, "createBookElem", booksDiv, {cutOff : 4, sort : 'name'});
    } else {
        console.log('Data is incorrect');
        console.log(typeof data);
        console.log(data);
    }
})();