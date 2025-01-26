import { Book } from "../../modules/objects.js";
import { createGrid, filterSearchSort, processFormData } from "../../modules/utils.js";
import { fetchData } from "../../backend/fetch.js";

const booksDiv = document.getElementById('grid-books');

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
            bookDetail["date_added"],
            bookDetail["date_published"]
        );
        console.log(newBook)
        books.push(newBook);
    });

    return books;
}

const filterBooks = (formData, lst) => {
    const bookFilters = new Set(["language", "genre"])

    const processedData = processFormData(formData, bookFilters)

    const filteredBooks = filterSearchSort(lst, processedData);

    console.log(filteredBooks)

    while (booksDiv.firstChild) {
        booksDiv.removeChild(booksDiv.firstChild)
    }

    createGrid(filteredBooks, 'createBookElem', booksDiv, {});
}

(async () => {
    const books = await getBooks(); // Deep copy;

    createGrid(books, 'createBookElem', booksDiv, {});

    const booksForm = document.getElementById('books-form');

    booksForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        filterBooks(formData, books);
    })
})();