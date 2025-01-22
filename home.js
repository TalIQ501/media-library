import { Book } from './modules/objects.js';

const booksDiv = document.getElementById('recs-grid-books')

async function fetchData() {
    try {
        const res = await fetch('/data/db.json');
        const data = await res.json();
        return data;
    } catch (err) {
        console.error('Error fetching data: ', err);
    }
}

const createBookDisplay = (n, books) => {
    const bookDisplayList = books.slice(0, n)

    bookDisplayList.forEach(book => {
        book.createBookElem(booksDiv)
    })
};

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
        createBookDisplay(4, books);
    } else {
        console.log('Data is incorrect');
        console.log(typeof data);
        console.log(data);
    }
})();