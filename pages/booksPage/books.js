import { Book } from "../../modules/objects.js";
import { createGrid, processFormData, convertDDMMYY } from "../../modules/utils.js";
import { fetchData } from "../../backend/fetch.js";

const booksDiv = document.getElementById('grid-books');
const emptyDiv = document.getElementById('empty-div-books');

const getBooks = async () => {
    const data = await fetchData("books");
    const books = [];

    Object.entries(data).forEach(([bookName, bookDetail]) => {
        const newBook = new Book(
            bookName,
            bookDetail["author"],
            bookDetail["language"],
            bookDetail["image"],
            bookDetail["genre"],
            convertDDMMYY(bookDetail["date_added"]),
            convertDDMMYY(bookDetail["date_published"])
        );
        books.push(newBook);
    });

    return books;
}

const filterBooks = (formData, lst) => {
    while (booksDiv.firstChild) {
        booksDiv.removeChild(booksDiv.firstChild)
    }

    const bookFilters = new Set(["language", "genre"])

    const processedData = processFormData(formData, bookFilters)

    createGrid(lst, 'createBookElem', booksDiv, processedData);

    if (!booksDiv.firstChild) {
        emptyDiv.textContent = 'No item matches your description';
    }
}

(async () => {
    const books = await getBooks();

    if (books.length === 0) {
        emptyDiv.textContent = 'Books unavailable';
        return
    }

    createGrid(books, 'createBookElem', booksDiv);

    const booksForm = document.getElementById('books-form');

    booksForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const newBooks = await getBooks();

        if (newBooks.length === 0) {
            emptyDiv.textContent = 'Books unavailable';
            return
        }

        emptyDiv.textContent = '';

        filterBooks(formData, newBooks);
    })
})();