'use strict';

// DOM Windows
const mainBackground = document.querySelector('main');
const claraDiv = document.getElementById('clara');
const margueriteDiv = document.getElementById('marguerite');
const alexanderDiv = document.getElementById('alexander');
const jonathanDiv = document.getElementById('jonathan');
const wallaceDiv = document.getElementById('wallace');
const leonardDiv = document.getElementById('leonard');
const detectiveDiv= document.getElementById('detective');
const assistantDiv = document.getElementById('assistant');
const playerSpeechElement = document.getElementById('playerSpeech');
const evidence = document.getElementById('evidence');
const askForAlibiButton = document.getElementById('askForAlibi');
const searchForEvidenceButton = document.getElementById('searchForEvidence');
const accuseDiv = document.getElementById('accuse');
const accuseClara = document.getElementById('accuseClara');
const accuseMarguerite = document.getElementById('accuseMarguerite');
const accuseAlexander = document.getElementById('accuseAlexander');
const accuseJonathan = document.getElementById('accuseJonathan');
const accuseWallace = document.getElementById('accuseWallace');
const accuseLeonard = document.getElementById('accuseLeonard');
const claraLog = document.getElementById('claraLogBook');
const margLog = document.getElementById('margLogBook');
const alexLog = document.getElementById('alexLogBook');
const jonLog = document.getElementById('jonLogBook');
const wallaceLog = document.getElementById('wallaceLogBook');
const noteBook = document.getElementById('open-notebook');
const logbook1 = document.getElementById("logbook-1");
const logbook2 = document.getElementById("logbook-2");

// Global Variables
let user;
let logOpen = false;



//Retrieves the user objects from the browser local storage. Then for the parsedUser variable the JSON.parse(retrievedUser), will parse the line in the ‘retrievedUser’  string, which is expected to be in JSON format. Then the ‘returnparsedUser’ returns the ‘parsedUser’ object as the result of the ‘getUser()’ function.

function getUser() {
  let retrievedUser = localStorage.getItem('currentUser');
  let parsedUser = JSON.parse(retrievedUser);
  return parsedUser;

}

////creates a new instance of the User object and assigns it to the variable user. The getUser() function is called to retrieve a user object from the local storage.

user = new User(getUser());

// more global variables to set up game state.
let clara = user.Clara;
let marguerite = user.Marguerite;
let alexander = user.Alexander;
let jonathan = user.Jonathan;
let wallace = user.Wallace;
let leonard = user.Leonard;
let guesses = 3;

////This code creates an event listener for each character that does not have a value of true at page initialization.  This allows the program to prevent duplicate conversations if the user reloads the page.

if (user.Clara === false){
  claraDiv.addEventListener('click', claraClick)
}
if (user.Marguerite === false) {
  margueriteDiv.addEventListener('click', margueriteClick)
}
if (user.Alexander === false) {
  alexanderDiv.addEventListener('click', alexanderClick)
}
if (user.Jonathan === false) {
  jonathanDiv.addEventListener('click', jonathanClick)
}
if (user.Wallace === false) {
  wallaceDiv.addEventListener('click', wallaceClick)
}
if (user.Leonard === false) {
  leonardDiv.addEventListener('click', leonardClick)
}

// Reset all global values to false so our alibi and evidence functions don't think we are in a cutscene.

clara = false;
marguerite = false;
alexander = false;
jonathan = false;
wallace = false;
leonard = false;

////These lines add event listeners to the accuse buttons to the 6 suspect characters in a game.
accuseClara.addEventListener('click', claraAccusation);
accuseMarguerite.addEventListener('click', margueriteAccusation);
accuseAlexander.addEventListener('click', alexanderAccusation);
accuseJonathan.addEventListener('click', jonathanAccusation);
accuseWallace.addEventListener('click', wallaceAccusation);
accuseLeonard.addEventListener('click', leonardAccusation);

// User Constructor

function User(user){
  this.userName = user.userName;
  this.Clara = user.Clara;
  this.Marguerite = user.Marguerite;
  this.Alexander = user.Alexander;
  this.Jonathan = user.Jonathan;
  this.Wallace = user.Wallace;
  this.Leonard = user.Leonard;
  this.claraEvidence = user.claraEvidence;
  this.claraAlibi = user.claraAlibi;
  this.margueriteEvidence = user.margueriteEvidence;
  this.margueriteAlibi = user.margueriteAlibi;
  this.alexanderEvidence = user.alexanderEvidence;
  this.alexanderAlibi = user.alexanderAlibi;
  this.jonathanEvidence = user.jonathanEvidence;
  this.jonathanAlibi = user.jonathanAlibi;
  this.wallaceEvidence = user.wallaceEvidence;
  this.wallaceAlibi = user.wallaceAlibi;
}


////This function allows the current progress of th game to be updated using yhe updateLocalStorage method. It converts the User object instance to a JSON string using JSON.stringify(this) and stores it in the local storage under the key 'currentUser'. 

User.prototype.updateLocalStorage = function() {

  let stringifiedUser = JSON.stringify(this);
  localStorage.setItem('currentUser', stringifiedUser);

};

//This function is responsible for hiding specific images or image containers in the main section of the document, except for the image container with the specified argument(except). It takes one parameter except to determine which image container should not be hidden.
//const imageContainers = document.querySelectorAll('main > div.base-state');: This line selects all <div> elements that are direct children of the <main> element and have a class of 'base-state'. It returns a NodeList containing these image containers.

function hideImages(except) {
  const imageContainers = document.querySelectorAll('main > div.base-state');
  imageContainers.forEach((container) => {
    if (container.id !== except && container.id !== 'detective' && container.id !== 'assistant') {
      container.classList.add('hidden');
    }
  });
}

//imageContainers.forEach((container) => { ... }): This line iterates over each image container in the imageContainers NodeList using the forEach method and removes the class list of hidden which re-renders them to the page.

function revertChanges() {
  // Show all hidden images
  const imageContainers = document.querySelectorAll('main > div');
  imageContainers.forEach((container) => {
    container.classList.remove('hidden');
  });
}

// This function is responsible for hiding logbook sections on the main page.
function hideLogText() {
  logbook1.classList.add('hidden');
  logbook2.classList.add('hidden');
}

//These character click functions handle the transition cutscenes resulting from the user clicking on an individual character.  First the function checks to see if we are already in a cutscene via the character name === true/false.  If we are not in a cutscene, it changes the background, moves the grid area where the character is rendered.  Hides all other main characters via the hideImages(), unhides the detectives, unhides the conversation window, unhides the alibi and evidence buttons, resets the character global value to true so the program knows we are in a cutscene, and adds event listeners for the alibi and evidence conversation buttons.
// If we are already in a cutscene, the click reverses all the changes listed above


function claraClick() {
  if (clara === false) {
    mainBackground.style.backgroundImage = 'url("img/airship2.png")';
    claraDiv.style.gridArea = '2 / 2 / 3 / 3';
    hideImages('clara');
    detectiveDiv.classList.remove('hidden');
    assistantDiv.classList.remove('hidden');
    playerSpeechElement.classList.remove('hidden');
    evidence.classList.remove('hidden');
    clara = true;
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
    accuseDiv.classList.add('hidden');
  } else {
    while(playerSpeechElement.firstChild) {
      playerSpeechElement.removeChild(playerSpeechElement.firstChild)
    }
    mainBackground.style.backgroundImage = 'url("img/airship1.png")';
    claraDiv.style.gridArea = '2 / 1 / 3 / 2';
    revertChanges();
    detectiveDiv.classList.add('hidden');
    assistantDiv.classList.add('hidden');
    playerSpeechElement.classList.add('hidden');
    evidence.classList.add('hidden');
    claraDiv.removeEventListener('click', claraClick);
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
    accuseDiv.classList.remove('hidden');
    hideLogText();
    clara = false;
  }
}

function margueriteClick() {
  if (marguerite === false) {
    mainBackground.style.backgroundImage = 'url("img/airship3.png")';
    margueriteDiv.style.gridArea = '2 / 2 / 3 / 3';
    hideImages('marguerite');
    detectiveDiv.classList.remove('hidden');
    assistantDiv.classList.remove('hidden');
    playerSpeechElement.classList.remove('hidden');
    evidence.classList.remove('hidden');
    marguerite = true;
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
    accuseDiv.classList.add('hidden');
  } else {
    while(playerSpeechElement.firstChild) {
      playerSpeechElement.removeChild(playerSpeechElement.firstChild)
    }
    mainBackground.style.backgroundImage = 'url("img/airship1.png")';
    margueriteDiv.style.gridArea = '2 / 2 / 3 / 3';
    revertChanges();
    detectiveDiv.classList.add('hidden');
    assistantDiv.classList.add('hidden');
    playerSpeechElement.classList.add('hidden');
    evidence.classList.add('hidden');
    margueriteDiv.removeEventListener('click', margueriteClick);
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
    accuseDiv.classList.remove('hidden');
    hideLogText();
    marguerite = false;
  }
}

function alexanderClick() {
  if (alexander === false) {
    mainBackground.style.backgroundImage = 'url("img/airship4.png")';
    alexanderDiv.style.gridArea = '2 / 2 / 3 / 3';
    hideImages('alexander');
    detectiveDiv.classList.remove('hidden');
    assistantDiv.classList.remove('hidden');
    playerSpeechElement.classList.remove('hidden');
    evidence.classList.remove('hidden');
    alexander = true;
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
    accuseDiv.classList.add('hidden');
  } else {
    while(playerSpeechElement.firstChild) {
      playerSpeechElement.removeChild(playerSpeechElement.firstChild)
    }
    mainBackground.style.backgroundImage = 'url("img/airship1.png")';
    alexanderDiv.style.gridArea = '2 / 3 / 3 / 4';
    revertChanges();
    detectiveDiv.classList.add('hidden');
    assistantDiv.classList.add('hidden');
    playerSpeechElement.classList.add('hidden');
    evidence.classList.add('hidden');
    alexanderDiv.removeEventListener('click', alexanderClick);
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
    accuseDiv.classList.remove('hidden');
    hideLogText();
    alexander = false;
  }
}

function jonathanClick() {
  if (jonathan === false) {
    mainBackground.style.backgroundImage = 'url("img/airship5.png")';
    jonathanDiv.style.gridArea = '2 / 2 / 3 / 3';
    hideImages('jonathan');
    detectiveDiv.classList.remove('hidden');
    assistantDiv.classList.remove('hidden');
    playerSpeechElement.classList.remove('hidden');
    evidence.classList.remove('hidden');
    jonathan = true;
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
    accuseDiv.classList.add('hidden');
  } else {
    while(playerSpeechElement.firstChild) {
      playerSpeechElement.removeChild(playerSpeechElement.firstChild)
    }
    mainBackground.style.backgroundImage = 'url("img/airship1.png")';
    jonathanDiv.style.gridArea = '2 / 4 / 3 / 5';
    revertChanges();
    detectiveDiv.classList.add('hidden');
    assistantDiv.classList.add('hidden');
    playerSpeechElement.classList.add('hidden');
    evidence.classList.add('hidden');
    jonathanDiv.removeEventListener('click', jonathanClick);
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
    accuseDiv.classList.remove('hidden');
    hideLogText();
    jonathan = false;
  }
}

function wallaceClick() {
  if (wallace === false) {
    mainBackground.style.backgroundImage = 'url("img/airship6.png")';
    wallaceDiv.style.gridArea = '2 / 2 / 3 / 3';
    hideImages('wallace');
    detectiveDiv.classList.remove('hidden');
    assistantDiv.classList.remove('hidden');
    playerSpeechElement.classList.remove('hidden');
    evidence.classList.remove('hidden');
    wallace = true;
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
    accuseDiv.classList.add('hidden');
  } else {
    while(playerSpeechElement.firstChild) {
      playerSpeechElement.removeChild(playerSpeechElement.firstChild)
    }
    mainBackground.style.backgroundImage = 'url("img/airship1.png")';
    wallaceDiv.style.gridArea = '2 / 5 / 3 / 6';
    revertChanges();
    detectiveDiv.classList.add('hidden');
    assistantDiv.classList.add('hidden');
    playerSpeechElement.classList.add('hidden');
    evidence.classList.add('hidden');
    wallaceDiv.removeEventListener('click', wallaceClick);
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
    accuseDiv.classList.remove('hidden');
    hideLogText();
    wallace = false;
  }
}

function leonardClick() {
  if (leonard === false) {
    mainBackground.style.backgroundImage = 'url("img/airship7.png")';
    leonardDiv.style.gridArea = '2 / 2 / 3 / 3';
    hideImages('leonard');
    detectiveDiv.classList.remove('hidden');
    assistantDiv.classList.remove('hidden');
    playerSpeechElement.classList.remove('hidden');
    leonard = true;
    accuseDiv.classList.add('hidden');
    displayConversation(['Unfortunately Leonard is not available for an interview.  It looks like we will need to keep investigating elsewhere...']);
    user.Leonard = true;
  } else {
    while(playerSpeechElement.firstChild) {
      playerSpeechElement.removeChild(playerSpeechElement.firstChild)
    }
    mainBackground.style.backgroundImage = 'url("img/airship1.png")';
    leonardDiv.style.gridArea = '2 / 6 / 3 / 7';
    revertChanges();
    detectiveDiv.classList.add('hidden');
    assistantDiv.classList.add('hidden');
    playerSpeechElement.classList.add('hidden');
    leonardDiv.removeEventListener('click', leonardClick);
    accuseDiv.classList.remove('hidden');
    evidence.classList.add('hidden');
    hideLogText();
    leonard = false;
    user.updateLocalStorage();
  }
}

//function handles the process of asking for an alibi from the selected character, displaying their alibi conversation, and updating the user's progress in the game.
//It removes the event listeners for the "Ask for Alibi" button and the "Search for Evidence" button, so they won't trigger their respective functions anymore
//It checks which character is currently selected (Clara, Marguerite, Alexander, Jonathan, or Wallace) by checking the corresponding global variables (clara, marguerite, alexander, jonathan, wallace).
//Based on the selected character, it displays the alibi conversation for that character and updates the user's alibi and character status accordingly.
//Finally, it updates the user's information in the local storage.

function alibiClick() {
  askForAlibiButton.removeEventListener('click', alibiClick);
  searchForEvidenceButton.removeEventListener('click', evidenceClick);
  if (clara === true) {
    displayConversation(claraDeveraux.alibiConversation);
    user.claraAlibi = claraDeveraux.additionalAlibi;
    user.Clara = true;
    user.updateLocalStorage();
  } else if (marguerite === true) {
    displayConversation(margueriteFontaine.alibiConversation);
    user.margueriteAlibi = margueriteFontaine.additionalAlibi;
    user.Marguerite = true;
    user.updateLocalStorage();
  } else if (alexander === true) {
    displayConversation(alexanderPetrov.alibiConversation);
    user.alexanderAlibi = alexanderPetrov.additionalAlibi;
    user.Alexander = true;
    user.updateLocalStorage();
  } else if (jonathan === true) {
    displayConversation(jonathanVanDyke.alibiConversation);
    user.jonathanAlibi = jonathanVanDyke.additionalAlibi;
    user.Jonathan = true;
    user.updateLocalStorage();
  } else if (wallace === true) {
    displayConversation(captainWallace.alibiConversation);
    user.wallaceAlibi = captainWallace.additionalAlibi;
    user.Wallace = true;
    user.updateLocalStorage();
  } 
}

////the function handles the process of searching for evidence from the selected character, displaying their evidence conversation, and updating the user's progress in the game.
//It removes the event listeners for the "Ask for Alibi" button and the "Search for Evidence" button...
//It checks which character is currently selected (Clara, Marguerite, Alexander, Jonathan, or Wallace) by checking the corresponding variables.
//Based on the selected character, it displays the evidence conversation for that character, showing additional evidence related to the ongoing investigation.
//It updates the user's evidence information by assigning the additional evidence to the corresponding user properties.
//Finally, it updates the user's information in the local storage.


function evidenceClick() {
  askForAlibiButton.removeEventListener('click', alibiClick);
  searchForEvidenceButton.removeEventListener('click', evidenceClick);
  if (clara === true ) {
    displayConversation(claraDeveraux.evidenceConversation);
    user.claraEvidence = claraDeveraux.additionalEvidence;
    user.Clara = true;
    user.updateLocalStorage();
  } else if (marguerite === true) {
    displayConversation(margueriteFontaine.evidenceConversation);
    user.margueriteEvidence = margueriteFontaine.additionalEvidence;
    user.Marguerite = true;
    user.updateLocalStorage();
  } else if (alexander === true) {
    displayConversation(alexanderPetrov.evidenceConversation);
    user.alexanderEvidence = alexanderPetrov.additionalEvidence;
    user.Alexander = true;
    user.updateLocalStorage();
  } else if (jonathan === true) {
    displayConversation(jonathanVanDyke.evidenceConversation);
    user.jonathanEvidence = jonathanVanDyke.additionalEvidence;
    user.Jonathan = true;
    user.updateLocalStorage();
  } else if (wallace === true) {
    displayConversation(captainWallace.evidenceConversation);
    user.wallaceEvidence = captainWallace.additionalEvidence;
    user.Wallace = true;
    user.updateLocalStorage();
  }

}

// this code allows the player to make guesses and receiving feedback based on those guesses. If the player's guess is incorrect, this function is triggered to display a message indicating the remaining number of guesses they have.
//if the variable guesses is not equal to 0. This condition indicates that there are still guesses remaining. Inside the if statement, there is a while loop that iterates as long as there is a first child element in the playerSpeechElement.
//Within the while loop, the code removes the first child element from the playerSpeechElement by using the removeChild() method.
//After removing all the child elements from playerSpeechElement, the code updates the mainBackground style.
//The character being accused element's 'hidden' class is removed, making it visible.
//The playerSpeechElement element's 'hidden' class is removed, making it visible.
//A new h2 element is created and assigned to the variable wrongGuess.
//The innerText property of wrongGuess is set to a string that says "Sorry, you got it wrong. You have X guesses left." The value of X is determined by subtracting 1 from the current value of guesses.
//The wrongGuess element is appended as a child to the playerSpeechElement.
//The displayConversation() function is called, passing character.accusationExplanation/
//Finally, the guesses variable is decremented by 1.

function claraAccusation() {
  if (guesses !== 0){
    while(playerSpeechElement.firstChild) {
      playerSpeechElement.removeChild(playerSpeechElement.firstChild)
    }
    mainBackground.style.backgroundImage = 'url("img/airship8.png")';
    claraDiv.style.gridArea = '2 / 2 / 3 / 3';
    claraDiv.classList.remove('hidden');
    hideImages('clara');
    playerSpeechElement.classList.remove('hidden');
    let wrongGuess = document.createElement('h2');
    wrongGuess.innerText = `Sorry, you got it wrong. You have ${guesses - 1} guesses left.`;
    playerSpeechElement.appendChild(wrongGuess);
    displayConversation(claraDeveraux.accusationExplanation);
    guesses --;
  }
}

function margueriteAccusation() {
  if (guesses !== 0){
    while(playerSpeechElement.firstChild) {
      playerSpeechElement.removeChild(playerSpeechElement.firstChild)
    }
    mainBackground.style.backgroundImage = 'url("img/airship8.png")';
    margueriteDiv.style.gridArea = '2 / 2 / 3 / 3';
    margueriteDiv.classList.remove('hidden');
    hideImages('marguerite');
    playerSpeechElement.classList.remove('hidden');
    let wrongGuess = document.createElement('h2');
    wrongGuess.innerText = `Sorry, you got it wrong. You have ${guesses - 1} guesses left.`;
    playerSpeechElement.appendChild(wrongGuess);
    displayConversation(margueriteFontaine.accusationExplanation);
    guesses --;
  }
}

function alexanderAccusation() {
  if (guesses !== 0){
    while(playerSpeechElement.firstChild) {
      playerSpeechElement.removeChild(playerSpeechElement.firstChild)
    }
    mainBackground.style.backgroundImage = 'url("img/airship8.png")';
    alexanderDiv.style.gridArea = '2 / 2 / 3 / 3';
    alexanderDiv.classList.remove('hidden');
    hideImages('alexander');
    playerSpeechElement.classList.remove('hidden');
    let wrongGuess = document.createElement('h2');
    wrongGuess.innerText = `Sorry, you got it wrong. You have ${guesses - 1} guesses left.`;
    playerSpeechElement.appendChild(wrongGuess);
    displayConversation(alexanderPetrov.accusationExplanation);
    guesses --;
  }
}

function jonathanAccusation() {
  if (guesses !== 0){
    while(playerSpeechElement.firstChild) {
      playerSpeechElement.removeChild(playerSpeechElement.firstChild)
    }
    mainBackground.style.backgroundImage = 'url("img/airship8.png")';
    jonathanDiv.style.gridArea = '2 / 2 / 3 / 3';
    jonathanDiv.classList.remove('hidden');
    hideImages('jonathan');
    playerSpeechElement.classList.remove('hidden');
    let wrongGuess = document.createElement('h2');
    wrongGuess.innerText = `Sorry, you got it wrong. You have ${guesses - 1} guesses left.`;
    playerSpeechElement.appendChild(wrongGuess);
    displayConversation(jonathanVanDyke.accusationExplanation);
    guesses --;
  }
}

function wallaceAccusation() {
  if (guesses !== 0){
    while(playerSpeechElement.firstChild) {
      playerSpeechElement.removeChild(playerSpeechElement.firstChild)
    }
    mainBackground.style.backgroundImage = 'url("img/airship8.png")';
    wallaceDiv.style.gridArea = '2 / 2 / 3 / 3';
    wallaceDiv.classList.remove('hidden');
    hideImages('wallace');
    playerSpeechElement.classList.remove('hidden');
    let wrongGuess = document.createElement('h2');
    wrongGuess.innerText = `Sorry, you got it wrong. You have ${guesses - 1} guesses left.`;
    playerSpeechElement.appendChild(wrongGuess);
    displayConversation(captainWallace.accusationExplanation);
    guesses --;
  }
}

function leonardAccusation() {
  if (guesses !== 0){
    while(playerSpeechElement.firstChild) {
      playerSpeechElement.removeChild(playerSpeechElement.firstChild)
    }
    mainBackground.style.backgroundImage = 'url("img/airship8.png")';
    leonardDiv.style.gridArea = '2 / 2 / 3 / 3';
    leonardDiv.classList.remove('hidden');
    hideImages('leonard');
    playerSpeechElement.classList.remove('hidden');
    let correctGuess = document.createElement('h2');
    correctGuess.innerText = 'Great job detective! You solved the mystery.';
    playerSpeechElement.appendChild(correctGuess);
    displayConversation(leonardVanDyke.accusationExplanation);
    guesses --;
  }
}



// Character Objects

const claraDeveraux = {
  firstName: 'Clara',
  lastName: 'Deveraux',
  fullName: 'Clara Deveraux',
  role: 'Disgruntled Artist',
  image: '../img/clara.png',

  evidence: 'Found paint chips on her dress that match the color palette of the stolen painting.',
  additionalEvidence: 'Clearly disgruntled by my interview, the paint chips are allegedly from a piece she did to network herself more commissions. There is also a sketch of the stolen painting found in her sketchbook, suggesting she had a keen interest in it, but enough of an interest to steal it? Her resentment toward Van Dyke is palpable, but her artistic admiration for the stolen painting makes her involvement in its theft implausible.',

  alibi: 'Was seen in the dining area before the estimated time of the murder, but not eating.',
  additionalAlibi: 'She claims she was at the dinner party until near midnight then retired to her room, naming the Steward as an alibi. My assistant interviewed him and he corroborates her story. She noted that he seemed honest, and we have no reason at this time to believe he\'s being untruthful. She left me with a cryptic warning as I left, she may know more than she\'s leading on.',

  assistantNotes: 'Clara held a grudge against Van Dyke for trying to ruin her career. Is that enough of a motive? And does she have a strong alibi?',


  accusationExplanation: ['Clara\'s resentment towards Van Dyke is clear, and her interest in the painting is undeniable. However, she has a strong alibi. The steward vouches for her presence in her quarters during the estimated time of the murder. As well as her passion for art which seems more towards creation rather than destruction or theft. Her guilt is highly unlikely.'],

  evidenceConversation: [
    'Det. Blythe: Good morning, Miss Deveraux, do you mind if I asked you some questions, maybe take a look around your quarters? I\'m sure you\'ve heard about what happened last night.',
    'Miss Deveraux: I did hear, what a tragic loss. And certainly, make yourself at home, it seems you\'re going to regardless.',
    'Det. Blythe: Can you explain those paint chips on your dress to me? It appears you\'ve been handling a dry painting.',
    'Miss Deveraux: Oh my, what a keen eye... but maybe not so much a keen mind? I\'m a struggling artist darling... I\'ve got to pay my way somehow, after Van Dyke tried to destroy my career.',
    'Det. Blythe: Paying your way by stealing priceless paintings, maybe?',
    'Miss Deveraux: Hardly... I heard Alexander Petrov was going to be aboard, and since he\'s on the committee overseeing the new National Art Exhibit I figured I could grease the wheels to get prime space of the gallery. So I did a portrait of his wife and daughter.',
    'Det. Blythe: Why is there a sketch of the stolen painting in your sketchbook then?',
    'Miss Deveraux: It\'s a beautiful piece, and even I need inspiration sometimes. Do you have anymore inane questions, detective?',
    'Det. Blythe: That\'s all for now, thank-you for your time Miss Deveraux.',
    'Miss Deveraux: Can\'t say it\'s been a pleasure.',
  ],
  alibiConversation: [
    'Det. Blythe: Good morning, Miss Deveraux, do you mind if I asked you some questions? I\'m sure you\'ve heard about what happened last night.',
    'I did hear, what an awful and tragic loss... I suppose.',
    'Det. Blythe: Yes, I\'ve heard you\'re not a fan of Leonard. That being said, can you explain your whereabouts last night Miss Deveraux?',
    'I was mingling in the dining hall, keeping up appearances of course. Then retired to my quarters around midnight.',
    'Det. Blythe: Can anyone vouch for you\'r whereabouts after you left the party?',
    'I\'m sure the steward would recall, maybe ask him? He escorted me back.',
    'Det. Blythe: Thank you for your cooperation, Miss Deveraux.',
    'I don\'t think this clears me of any suspicion, does it?... Leonard Van Dyke is hardly the man he portrays to everyone else. I\'m sure you\'ll see that soon enough.',
  ],
};

const margueriteFontaine = {
  firstName: 'Marguerite',
  lastName: 'Fontaine',
  fullName: 'Marguerite Fontaine',
  role: 'Disgruntled Artist',
  image: '../img/marguerite.png',

  evidence: 'Found a document revealing that Marguerite had a large debt to Van Dyke',
  additionalEvidence: 'Marguerite maintains her innocence, stating she has no reason to harm Leonard despite their differences and the alleged debt. Marguerite denies any knowledge of the broken pearl necklace found near Leonard Van Dyke\'s room, claiming it was one of her missing necklaces and that she may be being framed.',

  alibi: 'No one saw Marguerite during the estimated time of the crime.',
  additionalAlibi: 'Marguerite refused to disclose her whereabouts, asserting her right to privacy. Her lack of cooperation does seem suspicious but she asserts the investigation into her as a wild goose chase. Maybe she was up to something else entirely?',

  assistantNotes: 'Given the sizeable debt and broken necklace, Mrs. Fontaine may have motive and may have been at the scene of the crime. But her small frame seems unlikely for such a gruesome murder, accomplices?',

  evidenceConversation: [
    'Det. Blythe: Morning Mrs. Fontaine I\'m Detective Blythe, I hate to bother you at such an early hour but may I ask you some questions about last night?',
    'Marguerite: Why certainly Mr. Detective, anything you need, and you can call me Marge.',
    'Det. Blythe: Well thank-you, Marge... can you shed some light on this broken pearl necklace found near Leonard Van Dyke\'s room? I\'m sure you\'ve heard by now. It seems quite peculiar, doesn\'t it?',
    'Marguerite: Oh, dear! That\'s one of my pearl necklaces! How on earth did it end up there? I had no idea it was missing.',
    'Det. Blythe: You weren\'t near Mr. Van Dyke\'s quarters last night?',
    'Marguerite: Heavens no, I want nothing to do with him. This zeppelin has its fair share of unsavory characters. Perhaps one of them targeted me? But why would anyone go to such lengths?',
    'Det. Blythe: Would that aversion have anything to do with your sizeable debt to the Van Dyke estate?',
    'Marguerite: My-My! Now, how would you know anything about that Mr. Blythe? Your assistant here gone sleuthing?',
    'Det. Blythe: So you have no idea who may have harmed Mr. Van Dyke, nor why your necklace was found by his quarters?',
    'Marguerite: I have no reason to harm Leonard, despite our differences or the supposed debt. I trust you\'ll find the real culprit. I\'m done answering questions now Detective, have a good day.',
    'Det. Blythe: Thank you for your time, Marge',
    'Marguerite: It\'s Mrs. Fontaine.',
  ],

  alibiConversation: [
    'Det. Blythe: Morning Mrs. Fontaine I\'m Detective Blythe, I hate to bother you at such an early hour but may I ask you some questions about last night?',
    'Marguerite: Why certainly Mr. Detective, anything you need, and you can call me Marge.',
    'Det. Blythe: Well thank-you, Marge... I\'d like to ask your whereabouts around midnight last night. It may help our investigation.',
    'Marguerite: Why is that relevant, Blythe? I fail to see how my whereabouts at that specific time are of any significance to you.',
    'Det. Blythe: Please understand the gravity of the situation. Leonard\'s murder occurred around that time, and we need to establish everyone\'s movements to to establish the events, and eliminate suspects.',
    'Marguerite: I assure you Blythe, I am no suspect. I had no involvement in Leonard\'s murder. However, I value my privacy and do not feel obligated to disclose my exact whereabouts to you or anyone else.',
    'Det. Blythe: Your refusal to share this information only raises suspicions. If you have nothing to hide, why not be forthcoming?',
    'Marguerite: I have nothing to hide, but that doesn\'t mean I have to reveal every detail of my personal life to satisfy your curiosity.',
    'Det. Blythe: The investigation will continue, and if there\'s any evidence or information that links you to Leonard\'s murder, it will come to light.',
    'Marguerite: You\'ll find nothing regarding me on your wild goose chase so don\'t waste your time.',
  ],

  accusationExplanation: ['Marguerite indeed had a financial motive, and the broken pearl necklace found at the crime scene does raise suspicions. However, let us carefully consider this perplexing puzzle. The presence of the necklace might be nothing more than a clever ruse, intended to divert our attention from the true perpetrator, and she wasn\'t seen anywhere, by anyone, the night of the murder. No, my dear friends, Marguerite may be entangled in a web of her own misdeeds, but the threads connecting her to this particular crime remain tenuous at best.']

};

const alexanderPetrov = {
  firstName: 'Alexander',
  lastName: 'Petrov',
  fullName: 'Alexander Petrov',
  role: 'Foreign Diplomat',
  image: '../img/alexander.png',


  evidence: 'Found a letter in Petrov\'s quarters hinting at a dispute over a diplomatic matter with Van Dyke.',
  additionalEvidence: 'Alexander denies any involvement in the murder and maintains his innocence. The stolen painting is one of the artworks currently in dispute between him and Van Dyke. We have no concrete evidence linking Petrov to the crime at this point, but his behavior raises suspicions. He left me with a cryptic note about Van Dyke not being as he appears, maybe Van Dyke\'s son will know more?',

  alibi: 'Alexander was seen chatting with the zeppelin\'s captain some time before the murder. They were both part of opposing forces during the war, why they would meet let alone conversate with one another is beyond me.',
  additionalAlibi: 'Petrov claims to have indeed had a conversation with Captain Wallace before the murder. The meeting was an opportunity for mutual respect after being adversaries during the war. No witnesses can confirm the interaction, but it appears unrelated to the crime. There are no witnesses to Alexander\'s whereabouts after he left the bridge.',

  assistantNotes: 'Maybe we should look into the involvement in diplomatic affairs and any potential conflicts or disagreements he had with Leonard Van Dyke. Gather more details about the nature of the dispute mentioned in the letter found in Petrov\'s quarters. Or maybe inquire about the conversation between Petrov and the zeppelin\'s captain. Determine the purpose and content of their discussion, and ascertain if it has any relevance to the murder.',

  evidenceConversation: [
    'Det. Blythe: Good morning, Mr. Petrov. I\'m Detective Blythe. I hope I\'m not interrupting anything, but I have a few questions to ask you regarding last night\'s events.',
    'Alexander: Good morning, Detective Blythe. Please, go ahead. I\'ll do my best to assist you.',
    'Det. Blythe: During our investigation, my assistant found some letters in your cabin that mentioned a diplomatic issue with Leonard Van Dyke. Can you shed some light on that?',
    'Alexander: Make a habit of sleuthing through people\'s belongings Mr. Blythe? The diplomatic matter pertains to an ownership dispute over certain artworks that Leonard Van Dyke possesses. My country believes that these artworks rightfully belong to us, as they hold significant cultural and historical value. He refuses to return or sell them, after he stole them.',
    'Det. Blythe: So, it\'s an ownership dispute over the paintings? Surely, an ownership dispute wouldn\'t be reason enough for someone to resort to murder, right?',
    'Petrov: Absolutely not, Detective. While the dispute is undoubtedly a source of tension, it would never justify such a heinous act. I maintain my innocence, and I assure you that I had no involvement in Leonard\'s untimely demise.',
    'Det. Blythe: And yet, the painting stolen after Van Dyke\'s murder is precisely one of those paintings he allegedly refused to return, is it not?',
    'Alexander: I understand your line of questioning, but I assure you that my pursuit of these artworks is within the bounds of international law and diplomatic negotiations. I am not involved in any criminal activities or acts of violence. And a final word of warning Detective, Leonard Van Dyke was not the man he appeared to be.',
    'Det. Blythe: Very well, Mr. Petrov. We will continue our investigation elsewhere. If there\'s any further information or evidence that comes to light, we may need to speak again. Thank you for your time.',
  ],

  alibiConversation: [
    'Det. Blythe: Good morning, Mr. Petrov. I\'m Detective Blythe. I hope I\'m not interrupting anything, but I have a few questions to ask you regarding last night\'s events.',
    'Alexander: Good morning, Detective Blythe. Please, go ahead. I\'ll do my best to assist you.',
    'Det. Blythe: Mr. Petrov, I\'d like to discuss your whereabouts last night? Chatting with Capt. Wallace?',
    'Alexander: Certainly, Detective. I was indeed seen chatting with Capt. Wallace, last night on the bridge.',
    'Det. Blythe: You two were enemies during the war, what business would you have with Capt. Wallace?',
    'Alexander: During the war, Captain Wallace and I were indeed adversaries. However, it has been some time since the war ended, I felt it necessary to meet the man who had caused us so much trouble face-to-face, not as enemies, but as individuals who shared the horrors of war. It was a show of mutual respect. I also wanted to know why he choose to be a pilot, a man as decorated as himself surely could have gone on to do anything more productive than flying this... blimp.',
    'Det. Blythe: Did you meet or speak to anyone once you retired for the night?',
    'Alexander: No Detective, but I went straight to cabin, and then to bed.',
    'Det. Blythe: Blythe: Understood. Thank you for your cooperation, Mr. Petrov.',
    'Alexander: Thank you, Detective.'
  ],


  accusationExplanation: ['While the evidence may initially raise suspicions about Alexander Petrov\'s involvement in Van Dyke\'s murder, a closer examination reveals inconsistencies. Although Alexander had a diplomatic dispute with Leonard over the ownership of certain paintings, it does not provide a sufficient motive for murder. There is no concrete evidence linking Alexander to the actual theft, also Alexander\'s alibi for the night of the murder is supported by his interaction with Captain Wallace, with whom he shared a history of wartime conflict. Their meeting was an act of reconciliation, unrelated to Leonard\'s murder although politicians have a knack for lying and this could be an attempt by both him and Capt. Wallace to pull at the heart strings and quell suspicions. Additionally, there are no witnesses or substantial evidence placing Alexander at the scene of the crime. '],
};

const jonathanVanDyke = {
  firstName: 'Jonathan',
  lastName: 'Van Dyke',
  fullName: 'Jonathan Van Dyke',
  role: 'Estranged Son',
  image: '../img/jonathan.png',

  evidence: 'Initial search of Jonathan\'s messenger bag included an insurance policy taken out on the stolen painting in question.',
  additionalEvidence: 'Jonathan admits to having financial troubles and considering stealing the painting to solve them. He had an insurance policy for the stolen painting as part of his plan, but someone else stole the painting before he could act. Jonathan maintains that he had nothing to do with the murder and was as shocked as anyone when he discovered the painting was already gone. Jonathan suggests to investigate the infirmary Doctor, who is keeping Leonard Van Dyke\'s body private.',

  alibi: 'Jonathan claims to have been in the library upon initial questioning, but the librarian has no recollection of him.',
  additionalAlibi: 'Jonathan admits attempting to steal the painting to settle his debts but discovered it was already gone upon arrival. He saw no body at the scene and hasn\'t been allowed to see his father\'s body by the doctor. Jonathan claims he had no involvement in his father\'s murder. We will investigate the doctor\'s decision to deny Jonathan access to the body. The focus now shifts to finding out who took the painting and their possible connection to the murder.',

  assistantNotes: 'It has been revealed that Jonathan had an insurance policy for the stolen painting, concealed in his messenger bag. This raises questions about his potential motives and involvement in the crime. Furthermore, Jonathan claims to have been in the library at the time of the murder. While an alibi is established, the librarian cannot confirm it. We should question Jonathan further to gather more information about his relationship with his father, his knowledge of the stolen painting, his whereabouts last night and the reasons behind his insurance policy on the painting.',

  evidenceConversation: [
    'Det. Blythe: Good day, Jonathan. I\'m Detective Blythe. I\'d like to ask you a few questions regarding the recent events, specifically about the insurance policy we found in your messenger bag. Can you explain why you had an insurance policy for the stolen painting?',
    'Jonathan: Detective Blythe, I... I can explain. You see, I had some debts to settle, and I saw an opportunity to cash in on the insurance policy if the painting went missing. It was a desperate measure, but it wasn\'t me.',
    'Det. Blythe: So, you admit to having financial troubles and contemplating stealing the painting to solve them. But what happened? Why didn\'t you follow through with your plan?',
    'Jonathan: I have a strained relationship with my father, Leonard, and financial difficulties were mounting, asking him for help was not an option. However, before I could make my move, someone else had already stolen the painting. I arrived at the scene, and it was gone. I was as shocked as anyone else.',
    'Det. Blythe: Can you provide any details about who might have taken the painting before you had the chance?',
    'Jonathan: I wish I knew, Detective. I don\'t have any concrete information about who might be responsible. All I can say is that it wasn\'t me. Stealing a painting it something I\'m capable of but I could never kill my own father.',
    'Det. Blythe: We will thoroughly investigate this matter, Jonathan. Your financial struggles and intent to benefit from the insurance policy certainly raise suspicions, but we must gather all the facts. Do you have any information that could help us identify potential suspects or shed light on your father\'s enemies?',
    'Jonathan: I\'m afraid I don\'t. My relationship with my father was strained, and I didn\'t involve myself much in his affairs. The number of people who wouldn\'t wish him harm has been dwindling. You suspect list may continue to grow, unfortunately.',
    'Blythe: Thank you for your cooperation, Jonathan. We will continue our investigation and consider your explanation. Remember, the truth will eventually come to light.',
    'Jonathan: You may wish to look into The Doctor at the infirmary, he refuses to let me see my father\'s body...',
  ],

  alibiConversation: [
    'Det. Blythe: Good afternoon, Jonathan. I wanted to talk to you about the events of last night. Can you provide an alibi for your whereabouts during the estimated time of your father\'s murder? Don\'t try the library, we know you weren\'t there.',
    'Jonathan: Detective Blythe, I understand your concern, I must admit I don\'t have a solid alibi. I was going to attempt to steal the painting, but it was already gone. I was as shocked as anyone else.',
    'Det. Blythe: That\'s troubling, Jonathan. The absence of a confirmed alibi raises questions. Can you explain why you were trying to steal the painting, given your strained relationship with your father?',
    'Jonathan: I wanted to take the painting, sell it, and use the proceeds to settle my debts. But when I arrived at the scene, the painting was already missing. I saw no body present either and as of this morning the doctor refuses to let me see my father\'s body.',
    'Det. Blythe: So you\'re saying that you did attempt to steal the painting, but someone else had already taken it before you got there?',
    'Jonathan: Yes, that\'s correct. I thought it was an opportunity to solve my financial troubles. But it seems someone beat me to it. I assure you, Detective, I had no involvement in my father\'s murder.',
    'Det. Blythe: The fact that you haven\'t seen your father\'s body yet is quite unusual. Can you explain why the doctor has denied you access?',
    'Jonathan: He claims it\'s necessary for the investigation. It\'s frustrating not being able to say my final goodbyes.',
    'Det. Blythe: I understand your frustration, Jonathan. We\'ll look into the doctor\'s decision and determine if there\'s a valid reason for their denial. In the meantime, we need to find out who took the painting and investigate their possible connection to the murder.',
    'Jonathan: I hope you can find the truth, Detective. My relationship with my father may have been complicated, but I never wanted him to meet such a tragic end.',
    'Blythe: We\'ll do our best to uncover the facts and bring justice to this case. Thank you for your cooperation, Jonathan.',
  ],

  accusationExplanation:
    ['Despite Jonathan Van Dyke\'s involvement in the attempted theft of the painting, lack of direct involvement in the murder, and the absence of concrete evidence connecting him to the crime scene all contribute to his innocence. While his actions to steal from his father to pay gambling debts may have cast doubt on his character, it is crucial to look beyond this, he was forthright with information, and seems to be a terrible liar. I suspect he\'s been truthful so far and is not the perpetrator.'],

};

const captainWallace = {
  firstName: 'William',
  lastName: 'Wallace',
  fullName: 'William Wallace',
  role: 'Zeppelin Captain',
  image: '../img/captain.png',

  evidence: 'No physical evidence, but the Captain does have access to any cabin aboard the Sky Empress.',
  additionalEvidence: 'Captain Wallace reveals that Leonard Van Dyke has caused harm and destruction to many individuals in the past through his reckless behavior. Wallace shares a personal experience where Van Dyke\'s actions led to a tragic incident, resulting in the loss of lives and leaving emotional scars on Wallace. Wallace has motive for wanting Van Dyke out of the picture but seems unlikely to be a culprit given Wallace\'s background and professionalism.',

  alibi: 'Capt. Wallace should have been speaking with Alexander Petrov at the time of the murder. According to Petrov.',
  additionalAlibi: 'Captain Wallace provides an alibi, stating that he was on the bridge during the time of the murder, which is supported by crew members. His conversation with Alexander Petrov was centered on healing from the shared trauma of war, with no relevant details discussed. Wallace acknowledges Leonard Van Dyke\'s destructive actions and the potential motive it creates for others. However, he maintains his innocence and focuses on his role as the zeppelin\'s captain. Further investigation is necessary to determine his involvement, if any, in the murder.',

  assistantNotes: 'I don\'t have much information on Capt. Wallace, Petrov says he spoke to him last night before Petrov left to his cabin, but Wallace does have a key to all the cabins. Could Petrov have taken those keys at some point and committed the crime?',

  evidenceConversation: [
    'Det. Blythe: Good afternoon, Captain Wallace. I hope I\'m not intruding, but I have a few questions I\'d like to ask you regarding Leonard Van Dyke\'s murder.',

    'Wallace: Detective Blythe, pleasure to have you on board. What can I assist you with?',

    'Det. Blythe: I understand you have access to all the cabins aboard the zeppelin. Which would make it convenient if anyone were to want to cause harm to a passenger if they got their hands on that master key set.',

    'Capt. Wallace: I keep the master keys on me at all times, never left my side. And yes, Leonard Van Dyke. That man has caused untold destruction and brought harm to countless individuals throughout his escapades. I, too, have been on the receiving end of his reckless behavior.',

    'Det. Blythe: Can you elaborate on that? How has Leonard harmed you in the past?',

    'Capt. Wallace: Years ago, he hired me to pilot an expedition. The journey started with grand ambitions, but Van Dyke\'s disregard for safety and his lust for adventure led to a disastrous incident. Lives were lost, and some of them were dear friends of mine. I hold Van Dyke responsible for that tragedy.',

    'Det. Blythe: I see. That explains your animosity towards him. Given your history, Captain, I can understand why you might have a motive for wanting Leonard out of the picture. However, I must clarify that having a motive doesn\'t make you guilty of the crime, but it cause suspicion.',

    'Capt. Wallace: Of course, Detective. As the captain, I have my responsibilities to attend to. I was on the bridge, overseeing the operations and ensuring the smooth sailing of the zeppelin. My crew members and Alexander Petrov can vouch for my presence there throughout the night.',

    'Det. Blythe: Thank you for your cooperation, Captain Wallace. If you recall anything else that might be relevant, please don\'t hesitate to reach out.',

    'Capt. Wallace: I\'ll do just that, Detective. Leonard\'s actions have left a mark on many lives, including mine but to resort to murder is heinous, I\'ve seen enough death in my time and wish not to see more. I hope you find the truth behind his murder and bring justice to whoever is responsible.',
  ],

  alibiConversation: [
    'Det. Blythe: Good day, Captain Wallace. I hope you\'re managing well amidst these troubling circumstances. I\'d like to ask you a few questions regarding the night of the murder. Can you provide an alibi for your whereabouts during that time?',

    'Capt. Wallace: Ah, Detective Blythe. Of course, I understand the need for thorough investigation. During the time of the murder, I was on the bridge overseeing the operations of the zeppelin. Several crew members can attest to my presence here, and Alexander Petrov.',

    'Det. Blythe: Thank you for clarifying. Now, about your conversation with Alexander Petrov on that same night. Could you shed some light on what was discussed?',

    'Capt. Wallace: Petrov and I share a history, Detective. We both fought during the war, facing each other as adversaries. Our conversation was an attempt to heal some of the trauma we both experienced. We reminisced about the horrors of war, finding solace in the fact that we survived. Nothing else of relevance was discussed that night.',

    'Det. Blythe: I see. I\'ve discovered that Leonard has caused destruction and brought harm to many lives through his reckless actions. Were you aware of this?',

    'Capt. Wallace: Indeed, Detective. Leonard\'s escapades have left a trail of destruction and affected countless individuals. He seemed oblivious to the consequences of his actions. Many bear scars, both physical and emotional, because of him. It\'s not surprising that some may harbor ill will towards him. He\'s even caused me some strife, when he hired me as a pilot to a remote jungle for one of his adventures.',

    'Det. Blythe: Your insights are valuable, Captain. It seems Leonard\'s actions have had far-reaching consequences. While you may have a motive, it\'s essential to note that a motive alone doesn\'t make one guilty of a crime. I appreciate your honesty and cooperation.',

    'Capt. Wallace: I assure you, Detective, my focus is on piloting this zeppelin and ensuring the safety of all aboard. I have no reason to harm Leonard or be involved in his murder.',

    'Det. Blythe: Thank you, Captain Wallace, for your time and cooperation. I will continue my investigation.',
  ],

  accusationExplanation: ['While Capt. Wallace may have a troubled history with Leonard, there is insufficient evidence to support his direct involvement in the murder. The alibi, lack of motive, and limited evidence point away from him as the perpetrator. It is crucial to consider the broader context of the case and explore the motives and actions of Leonard himself, who emerges as a central figure in this complex mystery.'],
};

const leonardVanDyke = {
  firstName: 'Leonard',
  lastName: 'Van Dyke',
  fullName: 'Leonard Van Dyke',
  role: 'Famed Adventurer',
  image: '../img/leonard.png',

  evidence: 'Nothing of value was found inside Van Dyke\'s cabin. It was oddly well kept and organized. Almost no personal affects',

  alibi: 'Van Dyke was last seen outside on the decks of the zeppelin last night. Telling Stories of his adventures with the other passengers.',

  accusationExplanation: ['Ladies and gentlemen, esteemed guests, and my ever-vigilant assistant, Fitzgerald. As we gather here to reflect on the perplexing case of Leonard Van Dyke\'s disappearance, I am compelled to share with you the depths of the enigma we have encountered. Throughout our investigation, we meticulously examined every aspect of the evidence, delving into the motives and alibis of each suspect. Yet, despite our efforts, a fog of uncertainty lingers. One crucial piece of information has come to light. It appears that the doctor aboard this zeppelin, in a rather peculiar act, concealed the fact that Leonard Van Dyke\'s body had mysteriously vanished in the early hours of the morning. This revelation raises the stakes and deepens the intrigue surrounding this case. Moreover, the painting that Leonard cherished so dearly has vanished without a trace, echoing his own disappearance. How could such valuable artifacts vanish from within these walls?','As we sifted through the clues, we encountered contradictions and inconsistencies that defied easy explanation. Clara Deveraux\'s artistic resentment, Marguerite Fontaine\'s financial troubles, Alexander Petrov\'s diplomatic disputes, Jonathan Van Dyke\'s desperate intentions—all, and Capt. Wallace\'s grudge for a tragedy caused by Leonard himself. All intriguing, yet none fully fitting the puzzle. In light of these perplexities, we must consider the possibility that Leonard Van Dyke\'s disappearance was not a result of happenstance. Instead, it points to a meticulously crafted plan, masterminded by a figure lurking in the shadows. The orchestration of this elaborate scheme leaves us questioning the true nature of events. The evidence before us does not align seamlessly. It seems we are facing an enigma that reaches beyond the confines of a simple murder. A shadowy web of manipulation and deception has been woven, obscuring the truth and leaving us with more questions than answers. Let us embark on this next phase of our investigation with unwavering determination, for the road ahead promises greater challenges and revelations. The truth may be elusive, but we shall not rest until we have unraveled this intricate tapestry of deception and have found Mr. Leonard Van Dyke.'],
};

// this code provides a mechanism to display a conversation between a player and a character in a sequential manner. The conversation is stored in an array, and each line of conversation is displayed either as player speech or character speech based on the index.
//The displayNextLine() function is called immediately after initializing the index variable. This ensures that the conversation starts displaying.
//Inside the displayNextLine() function, there is an if statement that checks if the index is less than the length of the conversation array. This condition ensures that there are still lines of conversation left to display.
//If there are more lines of conversation to display, the code proceeds with the following steps:
//The conversation is displayed as an index in the charatcer object and move in incremented by 1 to move to the next line of conversation.
//A local variable charIndex is declared and initialized with 0. This variable will be used to keep track of the current index of characters in the line string.
//The typeInterval variable is set to 10ms.It controls the speed at which the text is displayed.
// The typeWriter variable is declared and assigned the value returned by the setInterval() function. This function executes the provided callback function repeatedly with a fixed time delay between each call.
// The callback function inside setInterval() checks if charIndex is less than the length of the line string. If there are more characters to display, it proceeds with the following steps:
//i. The current character from the line string, determined by the current charIndex, is appended to the textContent property of the newLineElement. This simulates the effect of typing one character at a time.


//ii. The charIndex is incremented by 1 to move to the next character.


//iii. Once all characters in the line have been displayed, the typeWriter interval is cleared using clearInterval(typeWriter).


//iv. A delay of 1 second is set using setTimeout() before calling the displayNextLine() function again. This delay provides a pause before displaying the next line of conversation.
//Once all lines of conversation have been displayed, the function execution ends.




function displayConversation(conversation) {

  let index = 0;
  displayNextLine();

  function displayNextLine() {
    if (index < conversation.length) {
      const line = conversation[index];
      const newLineElement = document.createElement('p');
      playerSpeechElement.appendChild(newLineElement);
      index++;

      let charIndex = 0;
      const typeInterval = 10; // Delay between typing each character

      const typeWriter = setInterval(() => {
        if (charIndex < line.length) {
          newLineElement.textContent += line[charIndex];
          charIndex++;
        } else {
          clearInterval(typeWriter);
          setTimeout(displayNextLine, 1000); // Delay of 1 seconds before displaying the next line.  Set timeout functionality help provided by ChatGPT
        }
      }, typeInterval);
    }
  }
}

// logClara() function: The function starts with a while loop that iterates as long as there is a first child element in the claraLog element.
//claraLog.firstChild retrieves the first child element of the claraLog element.
//claraLog.removeChild(claraLog.firstChild) removes the first child element from the claraLog element. This loop effectively clears the content of claraLog by removing all its child elements.
//Two new paragraph elements (<p>) are created using the document.createElement('p') method and assigned to the evidence and alibi variables.


// Logbook Functions
function logClara() {
  while(claraLog.firstChild) {
    claraLog.removeChild(claraLog.firstChild);
  }
  const evidence = document.createElement('p');
  const alibi = document.createElement('p');
  evidence.innerText = `Clara's Evidence: ${claraDeveraux.evidence}`;
  alibi.innerText = `Clara's Alibi: ${claraDeveraux.alibi}`;
  claraLog.appendChild(evidence);
  claraLog.appendChild(alibi);
  if (user.claraAlibi) {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Additional Clara Alibi: ' + user.claraAlibi;
    claraLog.appendChild(paragraph);
  } else if (user.claraEvidence) {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Additional Clara Evidence: ' + user.claraEvidence;
    claraLog.appendChild(paragraph);
  }
}

function logMarguerite() {
  while(margLog.firstChild) {
    margLog.removeChild(margLog.firstChild);
  }
  const evidence = document.createElement('p');
  const alibi = document.createElement('p');
  evidence.innerText = `Marguerite's Evidence: ${margueriteFontaine.evidence}`;
  alibi.innerText = `Marguerite's Alibi: ${margueriteFontaine.alibi}`;
  margLog.appendChild(evidence);
  margLog.appendChild(alibi);

  if (user.margueriteAlibi) {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Additional Marguerite Alibi: ' + user.margueriteAlibi;
    margLog.appendChild(paragraph);
  } else if (user.margueriteEvidence) {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Additional Marguerite Evidence: ' + user.margueriteEvidence;
    margLog.appendChild(paragraph);
  }
}

function logAlexander() {
  while(alexLog.firstChild) {
    alexLog.removeChild(alexLog.firstChild);
  }
  const evidence = document.createElement('p');
  const alibi = document.createElement('p');
  evidence.innerText = `Alexander's Evidence: ${alexanderPetrov.evidence}`;
  alibi.innerText = `Alexander's Alibi: ${alexanderPetrov.alibi}`;
  alexLog.appendChild(evidence);
  alexLog.appendChild(alibi);
  if (user.alexanderAlibi) {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Additional Alexander Alibi: ' + user.alexanderAlibi;
    alexLog.appendChild(paragraph);
  } else if (user.alexanderEvidence) {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Additional Alexander Evidence: ' + user.alexanderEvidence;
    alexLog.appendChild(paragraph);
  }
}

function logJonathon() {
  while(jonLog.firstChild) {
    jonLog.removeChild(jonLog.firstChild);
  }
  const evidence = document.createElement('p');
  const alibi = document.createElement('p');
  evidence.innerText = `Jonathan's Evidence: ${jonathanVanDyke.evidence}`;
  alibi.innerText = `Jonathan's Alibi: ${jonathanVanDyke.alibi}`;
  jonLog.appendChild(evidence);
  jonLog.appendChild(alibi);
  if (user.jonathanAlibi) {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Additional Jonathan Alibi: ' + user.jonathanAlibi;
    jonLog.appendChild(paragraph);
  } else if (user.jonathanEvidence) {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Additional Jonathan Evidence: ' + user.jonathanEvidence;
    jonLog.appendChild(paragraph);
  }
}

function logWallace() {
  while(wallaceLog.firstChild) {
    wallaceLog.removeChild(wallaceLog.firstChild);
  }
  const evidence = document.createElement('p');
  const alibi = document.createElement('p');
  evidence.innerText = `Wallace's Evidence: ${captainWallace.evidence}`;
  alibi.innerText = `Wallace's Alibi: ${captainWallace.alibi}`;
  wallaceLog.appendChild(evidence);
  wallaceLog.appendChild(alibi);
  if (user.wallaceAlibi) {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Additional Wallace Alibi: ' + user.wallaceAlibi;
    wallaceLog.appendChild(paragraph);
  } else if (user.wallaceEvidence) {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Additional Wallace Evidence: ' + user.wallaceEvidence;
    wallaceLog.appendChild(paragraph);
  }
}

//Code in openLogBook() function:


//The function checks if the logOpen variable is false.
//If it is false, the code proceeds with the following steps:
//The 'hidden' class is removed from the logbook1 and logbook2 elements, making them visible.
//The logClara() function is called to populate the Clara-specific log.
//Several other log functions (logMarguerite(), logAlexander(), logJonathon(), logWallace()) are called, presumably to populate logs for other characters.
//The 'hidden' class is removed from the noteBook element, making it visible.
//The logOpen variable is set to true.
//If the logOpen variable is already true, the code proceeds with the following steps:
//The logOpen variable is set to false.
//The 'hidden' class is added to the logbook1, logbook2, and noteBook elements, making them hidden.


function openLogBook() {
  if (logOpen === false) {
    logbook1.classList.remove('hidden');
    logbook2.classList.remove('hidden');
    logClara();
    logMarguerite();
    logAlexander();
    logJonathon();
    logWallace();
    noteBook.classList.remove('hidden');
    logOpen = true;
  } else {
    logOpen = false;
    logbook1.classList.add('hidden');
    logbook2.classList.add('hidden');
    noteBook.classList.add('hidden');

  }
}


