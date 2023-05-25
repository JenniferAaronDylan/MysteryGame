'use strict';

let introText = 'The Story So Far: In the heart of the roaring 20s, a group of diverse individuals finds themselves on a late-night journey on the luxurious transatlantic zeppelin, The Sky Empress on her maiden voyage. As she soars over, and miles above the Atlantic the beloved adventurer, Leonard Van Dyke, is found dead in his private cabin, and a priceless painting missing. Among the passengers the renowned detective Frederick Blythe and his enigmatic assistant Riley Fitzgerald takes it upon themselves to investigate. Suspects include a disgruntled artist, a wealthy heiress, a foreign diplomat, Van Dyke\'s estranged son, and the zeppelin\'s stalwart captain. One by one, Blythe interviews each suspect and discovers each had a reason to wish Van Dyke harm. But will Blythe and Fitzgerald unravel this mystery, or will the truth forever remain... among the clouds?”';

const typer = document.getElementById('intro');
let index = 0;
let delay = 30;

function getRandom() {
  return Math.floor(Math.random() * 50) + 1;
}

function type() {
  if (index < introText.length) {
    typer.textContent += introText.charAt(index);
    index ++;
    setTimeout(type, delay);
    delay = getRandom();
  }
}

type();

function User(userName){
  this.userName = userName;
  this.Clara = false;
  this.Marguerite = false;
  this.Alexander = false;
  this.Jonathan = false;
  this.Wallace = false;
  this.Leonard = false;
  this.claraEvidence = false;
  this.claraAlibi = false;
  this.margueriteEvidence = false;
  this.margueriteAlibi = false;
  this.alexanderEvidence = false;
  this.alexanderAlibi = false;
  this.jonathanEvidence = false;
  this.jonathanAlibi = false;
  this.wallaceEvidence = false;
  this.wallaceAlibi = false;
  this.leonardEvidence = false;
  this.leonardAlibi = false;
}

User.prototype.updateLocalStorage = function() {

  let stringifiedUser = JSON.stringify(this);
  localStorage.setItem('currentUser', stringifiedUser);

};

function getUser() {
  let retrievedUser = localStorage.getItem('currentUser');
  let parsedUser = JSON.parse(retrievedUser);
  return parsedUser;

}

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

  // localStorage.setItem("playerUserName", userName);
  let newUser = new User(userName);
  let prevUser = getUser();
  if (prevUser){
    if (prevUser.userName !== newUser.userName){
      newUser.updateLocalStorage();
    }
  } else {
    newUser.updateLocalStorage();
  }
}

function initializeForm() {
  let nameForm = document.getElementById("nameForm");
  nameForm.addEventListener("submit", function(event) {
    event.preventDefault();
    userNameInput();
  });
}

initializeForm();

