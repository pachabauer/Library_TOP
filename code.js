const dataForm = document.querySelector("[data-form]");
const dataImg1 = document.querySelector("[data-img1]");
const dataRead = document.querySelector("[data-readButton]");
const dataImg2 = document.querySelector("[data-img2]");
const dataCheck = document.querySelector("[data-check]");
const read = document.querySelector(".checkbox");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

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
  console.log(title.value);
  console.log(author.value);
  console.log(pages.value);
  dataRead.style.visibility = "visible";
  dataImg2.style.visibility = "visible";
});

const secondOk = document.querySelector("[data-img2]");
secondOk.addEventListener("click", () => {
  console.log(title.value);
  console.log(author.value);
  console.log(pages.value);
  console.log(read.checked);
  dataCheck.style.visibility = "visible";
  dataForm.style.visibility = "hidden";
  dataImg1.style.visibility = "hidden";
  dataRead.style.visibility = "hidden";
  dataImg2.style.visibility = "hidden";
});

class Book {
    constructor(idTitle, idAuthor, idPages, idRead) {
      this.idTitle = idTitle;
      this.idAuthor = idAuthor;
      this.idPages = idPages;
      this.idRead = idRead;
    }
  
    clearForm() {
      this.idTitle.value = "";
      this.idAuthor.value = "";
      this.idPages.value = "";
      this.idRead = false;
    }
  }
  
  const newBook = new Book(title, author, pages, read);
  console.log(newBook)