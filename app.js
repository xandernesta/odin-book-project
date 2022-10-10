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
        // creates card for book
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.setAttribute('data-index', i);
        bookContainer.append(cardDiv);
        //creates delete icon
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('delete','fa-solid', 'fa-x');
        cardDiv.appendChild(deleteIcon);
        //creates title, Author, pages, read
        const h2Title = document.createElement('h2');
        h2Title.textContent = myLibrary[i].title;
        cardDiv.appendChild(h2Title);
        //Author
        const pAuthor = document.createElement('p');
        pAuthor.textContent = `by ${myLibrary[i].author}`;
        cardDiv.appendChild(pAuthor);
        //pages
        const pPages = document.createElement('p'); //creates the P for the pages info
        pPages.classList.add('details'); //adds class to it
        cardDiv.appendChild(pPages); //adds the p element to the Card
        const spanLength = document.createElement('span'); //creates the span for the text element of "Length: ""
        spanLength.classList.add('bold'); //adds class bold so we can make Length: bold
        spanLength.textContent = 'Length: ';
        pPages.appendChild(spanLength); // adds the span to the P element on the card
        const textPages = document.createTextNode(`${myLibrary[i].pages} pages`)
        pPages.appendChild(textPages);
        //read status
        const pRead = document.createElement('p');
        pRead.classList.add('details');
        cardDiv.appendChild(pRead);
        const spanStatus = document.createElement('span');
        spanStatus.classList.add('bold');
        spanStatus.textContent = 'Status: ';
        pRead.appendChild(spanStatus);
        const spanStatusClass = document.createElement('span');
        const textStatus = document.createTextNode((myLibrary[i].read) ? 'Read' : 'Not Yet Read')
        spanStatusClass.classList.add((myLibrary[i].read) ? 'read' : 'not-read');
        spanStatusClass.appendChild(textStatus);
        pRead.appendChild(spanStatusClass);

    }
}

const Twilight = new Book('Twilight', 'Stephenie Meyer', '498', false);
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const myBook = new Book('My Book', 'Me', 69, true);
const myBook2 = new Book('My 2nd Book', 'Fedrick Finklestein', 68, false);
const myBook3 = new Book('My 2nd Book', 'Fedrick Finklestein', 68, false);
const myBook4 = new Book('My 2nd Book', 'Fedrick Finklestein', 68, false);
const myBook5 = new Book('My 2nd Book', 'Fedrick Finklestein', 68, false);
const myBook6 = new Book('My 2nd Book', 'Fedrick Finklestein', 68, false);
const myBook7 = new Book('My 2nd Book', 'Fedrick Finklestein', 68, false);
addBookToLibrary(Twilight);
addBookToLibrary(theHobbit);
addBookToLibrary(myBook);
addBookToLibrary(myBook2);
addBookToLibrary(myBook3);
addBookToLibrary(theHobbit);
addBookToLibrary(myBook);
addBookToLibrary(myBook2);
addBookToLibrary(myBook3);
addBookToLibrary(myBook4);
addBookToLibrary(myBook5);
addBookToLibrary(myBook6);
/* addBookToLibrary(myBook7);
addBookToLibrary(myBook);
addBookToLibrary(myBook2);
addBookToLibrary(myBook3);
addBookToLibrary(myBook4);
addBookToLibrary(myBook5);
addBookToLibrary(myBook6);
addBookToLibrary(myBook7);
addBookToLibrary(myBook); */

window.onload = () => {displayBooks();}