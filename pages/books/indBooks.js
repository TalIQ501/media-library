import { Book } from "../../modules/objects.js";
import { convertDDMMYY } from "../../modules/utils.js";
import { fetchData } from "../../backend/fetch.js";

const detailsDiv = document.getElementById('book-details-section')

const createBook = async () => {
    const url = window.location.pathname
    const book = decodeURIComponent(url.split('/').pop().slice(0,-5))
    const data = await fetchData("books");
    
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
        if (newBook.name.toLowerCase() === book.toLowerCase()) {
            newBook.createBookPage(detailsDiv);
            return 
        }
    });
    
}

(async () => {
    createBook();
})();

