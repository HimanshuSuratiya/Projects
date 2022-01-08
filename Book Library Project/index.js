showBook();

let addBook = document.getElementById("addBook");
addBook.addEventListener("click", function () {
  let bookName = document.getElementById("bookName");
  let bookAuthor = document.getElementById("author");
  let bookType = checked();
  let book = localStorage.getItem("books");
  if (book == null) {
    bookAry = [];
  } else {
    bookAry = JSON.parse(book);
  }
  let myobj = {
    bookName: bookName.value,
    bookAuthor: bookAuthor.value,
    bookType: bookType,
  };

  bookAry.push(myobj);
  localStorage.setItem("books", JSON.stringify(bookAry));
  bookName.value = "";
  bookAuthor.value = "";
  showBook();
});

function checked() {
  let Programming = document.getElementById("Programming");
  let Designing = document.getElementById("Designing");
  let Github = document.getElementById("Github");

  if (Programming.checked) {
    return Programming.value;
  } else if (Designing.checked) {
    return Designing.value;
  } else if (Github.checked) {
    return Github.value;
  }
}

function showBook() {
  let table = document.getElementById("table");
  let test = document.getElementById("test");
  let book = localStorage.getItem("books");
  if (book == null) {
    bookAry = [];
  } else {
    bookAry = JSON.parse(book);
  }
  let html = "";
  bookAry.forEach(function (element, index) {
    html += `<tr>
              <th scope="row">${index + 1}</th>
              <td id="bookn"> ${element.bookName}</td>
              <td>${element.bookAuthor}</td>
              <td>${element.bookType}</td>
              <td><button id = "${index}" onclick = "deleteNote(this.id)" type="button" class="btn btn-sm btn-outline-secondary">Remove Book</button></td>
             </tr>`;
  });
  if (bookAry.length != 0) {
    table.innerHTML = html;
  }
  if (bookAry.length == 0) {
    test.innerText = `Nothing to Show Book List! Use "Add a Book" Section Above to add Books.`;
  } else {
    test.innerText = "";
  }
}

function deleteNote(index) {
  if (bookAry.length == 1) {
    location.reload();
  }
  let book = localStorage.getItem("books");
  if (book == null) {
    bookAry = [];
  } else {
    bookAry = JSON.parse(book);
  }
  bookAry.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(bookAry));
  showBook();
}
