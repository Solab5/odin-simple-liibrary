// const myLibrary = [];
const myLibrary = [
    {
      "name": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "Pages": 180,
      "HaveRead": "yes"
    },
    {
      "name": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "Pages": 281,
      "HaveRead": "no"
    }
  ];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
  let name = prompt("Please enter Name of the new book?");
  let author = prompt("Who is the author of the book?");
  let bookPages = parseInt(prompt("How many pages does the book have?"));
  let status = prompt("Has the book been read?");
  let newBook = {
    "name" : name,
    "author": author,
    "Pages": bookPages,
    "HaveRead": status
  }
  myLibrary.push(newBook);
}


function displayTable() {
    const mainContainer = document.querySelector('.form-container')
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    
    // Loop through the keys and add table heads
    Object.keys(myLibrary[0]).forEach(key => {
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(key));
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Loop through the book contents add add to table
    myLibrary.forEach(book => {
        const row = document.createElement('tr');
        Object.values(book).forEach(value => {
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(value));
            row.appendChild(td);
        })
        table.appendChild(row);
    })

    mainContainer.appendChild(table);
}

displayTable();


const showButton= document.querySelector('.showDialog');
const newBook = document.querySelector('#new-book') // dialog element
const confirmBtn = document.querySelector('#confirmBtn')
const outputBox = document.querySelector('output')

showButton.addEventListener("click", () => {
    newBook.showModal();
});

newBook.addEventListener("close", (e) => {
    outputBox.value =  newBook.returnValue === "default" 
        ? "No return Value. " 
        : `ReturnValue: ${favDialog.returnValue}.`;
})