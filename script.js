const myLibrary = [];

function Book(name, author, Pages, HaveRead) {
  this.name = name;
  this.author = author;
  this.Pages = Pages;
  this.HaveRead = HaveRead;
//   this.info = function () {
//     let about = `The ${this.name} written by ${this.author} has ${this.Pages} pages`;
//     return about;
//   }
}

function addBookToLibrary(name, author, Pages, HaveRead) {
  let newBook = new Book(name, author, Pages, HaveRead);
  myLibrary.push(newBook);
}


function displayTable() {
    const mainContainer = document.querySelector('.form-container')
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const keys = Object.keys(new Book());

    mainContainer.innerHTML = '';

    // Loop through the keys and add table heads
    keys.forEach(key => {
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(key));
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Loop through the book contents add add to table
   
    myLibrary.forEach(book => {
        const row = document.createElement('tr');
        keys.forEach(key => {
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(book[key]));
            row.appendChild(td);
        });
        table.appendChild(row);
    });

    mainContainer.appendChild(table);
}




const showButton= document.querySelector('.showDialog');
const dialog = document.querySelector('#new-book'); // dialog element
const confirmBtn = document.querySelector('#confirmBtn');
const outputBox = document.querySelector('output');
const cancelButton = document.querySelector('#cancel');

showButton.addEventListener("click", () => {
    dialog.showModal();
});

cancelButton.addEventListener("click", () => {
    dialog.close();
})


confirmBtn.addEventListener("click", (event) =>{
    
    let bookName = document.querySelector('#booktitle');
    let bookAuthor = document.querySelector('#bookauthor');
    let bookPages = document.querySelector('#bookpage');
    let bookStatus = document.querySelector('#bookstatus');

    event.preventDefault();

    let name = bookName.value;
    let author = bookAuthor.value;
    let Pages = parseInt(bookPages.value);
    let status = bookStatus.value;

    addBookToLibrary(name, author, Pages, status);
    document.querySelector(".book-form").reset();
    dialog.close();
    displayTable();
});

