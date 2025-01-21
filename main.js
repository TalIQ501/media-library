class Book {
    constructor (name, author, image, genre, dateAdded, datePublish) {
        this.name = name;
        this.author = author,
        this.image = image,
        this.genre = genre,
        this.dateAdded = dateAdded,
        this.datePublish = datePublish
    }

        
}

let jsonData;
let books;

fetch('./data/db.json')
    .then(response => response.json())
    .then(data => {
        jsonData = data;
        books = jsonData.books
        console.log(books)
    })
    .catch(error => console.error('Error fetching data: ', error))

/**/



