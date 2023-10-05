'use strict';

// intro text reads out on intro page

let introText = 'The Story So Far: In the heart of the roaring 20s, a group of diverse individuals finds themselves on a late-night journey on the luxurious transatlantic zeppelin, The Sky Empress on her maiden voyage. As she soars over, and miles above the Atlantic the beloved adventurer, Leonard Van Dyke, is found dead in his private cabin, and a priceless painting missing. Among the passengers the renowned detective Frederick Blythe and his enigmatic assistant Riley Fitzgerald takes it upon themselves to investigate. Suspects include a disgruntled artist, a wealthy heiress, a foreign diplomat, Van Dyke\'s estranged son, and the zeppelin\'s stalwart captain. One by one, Blythe interviews each suspect and discovers each had a reason to wish Van Dyke harm. But will Blythe and Fitzgerald unravel this mystery, or will the truth forever remain... among the clouds?”';

//this function ‘type()’ is responsible for typing the ‘intro text”. It appends each character to the ‘textcontent’ of the ‘typer’ element in increment of the ‘index’, until it reaches the length of the ‘introtext’ string.

const typer = document.getElementById('intro');
let index = 0;
let delay = 20;

function type() {
  if (index < introText.length) {
    typer.textContent += introText.charAt(index);
    index ++;
    setTimeout(type, delay);
  }
}

// invoke the type function
type();

//constructor function for creating ‘User’ objects. It takes the ‘userName’ parameter and initializes various properties related to the user and their interactions in the story.

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

// Adds a method called ‘updateLocalStorage’ to the ‘User’ prototype. Converts the current user object to the JSON strings and then converts it the browser’s local storage with the key ‘current user;. Allows the user to keep his/her data if they reload the website.

User.prototype.updateLocalStorage = function() {

  let stringifiedUser = JSON.stringify(this);
  localStorage.setItem('currentUser', stringifiedUser);

};

//This function retrieves the user data from the local storage by using the key 'currentUser'. It parses the JSON string and returns the user object.

function getUser() {
  let retrievedUser = localStorage.getItem('currentUser');
  let parsedUser = JSON.parse(retrievedUser);
  return parsedUser;

}

////This function is called when the user submits a form with the ID "nameForm". It retrieves the user's name input with the ID "nameInput". It creates a new User object with the inputted name and checks if there is a previously stored in user object. If there is a previous user and the new user's name is different, it updates the local storage with the new user object. Otherwise, it stores the new user object in the local storage.

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

//This function is responsible for initializing the form with the ID "nameForm". It attaches an event listener to the form's "submit" event. When the form is submitted, it prevents the default form submission behavior, calls the userNameInput() function, and resets the form.

function initializeForm() {
  let nameForm = document.getElementById("nameForm");
  nameForm.addEventListener("submit", function(event) {
    event.preventDefault();
    userNameInput();
    this.reset();
  });
}

// initializes the form

initializeForm();

