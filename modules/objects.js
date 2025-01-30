export class Book {
    constructor(name, author, language, image, genre, dateAdded, datePublished) {
        this.name = name;
        this.author = author;
        this.language = language
        this.image = image;
        this.genre = genre;
        this["date_added"] = dateAdded;
        this["date_published"] = datePublished;
    }

    createBookElem = (targetDiv) => {
        const bookElem = document.createElement('a');
        bookElem.setAttribute('id', this.name);
        bookElem.classList.add('grid-object');
        
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
    
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
    
        imgContainer.appendChild(img)
        bookElem.appendChild(imgContainer);
        bookElem.appendChild(bottomBar);
        bottomBar.appendChild(dataBar);
        dataBar.appendChild(bookNameDisp);
        dataBar.appendChild(bookAuthorDisp);
    
        targetDiv.appendChild(bookElem);

        bookElem.href = `/pages/books/${this.name}.html`
    };

    createBookPage = (targetDiv) => {
        const bookElem = document.createElement('div');;
        bookElem.setAttribute('id', 'book-details')
        bookElem.classList.add('book-details-container');

        const banner = document.createElement('div');
        banner.classList.add('banner');

        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = this.name;

        banner.appendChild(title);

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
    
        const img = document.createElement('img');
        img.src = this.image;

        imgContainer.appendChild(img);

        const detailsContainer = document.createElement('div');
        detailsContainer.setAttribute('id', 'details-container');
        detailsContainer.classList.add('details-container');

        const dateAddedLabel = document.createElement('div');
        dateAddedLabel.setAttribute('id', 'book-date-added-label');
        dateAddedLabel.classList.add('detail-label');
        dateAddedLabel.textContent = 'Date Added';

        const dateAddedValue = document.createElement('div');
        dateAddedValue.setAttribute('id', 'book-date-added-value');
        dateAddedValue.classList.add('detail-value');
        if (this["date_added"]) {
            dateAddedValue.textContent = this['date_added'].toDateString();
        } else {
            dateAddedValue.textContent = 'Not given';
        }

        const datePublishedLabel = document.createElement('div');
        datePublishedLabel.setAttribute('id', 'book-date-published-label');
        datePublishedLabel.classList.add('detail-label');
        datePublishedLabel.textContent = 'Date Published';

        const datePublishedValue = document.createElement('div');
        datePublishedValue.setAttribute('id', 'book-date-published-value');
        datePublishedValue.classList.add('detail-value');
        if (this["date_published"]) {
            datePublishedValue.textContent = this["date_published"].toDateString(); 
        } else {
            datePublishedValue.textContent = 'Not given';
        }

        const authorLabel = document.createElement('div');
        authorLabel.setAttribute('id', 'book-date-added-label');
        authorLabel.classList.add('detail-label');
        authorLabel.textContent = 'Author';

        const authorValue = document.createElement('div');
        authorValue.setAttribute('id', 'book-date-added-value');
        authorValue.classList.add('detail-value');
        authorValue.textContent = this.author;

        const languageLabel = document.createElement('div');
        languageLabel.setAttribute('id', 'book-date-added-label');
        languageLabel.classList.add('detail-label');
        languageLabel.textContent = 'Language';

        const languageValue = document.createElement('div');
        languageValue.setAttribute('id', 'book-date-added-value');
        languageValue.classList.add('detail-value');
        languageValue.textContent = this.language;

        const genreLabel = document.createElement('div');
        genreLabel.setAttribute('id', 'book-date-added-label');
        genreLabel.classList.add('detail-label');
        genreLabel.textContent = 'Genre';

        const genreValue = document.createElement('div');
        genreValue.setAttribute('id', 'book-date-added-value');
        genreValue.classList.add('detail-value');
        genreValue.textContent = this.genre;

        detailsContainer.appendChild(dateAddedLabel);
        detailsContainer.appendChild(dateAddedValue);
        detailsContainer.appendChild(languageLabel);
        detailsContainer.appendChild(languageValue);
        detailsContainer.appendChild(genreLabel);
        detailsContainer.appendChild(genreValue);
        detailsContainer.appendChild(authorLabel);
        detailsContainer.appendChild(authorValue);
        detailsContainer.appendChild(datePublishedLabel);
        detailsContainer.appendChild(datePublishedValue);

        const lowerContainer = document.createElement('div');
        lowerContainer.classList.add('details-lower-container');

        lowerContainer.appendChild(imgContainer);
        lowerContainer.appendChild(detailsContainer);

        bookElem.appendChild(banner);
        bookElem.appendChild(lowerContainer)
        targetDiv.appendChild(bookElem);
    }
}

export class Movie {
    
}