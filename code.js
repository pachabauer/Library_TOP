const dataForm = document.querySelector("[data-form]");
const dataImg1 = document.querySelector("[data-img1]");
const dataRead = document.querySelector("[data-readButton]");
const dataImg2 = document.querySelector("[data-img2]");
const dataCheck = document.querySelector("[data-check]");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector(".checkbox");
const bookInfo = document.querySelectorAll(".books");

dataForm.style.visibility = "hidden";
dataImg1.style.visibility = "hidden";
dataRead.style.visibility = "hidden";
dataImg2.style.visibility = "hidden";
dataCheck.style.visibility = "hidden";

const addNewBook = document.querySelector("[data-addButton]");
addNewBook.addEventListener("click", () => {
  newBook.clearForm();
  dataCheck.style.visibility = "hidden";
  dataForm.style.visibility = "visible";
  dataImg1.style.visibility = "visible";
});

const firstOk = document.querySelector("[data-img1]");
firstOk.addEventListener("click", () => {
  dataRead.style.visibility = "visible";
  dataImg2.style.visibility = "visible";
});

const secondOk = document.querySelector("[data-img2]");
secondOk.addEventListener("click", () => {
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    read.checked
  );
  console.log(newBook);
  addToLibrary(newBook);
  showLibrary();

  dataCheck.style.visibility = "visible";
  dataForm.style.visibility = "hidden";
  dataImg1.style.visibility = "hidden";
  dataRead.style.visibility = "hidden";
  dataImg2.style.visibility = "hidden";
});

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    Book.prototype.info = function () {
      console.log(this.title, this.author, this.pages, this.read);
    };
  }

  clearForm() {
    this.title.value = "";
    this.author.value = "";
    this.pages.value = "";
    this.read = false;
  }
}

let myLibrary = [];

function addToLibrary(book) {
  myLibrary.push(book);
}

function showLibrary() {
  let books = document.createElement("div");
  books.className = "books";
  books.textContent = myLibrary[myLibrary.length - 1].title;
  document.querySelector(".library").appendChild(books);
}

const newBook = new Book(title, author, pages, read);
