let books = [];

function addBook(){
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = document.getElementById('pagesNumber').value;
    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill all fields correctly.')
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deletebook(${index})">Delete</button>`
        );
        document.getElementById('books').innerHTML = booksDiv.join('');
        const bookId = books.length; //ver q pedo tuve una idea pero hay q desarrollarla
    }

function editbook(index) {
    console.log('1');
    const book = book[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1);
    showbooks();
    console.log('2'); //ver  pedo, no llega al final
}

function clearInputs() {
    document.getElementById('bookName').value ='';
    document.getElementById('authorName').value ='';
    document.getElementById('bookDescription').value ='';
    document.getElementById('pagesNumber').value ='';
}

function deletebook(index) {
    console.log('3');
    const book = book[index];
    book.pop;
    showbooks();
    console.log('4'); //ver q pedo, no llega al final
}