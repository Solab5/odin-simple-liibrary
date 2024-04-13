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

Book.prototype.toggleReadStatus = function() {
    this.HaveRead = this.HaveRead === "Yes" ? "No" : "Yes";
};

function addBookToLibrary(name, author, Pages, HaveRead) {
  let newBook = new Book(name, author, Pages, HaveRead);
  myLibrary.push(newBook);
}

function displayTable() {
    const mainContainer = document.querySelector('.form-container');
    const table = document.createElement('table');
    const keys = Object.keys(new Book());

    mainContainer.innerHTML = '';

    // Create header row
    const headerRow = document.createElement('tr');
    keys.forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });
    // Add headers for remove button and toggle read status button columns
    headerRow.innerHTML += '<th>Remove</th><th>Toggle Read Status</th>';
    table.appendChild(headerRow);

    // Loop through the book contents and add rows to the table
    myLibrary.forEach((book, index) => {
        const row = document.createElement('tr');
        keys.forEach(key => {
            const td = document.createElement('td');
            td.textContent = book[key];
            row.appendChild(td);
        });

        // Create remove button for each book
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('index', index);
        removeButton.addEventListener('click', (e) => {
            let ind = e.target.getAttribute('index');
            removeBook(ind);
            displayTable(); // Update the table after removing the book
        });
        const removeCell = document.createElement('td');
        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);

        // Create toggle read status button for each book
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Toggle Read Status';
        toggleButton.setAttribute('index', index);
        toggleButton.addEventListener('click', (e) => {
            let ind = e.target.getAttribute('index');
            myLibrary[ind].toggleReadStatus();
            displayTable(); // Update the table after toggling read status
        });
        const toggleCell = document.createElement('td');
        toggleCell.appendChild(toggleButton);
        row.appendChild(toggleCell);

        // Append row to the table
        table.appendChild(row);
    });

    mainContainer.appendChild(table);
}

// function that removes the book from the array
function removeBook(index) {
    myLibrary.splice(index, 1);
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

