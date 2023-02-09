const bookContainer = document.querySelector('.books-container');
const addButton = document.querySelector('.add-button');
const deleteButtons = document.querySelectorAll('.delete');
var myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function startListeners(){
//listener for click the "Add Book" button
addButton.addEventListener('click', (e) => {
    e.preventDefault();
    let newTitle = document.getElementById('title');
    let newAuthor = document.getElementById('author');
    let newPages = document.getElementById('total pages');
    let newRead = document.getElementById('checkbox');
    
    if(newTitle.value === ''){
        alert("Please enter a Book title");
        e.preventDefault();
    }else if(newAuthor.value === '' ){
        alert("Please enter an Author for the book");
        e.preventDefault();
    }else if(newPages.value === ''){
        alert("Please enter the number of pages for the book");
        e.preventDefault();
    }else{ 
        let newBook = new Book(newTitle.value, newAuthor.value, newPages.value, newRead.checked);
        addBookToLibrary(newBook);
        clearLibrary();
        displayBooks();
        clearForm();
    }
});
//listener for click events on the "X" button of the cards
document.addEventListener('click', (event) => {deleteBook(event)});
//listener for click events on the change status button next to Read status on the cards
document.addEventListener('click', (event) => {changeReadStatus(event)});

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
        //add change status icon
        const changeStatusIcon = document.createElement('i');
        changeStatusIcon.classList.add('read-change','fa-solid','fa-arrow-right-arrow-left');
        pRead.appendChild(changeStatusIcon);
    }
}
function clearLibrary(){
    bookContainer.textContent = '';
}

function deleteBook(event){
    if (event.target.className === 'delete fa-solid fa-x'){
        const index = event.target.parentNode.getAttribute('data-index');
        console.log(`${index}`);
        myLibrary.splice(index, 1);
        clearLibrary();
        displayBooks();
    }
}

function changeReadStatus(event){
    if (event.target.className === 'read-change fa-solid fa-arrow-right-arrow-left'){
        //when just using .parentNode, i was coming back null because the parent was the P element and not the div above, had to use .closest to get the index
        const i = event.target.parentNode.closest('div').getAttribute('data-index');
        console.log(`${i}`);
        if(myLibrary[i].read === true){
            myLibrary[i].read = false;
        }else{
            myLibrary[i].read = true; 
        }
        clearLibrary();
        displayBooks();
    }
}

function clearForm(){
    const addBookForm = document.querySelector('.add-form');
    addBookForm.reset();
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
/* addBookToLibrary(myBook3);
addBookToLibrary(myBook4);
addBookToLibrary(myBook5);
addBookToLibrary(myBook6); */
/* addBookToLibrary(myBook7);
addBookToLibrary(myBook);
addBookToLibrary(myBook2);
addBookToLibrary(myBook3);
addBookToLibrary(myBook4);
addBookToLibrary(myBook5);
addBookToLibrary(myBook6);
addBookToLibrary(myBook7);
addBookToLibrary(myBook); */

/* window.onload = () => { */
displayBooks(); 
startListeners()
//;}