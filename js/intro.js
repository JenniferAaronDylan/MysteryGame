'use strict';

let introText = 'The Story: In the heart of the roaring 20s, a group of diverse individuals finds themselves on a late-night journey on the luxurious transatlantic Zeppelin, The Sky Empress. As they soar over the Atlantic, the renowned millionaire and art collector, Leonard Van Dyke, is found dead in his private cabin, a priceless painting missing. Among the passengers, the retired detective Frederick Blythe takes it upon himself to investigate. Suspects include a disgruntled artist, a wealthy heiress, a mysterious foreign diplomat, Van Dyke\'s estranged son, and the zeppelin\'s enigmatic captain. One by one, Blythe interviews each suspect and discovers each had a reason to wish Van Dyke harm. As the plot thickens, Blythe finds a cryptic note in Van Dyke\'s cabin reading, “Art is an illusion. So am I.”';

const typer = document.getElementById('intro');
let index = 0;
let delay = 10;


function type() {
  if (index < introText.length) {
    typer.textContent += introText.charAt(index);
    index ++;
    setTimeout(type, delay);
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
    this.reset();
  });
}

initializeForm();
