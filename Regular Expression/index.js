console.log("Project-4");
let Name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let validName = false;
let validemail = false;
let validphone = false;

Name.addEventListener('blur', () => {
  let regular = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
  let string = Name.value;
  if (regular.test(string)) {
    console.log("Your name is valid");
    Name.classList.remove("is-invalid");
    validName = true;
  } else {
    console.log("Your name is not valid");
    Name.classList.add("is-invalid");
    validName = false;
  }
});

email.addEventListener("blur", () => {
  let regular = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let string = email.value;
  if (regular.test(string)) {
    console.log("Your email is valid");
    email.classList.remove("is-invalid");
    validemail = true;
  } else {
    console.log("Your email is not valid");
    email.classList.add("is-invalid");
    validemail = false;
  }
});

phone.addEventListener("blur", () => {
  let regular = /^[91]{2}([0-9]{10}$)/;
  let string = phone.value;
  if (regular.test(string)) {
    console.log("Your phone is valid");
    phone.classList.remove("is-invalid");
    validphone = true;
  } else {
    console.log("Your phone is not valid");
    phone.classList.add("is-invalid");
    validphone = false;
  }
});