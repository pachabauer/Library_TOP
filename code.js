class Book {
    constructor(idTitle, idAuthor, idPages, idRead) {
        this.idTitle = idTitle;
        this.idAuthor = idAuthor;
        this.idPages = idPages;
        this.idRead = idRead;

    }

    clearForm() { 
        this.idTitle.value = '';
        this.idAuthor.value = '';
        this.idPages.value = '';
        this.idRead = false;

    }
}

const newBook = new Book(title, author, pages) //falta 1 elemento read ?

const addNewBook = document.querySelector('[data-addButton]');
addNewBook.addEventListener('click', () => { 
    newBook.clearForm();
  })

const idTitle = document.querySelector('#title');
const idAuthor = document.querySelector('#author')
const idPages = document.querySelector('#pages')

const firstOk = document.querySelector('[data-img1]');
firstOk.addEventListener('click', () => { 
    console.log(idTitle.value)
    console.log(idAuthor.value)
    console.log(idPages.value)

  })

const idRead = document.querySelector('.checkbox');
idRead.addEventListener('click', () => {
    console.log(idRead.checked);
} )

const secondOk = document.querySelector('[data-img2]');
secondOk.addEventListener('click', () => { 
    console.log(idTitle.value)
    console.log(idAuthor.value)
    console.log(idPages.value)
    console.log(idRead.checked)
    // hacer que aparezca la imagen de check verde ok 
    

  })
