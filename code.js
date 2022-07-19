class Book {
    constructor(idTitle, idAuthor, idPages) {
        this.idTitle = idTitle;
        this.idAuthor = idAuthor;
        this.idPages = idPages;
        this.clearForm();
    }

    clearForm() { 
        this.idTitle.value = '';
        this.idAuthor.value = '';
        this.idPages.value = '';

    }
}

const addNewBook = document.querySelector('[data-addButton]');

const idTitle = document.querySelector('#title');
const idAuthor = document.querySelector('#author')
const idPages = document.querySelector('#pages')

const newBook = new Book(title, author, pages)
console.log(newBook)

addNewBook.addEventListener('click', button => { 
    console.log(idTitle.value)
    
  })