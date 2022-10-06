const bookContainer = document.querySelector('.books-container');



let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooks(){
    for (let i=0; i < myLibrary.length; i+= 1){
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.setAttribute('data-index', i);
        bookContainer.append(cardDiv);
    }
}

const Twilight = new Book('Twilight', 'Stephenie Meyer', '498', false);
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const myBook = new Book('My Book', 'Me', 69, true);
const myBook2 = new Book('My 2nd Book', 'Me', 68, false);
const myBook3 = new Book('My 2nd Book', 'Me', 68, false);
addBookToLibrary(Twilight);
addBookToLibrary(theHobbit);
addBookToLibrary(myBook);
addBookToLibrary(myBook2);
addBookToLibrary(myBook3);
addBookToLibrary(theHobbit);
addBookToLibrary(myBook);
addBookToLibrary(myBook2);
addBookToLibrary(myBook3);

window.onload = () => {displayBooks();}