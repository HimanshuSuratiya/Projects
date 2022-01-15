console.log("Project-1: Keep Notes App");
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle")
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }

  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  showNotes();
});

function showNotes() {
  let notesElem = document.getElementById("notes");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += ` <div class="notecard card my-2 mx-2" style="width: 18rem;">
                    <div class="card-body">
                     <h5 class="card-title">${element.title}</h5>
                        <p class="card-text"> ${element.text}</p>
                        <button id = "${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
              </div>`;
  });
  if (notesObj.length != 0) {
    notesElem.innerHTML = html;
  } else {
    notesElem.innerHTML = `Nothing to Show! Use "Add a Note" Section Above to add Notes.`;
  }
}

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  console.log("event fired");
  let inputval = search.value.toLowerCase();
  let noteCards = document.getElementsByClassName("notecard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputval)) {
      element.style.display = "block";
    } else {
      element.style.display = "none ";
    }
  });
});
