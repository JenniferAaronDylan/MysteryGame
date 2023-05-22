'use strict';

// let nameForm = document.getElementById('nameForm');
// let nameInput = document.getElementById("nameInput");


// function handleSubmit(event) {
//   event.preventDefault();
//   let nameInput = document.getElementID('nameInput');
//   let userName = nameInput.value;

//   localStorage.setItem("userName", );

// }


// nameForm.addEventListener('submit', handleSubmit);



function userNameInput() {
  let nameInput = document.getElementById("nameInput");
  let userName = nameInput.value;

  localStorage.setItem("playerUserName", userName);

}

function initializeForm() {
  let nameForm = document.getElementById("nameForm");
  nameForm.addEventListener("submit", function(event) {
    event.preventDefault();
    userNameInput();
  });
}

initializeForm();
