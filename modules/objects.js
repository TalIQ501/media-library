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
    constructor(name, producer, language, image, genre, dateAdded, datePublished) {
        this.name = name;
        this.producer = producer;
        this.language = language
        this.image = image;
        this.genre = genre;
        this["date_added"] = dateAdded;
        this["date_published"] = datePublished;
    }

    createMovieElem = (targetDiv) => {
        const movieElem = document.createElement('a');
        movieElem.setAttribute('id', this.name);
        movieElem.classList.add('grid-object');
        
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
    
        const img = document.createElement('img');
        img.src = this.image;
    
        const bottomBar = document.createElement('div');
        bottomBar.classList.add('bottom-bar');
    
        const dataBar = document.createElement('div');
        dataBar.classList.add('data-bar');
    
        const movieNameDisp = document.createElement('div');
        movieNameDisp.classList.add('movie-name-display');
        movieNameDisp.textContent = this.name;
    
        const movieAuthorDisp = document.createElement('div');
        movieAuthorDisp.classList.add('movie-author-display');
        movieAuthorDisp.textContent = this.author;
    
        imgContainer.appendChild(img)
        movieElem.appendChild(imgContainer);
        movieElem.appendChild(bottomBar);
        bottomBar.appendChild(dataBar);
        dataBar.appendChild(movieNameDisp);
        dataBar.appendChild(movieAuthorDisp);
    
        targetDiv.appendChild(movieElem);

        movieElem.href = `/pages/movies/${this.name}.html`
    };

    createMoviePage = (targetDiv) => {
        const movieElem = document.createElement('div');;
        movieElem.setAttribute('id', 'movie-details')
        movieElem.classList.add('movie-details-container');

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
        dateAddedLabel.setAttribute('id', 'movie-date-added-label');
        dateAddedLabel.classList.add('detail-label');
        dateAddedLabel.textContent = 'Date Added';

        const dateAddedValue = document.createElement('div');
        dateAddedValue.setAttribute('id', 'movie-date-added-value');
        dateAddedValue.classList.add('detail-value');
        if (this["date_added"]) {
            dateAddedValue.textContent = this['date_added'].toDateString();
        } else {
            dateAddedValue.textContent = 'Not given';
        }

        const datePublishedLabel = document.createElement('div');
        datePublishedLabel.setAttribute('id', 'movie-date-published-label');
        datePublishedLabel.classList.add('detail-label');
        datePublishedLabel.textContent = 'Date Published';

        const datePublishedValue = document.createElement('div');
        datePublishedValue.setAttribute('id', 'movie-date-published-value');
        datePublishedValue.classList.add('detail-value');
        if (this["date_published"]) {
            datePublishedValue.textContent = this["date_published"].toDateString(); 
        } else {
            datePublishedValue.textContent = 'Not given';
        }

        const producerLabel = document.createElement('div');
        producerLabel.setAttribute('id', 'movie-date-added-label');
        producerLabel.classList.add('detail-label');
        producerLabel.textContent = 'Author';

        const producerValue = document.createElement('div');
        producerValue.setAttribute('id', 'movie-date-added-value');
        producerValue.classList.add('detail-value');
        producerValue.textContent = this.producer;

        const languageLabel = document.createElement('div');
        languageLabel.setAttribute('id', 'movie-date-added-label');
        languageLabel.classList.add('detail-label');
        languageLabel.textContent = 'Language';

        const languageValue = document.createElement('div');
        languageValue.setAttribute('id', 'movie-date-added-value');
        languageValue.classList.add('detail-value');
        languageValue.textContent = this.language;

        const genreLabel = document.createElement('div');
        genreLabel.setAttribute('id', 'movie-date-added-label');
        genreLabel.classList.add('detail-label');
        genreLabel.textContent = 'Genre';

        const genreValue = document.createElement('div');
        genreValue.setAttribute('id', 'movie-date-added-value');
        genreValue.classList.add('detail-value');
        genreValue.textContent = this.genre;

        detailsContainer.appendChild(dateAddedLabel);
        detailsContainer.appendChild(dateAddedValue);
        detailsContainer.appendChild(languageLabel);
        detailsContainer.appendChild(languageValue);
        detailsContainer.appendChild(genreLabel);
        detailsContainer.appendChild(genreValue);
        detailsContainer.appendChild(producerLabel);
        detailsContainer.appendChild(producerValue);
        detailsContainer.appendChild(datePublishedLabel);
        detailsContainer.appendChild(datePublishedValue);

        const lowerContainer = document.createElement('div');
        lowerContainer.classList.add('details-lower-container');

        lowerContainer.appendChild(imgContainer);
        lowerContainer.appendChild(detailsContainer);

        movieElem.appendChild(banner);
        movieElem.appendChild(lowerContainer)
        targetDiv.appendChild(movieElem);
    }
}

export class Game {
    constructor(name, publisher, language, image, genre, dateAdded, datePublished) {
        this.name = name;
        this.publisher = publisher;
        this.language = language
        this.image = image;
        this.genre = genre;
        this["date_added"] = dateAdded;
        this["date_published"] = datePublished;
    }

    createGameElem = (targetDiv) => {
        const gameElem = document.createElement('a');
        gameElem.setAttribute('id', this.name);
        gameElem.classList.add('grid-object');
        
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
    
        const img = document.createElement('img');
        img.src = this.image;
    
        const bottomBar = document.createElement('div');
        bottomBar.classList.add('bottom-bar');
    
        const dataBar = document.createElement('div');
        dataBar.classList.add('data-bar');
    
        const gameNameDisp = document.createElement('div');
        gameNameDisp.classList.add('game-name-display');
        gameNameDisp.textContent = this.name;
    
        const gameAuthorDisp = document.createElement('div');
        gameAuthorDisp.classList.add('game-author-display');
        gameAuthorDisp.textContent = this.author;
    
        imgContainer.appendChild(img)
        gameElem.appendChild(imgContainer);
        gameElem.appendChild(bottomBar);
        bottomBar.appendChild(dataBar);
        dataBar.appendChild(gameNameDisp);
        dataBar.appendChild(gameAuthorDisp);
    
        targetDiv.appendChild(gameElem);

        gameElem.href = `/pages/games/${this.name}.html`
    };

    createGamePage = (targetDiv) => {
        const gameElem = document.createElement('div');;
        gameElem.setAttribute('id', 'game-details')
        gameElem.classList.add('game-details-container');

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
        dateAddedLabel.setAttribute('id', 'game-date-added-label');
        dateAddedLabel.classList.add('detail-label');
        dateAddedLabel.textContent = 'Date Added';

        const dateAddedValue = document.createElement('div');
        dateAddedValue.setAttribute('id', 'game-date-added-value');
        dateAddedValue.classList.add('detail-value');
        if (this["date_added"]) {
            dateAddedValue.textContent = this['date_added'].toDateString();
        } else {
            dateAddedValue.textContent = 'Not given';
        }

        const datePublishedLabel = document.createElement('div');
        datePublishedLabel.setAttribute('id', 'game-date-published-label');
        datePublishedLabel.classList.add('detail-label');
        datePublishedLabel.textContent = 'Date Published';

        const datePublishedValue = document.createElement('div');
        datePublishedValue.setAttribute('id', 'game-date-published-value');
        datePublishedValue.classList.add('detail-value');
        if (this["date_published"]) {
            datePublishedValue.textContent = this["date_published"].toDateString(); 
        } else {
            datePublishedValue.textContent = 'Not given';
        }

        const publisherLabel = document.createElement('div');
        publisherLabel.setAttribute('id', 'game-date-added-label');
        publisherLabel.classList.add('detail-label');
        publisherLabel.textContent = 'Author';

        const publisherValue = document.createElement('div');
        publisherValue.setAttribute('id', 'game-date-added-value');
        publisherValue.classList.add('detail-value');
        publisherValue.textContent = this.publisher;

        const languageLabel = document.createElement('div');
        languageLabel.setAttribute('id', 'game-date-added-label');
        languageLabel.classList.add('detail-label');
        languageLabel.textContent = 'Language';

        const languageValue = document.createElement('div');
        languageValue.setAttribute('id', 'game-date-added-value');
        languageValue.classList.add('detail-value');
        languageValue.textContent = this.language;

        const genreLabel = document.createElement('div');
        genreLabel.setAttribute('id', 'game-date-added-label');
        genreLabel.classList.add('detail-label');
        genreLabel.textContent = 'Genre';

        const genreValue = document.createElement('div');
        genreValue.setAttribute('id', 'game-date-added-value');
        genreValue.classList.add('detail-value');
        genreValue.textContent = this.genre;

        detailsContainer.appendChild(dateAddedLabel);
        detailsContainer.appendChild(dateAddedValue);
        detailsContainer.appendChild(languageLabel);
        detailsContainer.appendChild(languageValue);
        detailsContainer.appendChild(genreLabel);
        detailsContainer.appendChild(genreValue);
        detailsContainer.appendChild(publisherLabel);
        detailsContainer.appendChild(publisherValue);
        detailsContainer.appendChild(datePublishedLabel);
        detailsContainer.appendChild(datePublishedValue);

        const lowerContainer = document.createElement('div');
        lowerContainer.classList.add('details-lower-container');

        lowerContainer.appendChild(imgContainer);
        lowerContainer.appendChild(detailsContainer);

        gameElem.appendChild(banner);
        gameElem.appendChild(lowerContainer)
        targetDiv.appendChild(gameElem);
    }
}

export class Music {
    constructor(name, artist, language, image, genre, dateAdded, datePublished) {
        this.name = name;
        this.artist = artist;
        this.language = language
        this.image = image;
        this.genre = genre;
        this["date_added"] = dateAdded;
        this["date_published"] = datePublished;
    }

    createMusicElem = (targetDiv) => {
        const musicElem = document.createElement('a');
        musicElem.setAttribute('id', this.name);
        musicElem.classList.add('grid-object');
        
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
    
        const img = document.createElement('img');
        img.src = this.image;
    
        const bottomBar = document.createElement('div');
        bottomBar.classList.add('bottom-bar');
    
        const dataBar = document.createElement('div');
        dataBar.classList.add('data-bar');
    
        const musicNameDisp = document.createElement('div');
        musicNameDisp.classList.add('music-name-display');
        musicNameDisp.textContent = this.name;
    
        const musicAuthorDisp = document.createElement('div');
        musicAuthorDisp.classList.add('music-author-display');
        musicAuthorDisp.textContent = this.author;
    
        imgContainer.appendChild(img)
        musicElem.appendChild(imgContainer);
        musicElem.appendChild(bottomBar);
        bottomBar.appendChild(dataBar);
        dataBar.appendChild(musicNameDisp);
        dataBar.appendChild(musicAuthorDisp);
    
        targetDiv.appendChild(musicElem);

        musicElem.href = `/pages/music/${this.name}.html`
    };

    createMusicPage = (targetDiv) => {
        const musicElem = document.createElement('div');;
        musicElem.setAttribute('id', 'music-details')
        musicElem.classList.add('music-details-container');

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
        dateAddedLabel.setAttribute('id', 'music-date-added-label');
        dateAddedLabel.classList.add('detail-label');
        dateAddedLabel.textContent = 'Date Added';

        const dateAddedValue = document.createElement('div');
        dateAddedValue.setAttribute('id', 'music-date-added-value');
        dateAddedValue.classList.add('detail-value');
        if (this["date_added"]) {
            dateAddedValue.textContent = this['date_added'].toDateString();
        } else {
            dateAddedValue.textContent = 'Not given';
        }

        const datePublishedLabel = document.createElement('div');
        datePublishedLabel.setAttribute('id', 'music-date-published-label');
        datePublishedLabel.classList.add('detail-label');
        datePublishedLabel.textContent = 'Date Published';

        const datePublishedValue = document.createElement('div');
        datePublishedValue.setAttribute('id', 'music-date-published-value');
        datePublishedValue.classList.add('detail-value');
        if (this["date_published"]) {
            datePublishedValue.textContent = this["date_published"].toDateString(); 
        } else {
            datePublishedValue.textContent = 'Not given';
        }

        const artistLabel = document.createElement('div');
        artistLabel.setAttribute('id', 'music-date-added-label');
        artistLabel.classList.add('detail-label');
        artistLabel.textContent = 'Author';

        const artistValue = document.createElement('div');
        artistValue.setAttribute('id', 'music-date-added-value');
        artistValue.classList.add('detail-value');
        artistValue.textContent = this.artist;

        const languageLabel = document.createElement('div');
        languageLabel.setAttribute('id', 'music-date-added-label');
        languageLabel.classList.add('detail-label');
        languageLabel.textContent = 'Language';

        const languageValue = document.createElement('div');
        languageValue.setAttribute('id', 'music-date-added-value');
        languageValue.classList.add('detail-value');
        languageValue.textContent = this.language;

        const genreLabel = document.createElement('div');
        genreLabel.setAttribute('id', 'music-date-added-label');
        genreLabel.classList.add('detail-label');
        genreLabel.textContent = 'Genre';

        const genreValue = document.createElement('div');
        genreValue.setAttribute('id', 'music-date-added-value');
        genreValue.classList.add('detail-value');
        genreValue.textContent = this.genre;

        detailsContainer.appendChild(dateAddedLabel);
        detailsContainer.appendChild(dateAddedValue);
        detailsContainer.appendChild(languageLabel);
        detailsContainer.appendChild(languageValue);
        detailsContainer.appendChild(genreLabel);
        detailsContainer.appendChild(genreValue);
        detailsContainer.appendChild(artistLabel);
        detailsContainer.appendChild(artistValue);
        detailsContainer.appendChild(datePublishedLabel);
        detailsContainer.appendChild(datePublishedValue);

        const lowerContainer = document.createElement('div');
        lowerContainer.classList.add('details-lower-container');

        lowerContainer.appendChild(imgContainer);
        lowerContainer.appendChild(detailsContainer);

        musicElem.appendChild(banner);
        musicElem.appendChild(lowerContainer)
        targetDiv.appendChild(musicElem);
    }
}