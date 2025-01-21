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

fetch('./data/db.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data: ', error))

const books = jsonData.books;



