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
    const bookList = document.getElementById("book-list");
    bookList.innerText = ""; // clear the current list
  
    myLibrary.forEach((book, index) => {
      const li = document.createElement("li");
      const title = document.createElement("h3");
      const author = document.createElement("p");
      const pages = document.createElement("p");
      const read = document.createElement("button");
      const remove = document.createElement("button");
  
      // set the text content of the elements
      title.textContent = book.title;
      author.textContent = book.author;
      pages.textContent = book.pages;
      read.textContent = book.read ? "Read" : "Not read";
      remove.textContent = "Remove";
  
      // add event listeners to the buttons
      read.addEventListener("click", () => {
        toggleRead(index);
        updateList();
      });
      remove.addEventListener("click", () => {
        removeBook(index);
        updateList();
      });
  
      // append the elements to the li element
      li.appendChild(title);
      li.appendChild(author);
      li.appendChild(pages);
      li.appendChild(read);
      li.appendChild(remove);
  
      // append the li element to the ul element
      bookList.appendChild(li);
    });
  }

let berserk = new Book("Berserk", "Kentaro Miura", "~700", "yes");

let naruto = new Book("Naruto", "Masashi Kishimoto", "192", "no")

addBookToLibrary(berserk);
addBookToLibrary(naruto);

updateList();