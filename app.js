let myLibrary = [];

const container = document.getElementsByClassName("container");

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function updateList() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement("div");
        bookElement.className = "book";
        bookElement.innerText = 
        `<h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read}</p>`;
        container[0].appendChild(bookElement);
    }
}

let berserk = new Book("Berserk", "Kentaro Miura", "~700", "yes");

let naruto = new Book("Naruto", "Masashi Kishimoto", "192", "no")

addBookToLibrary(berserk);
addBookToLibrary(naruto);

updateList();