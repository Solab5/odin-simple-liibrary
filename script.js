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
    // Add header for remove button column
    headerRow.innerHTML += '<th>Remove</th>';
    table.appendChild(headerRow);

    // Loop through the book contents and add rows to the table
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const row = document.createElement('tr');
        keys.forEach(key => {
            const td = document.createElement('td');
            td.textContent = book[key];
            row.appendChild(td);
        });

        // Create remove button for each book
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        
        // Set custom attribute 'index' to store the book index
        removeButton.setAttribute('index', i);
        
        // Attach event listener to capture the book index
        removeButton.addEventListener('click', (e) => {
            let ind = e.target.getAttribute('index');
            removeBook(ind);
            displayTable(); // Update the table after removing the book
        });

        // Create cell for the remove button
        const removeCell = document.createElement('td');
        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);

        // Append row to the table
        table.appendChild(row);
    }

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

