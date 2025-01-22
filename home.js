class Book {
    constructor(name, author, language, image, genre, dateAdded, yearPublish) {
        this.name = name;
        this.author = author;
        this.language = language
        this.image = image;
        this.genre = genre;
        this.dateAdded = dateAdded;
        this.yearPublish = yearPublish;
    }

    createBookElem = (obj) => {

        const bookElem = document.createElement('div');
        bookElem.setAttribute('id', this.name);
        bookElem.classList.add('grid-object');
        
        const imgSpace = document.createElement('div');
        imgSpace.classList.add('img-container');
    
        const img = document.createElement('img');
        img.src = this.image;
    
        const bottomBar = document.createElement('div');
        bottomBar.classList.add('bottom-bar');
    
        const dataBar = document.createElement('div');
        dataBar.classList.add('data-bar');
    
        const bookNameDisp = document.createElement('div');
        bookNameDisp.classList.add('book-name-display');
        bookNameDisp.textContent = this.name;
    
        const bookAuthorDisp = document.createElement('div');
        bookAuthorDisp.classList.add('book-author-display');
        bookAuthorDisp.textContent = this.author;
    
        imgSpace.appendChild(img)
        bookElem.appendChild(imgSpace);
        bookElem.appendChild(bottomBar);
        bottomBar.appendChild(dataBar);
        dataBar.appendChild(bookNameDisp);
        dataBar.appendChild(bookAuthorDisp);
    
        obj.appendChild(bookElem);
    };
}

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