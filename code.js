// selectors declare's
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

// initial visibility setting
dataForm.style.visibility = "hidden";
dataImg1.style.visibility = "hidden";
dataRead.style.visibility = "hidden";
dataImg2.style.visibility = "hidden";
dataCheck.style.visibility = "hidden";

//add new book button
const addNewBook = document.querySelector("[data-addButton]");
addNewBook.addEventListener("click", () => {
  newBook.clearForm();
  dataCheck.style.visibility = "hidden";
  dataForm.style.visibility = "visible";
  dataImg1.style.visibility = "visible";
});

// first green button image
const firstOk = document.querySelector("[data-img1]");
firstOk.addEventListener("click", () => {
  dataRead.style.visibility = "visible";
  dataImg2.style.visibility = "visible";
});

// second green button image
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
  console.log(myLibrary);

  dataCheck.style.visibility = "visible";
  dataForm.style.visibility = "hidden";
  dataImg1.style.visibility = "hidden";
  dataRead.style.visibility = "hidden";
  dataImg2.style.visibility = "hidden";
});

// class and constructor
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

// functions declaration
function addToLibrary(book) {
  myLibrary.push(book);
}

function removeFromLibrary(id){ 
  myLibrary.splice(id,1);
  
}

function showLibrary() {
  let books = document.createElement("ul");
  const showTitle = document.createElement('li');
  const showAuthor = document.createElement('li');
  const showPages = document.createElement('li');
  const showRead = document.createElement('li');
  const removeBook = document.createElement('div')

  showTitle.textContent = `Title: ${myLibrary[myLibrary.length - 1].title}`
  showAuthor.textContent = `Author: ${myLibrary[myLibrary.length - 1].author}`
  showPages.textContent = `Pages: ${myLibrary[myLibrary.length - 1].pages}`
  showRead.textContent = `Read: ${myLibrary[myLibrary.length - 1].read}`
  removeBook.dataset.delete = 'data-delete';
  removeBook.innerHTML = '<img src="images/icons8-remove-32.png" />';
  books.className = "books";
  books.id = myLibrary.length - 1;
  document.querySelector(".library").appendChild(books);
  books.append(showTitle, showAuthor, showPages, showRead, removeBook);

  const deleteButton = document.querySelectorAll('[data-delete]');
  deleteButton.forEach(button => {
  button.addEventListener('click', event => {
    let idRemove = event.target.parentNode.parentNode.id;
    console.log(idRemove)
    removeFromLibrary(idRemove);

    let menu = document.getElementById(idRemove);
    while (menu.firstChild) {
      menu.removeChild(menu.firstChild);
    }
    menu.remove();
  })
})
}

const newBook = new Book(title, author, pages, read);
