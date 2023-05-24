'use strict'

// Globals
const user = new User(getUser());
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

let clara = false;
let marguerite = false;
let alexander = false;
let jonathan = false;
let wallace = false;
let leonard = false;

claraDiv.addEventListener('click', claraClick)
margueriteDiv.addEventListener('click', margueriteClick)
alexanderDiv.addEventListener('click', alexanderClick)
jonathanDiv.addEventListener('click', jonathanClick)
wallaceDiv.addEventListener('click', wallaceClick)
leonardDiv.addEventListener('click', leonardClick)

// User Constructor
// To Do.  In submission handler for username, check local storage.  If username exists, start game from previous state.

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
}

User.prototype.updateLocalStorage = function() {

  let stringifiedUser = JSON.stringify(this);
  localStorage.setItem('currentUser', stringifiedUser);

};

// Pull user info from local storage
function getUser() {
  let retrievedUser = localStorage.getItem('currentUser');
  let parsedUser = JSON.parse(retrievedUser);
  return parsedUser;

}

// Character click transitions
function hideImages(except) {
  const imageContainers = document.querySelectorAll('main > div.base-state');
  imageContainers.forEach((container) => {
    if (container.id !== except && container.id !== 'detective' && container.id !== 'assistant') {
      container.classList.add('hidden');
    }
  });
}

function revertChanges() {
  // Show all hidden images
  const imageContainers = document.querySelectorAll('main > div');
  imageContainers.forEach((container) => {
    container.classList.remove('hidden');
  });
}

function claraClick() {
  if (clara === false) {
    mainBackground.style.backgroundImage = 'url("../img/airship 2.png")';
    claraDiv.style.gridArea = '2 / 2 / 3 / 3';
    hideImages('clara');
    detectiveDiv.classList.remove('hidden');
    assistantDiv.classList.remove('hidden');
    playerSpeechElement.classList.remove('hidden');
    evidence.classList.remove('hidden');
    clara = true;
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
  } else {
    mainBackground.style.backgroundImage = 'url("../img/airship 1.png")';
    claraDiv.style.gridArea = '2 / 1 / 3 / 2';
    revertChanges();
    detectiveDiv.classList.add('hidden');
    assistantDiv.classList.add('hidden');
    playerSpeechElement.classList.add('hidden');
    evidence.classList.add('hidden');
    claraDiv.removeEventListener('click', claraClick);
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
  }
}

function margueriteClick() {
  if (marguerite === false) {
    mainBackground.style.backgroundImage = 'url("../img/airship 3.png")';
    margueriteDiv.style.gridArea = '2 / 2 / 3 / 3';
    hideImages('marguerite');
    detectiveDiv.classList.remove('hidden');
    assistantDiv.classList.remove('hidden');
    playerSpeechElement.classList.remove('hidden');
    evidence.classList.remove('hidden');
    marguerite = true;
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
  } else {
    mainBackground.style.backgroundImage = 'url("../img/airship 1.png")';
    margueriteDiv.style.gridArea = '2 / 2 / 3 / 3';
    revertChanges();
    detectiveDiv.classList.add('hidden');
    assistantDiv.classList.add('hidden');
    playerSpeechElement.classList.add('hidden');
    evidence.classList.add('hidden');
    margueriteDiv.removeEventListener('click', margueriteClick);
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
  }
}

function alexanderClick() {
  if (alexander === false) {
    mainBackground.style.backgroundImage = 'url("../img/airship 4.png")';
    alexanderDiv.style.gridArea = '2 / 2 / 3 / 3';
    hideImages('alexander');
    detectiveDiv.classList.remove('hidden');
    assistantDiv.classList.remove('hidden');
    playerSpeechElement.classList.remove('hidden');
    evidence.classList.remove('hidden');
    alexander = true;
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
  } else {
    mainBackground.style.backgroundImage = 'url("../img/airship 1.png")';
    alexanderDiv.style.gridArea = '2 / 3 / 3 / 4';
    revertChanges();
    detectiveDiv.classList.add('hidden');
    assistantDiv.classList.add('hidden');
    playerSpeechElement.classList.add('hidden');
    evidence.classList.add('hidden');
    alexanderDiv.removeEventListener('click', alexanderClick);
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
  }
}

function jonathanClick() {
  if (jonathan === false) {
    mainBackground.style.backgroundImage = 'url("../img/airship 5.png")';
    jonathanDiv.style.gridArea = '2 / 2 / 3 / 3';
    hideImages('jonathan');
    detectiveDiv.classList.remove('hidden');
    assistantDiv.classList.remove('hidden');
    playerSpeechElement.classList.remove('hidden');
    evidence.classList.remove('hidden');
    jonathan = true;
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
  } else {
    mainBackground.style.backgroundImage = 'url("../img/airship 1.png")';
    jonathanDiv.style.gridArea = '2 / 4 / 3 / 5';
    revertChanges();
    detectiveDiv.classList.add('hidden');
    assistantDiv.classList.add('hidden');
    playerSpeechElement.classList.add('hidden');
    evidence.classList.add('hidden');
    jonathanDiv.removeEventListener('click', jonathanClick);
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
  }
}

function wallaceClick() {
  if (wallace === false) {
    mainBackground.style.backgroundImage = 'url("../img/airship 6.png")';
    wallaceDiv.style.gridArea = '2 / 2 / 3 / 3';
    hideImages('wallace');
    detectiveDiv.classList.remove('hidden');
    assistantDiv.classList.remove('hidden');
    playerSpeechElement.classList.remove('hidden');
    evidence.classList.remove('hidden');
    wallace = true;
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
  } else {
    mainBackground.style.backgroundImage = 'url("../img/airship 1.png")';
    wallaceDiv.style.gridArea = '2 / 5 / 3 / 6';
    revertChanges();
    detectiveDiv.classList.add('hidden');
    assistantDiv.classList.add('hidden');
    playerSpeechElement.classList.add('hidden');
    evidence.classList.add('hidden');
    wallaceDiv.removeEventListener('click', wallaceClick);
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
  }
}

function leonardClick() {
  if (leonard === false) {
    mainBackground.style.backgroundImage = 'url("../img/airship 7.png")';
    leonardDiv.style.gridArea = '2 / 2 / 3 / 3';
    hideImages('leonard');
    detectiveDiv.classList.remove('hidden');
    assistantDiv.classList.remove('hidden');
    playerSpeechElement.classList.remove('hidden');
    evidence.classList.remove('hidden');
    leonard = true;
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
  } else {
    mainBackground.style.backgroundImage = 'url("../img/airship 1.png")';
    leonardDiv.style.gridArea = '2 / 6 / 3 / 7';
    revertChanges();
    detectiveDiv.classList.add('hidden');
    assistantDiv.classList.add('hidden');
    playerSpeechElement.classList.add('hidden');
    evidence.classList.add('hidden');
    leonardDiv.removeEventListener('click', leonardClick);
    askForAlibiButton.addEventListener('click', alibiClick);
    searchForEvidenceButton.addEventListener('click', evidenceClick);
  }
}

function alibiClick() {
  askForAlibiButton.removeEventListener('click', alibiClick);
  searchForEvidenceButton.removeEventListener('click', evidenceClick);
  if (clara === true) {
    displayConversation(claraDeveraux.alibiConversation);
    user.claraAlibi = claraDeveraux.additionalAlibi;
    user.Clara = true;
    user.updateLocalStorage();
  }  
}

function evidenceClick() {
  askForAlibiButton.removeEventListener('click', alibiClick);
  searchForEvidenceButton.removeEventListener('click', evidenceClick);
  if (clara === true ) {
    displayConversation(claraDeveraux.evidenceConversation);
    user.claraEvidence = claraDeveraux.additionalEvidence;
    user.Clara = true;
    user.updateLocalStorage();
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
  additionalEvidence: 'Clearly disgruntled by my interview, the paint chips are allegedly from a piece she did to network herself more commissions. There is also a sketch of the stolen painting found in her sketchbook, suggesting she had a keen interest in it, but enough of an interest to steal it? Her resentment toward Van is palpable, but her artistic admiration for the stolen painting makes her involvement in its theft implausible.',

  alibi: 'Was seen in the dining area before the estimated time of the murder, but not eating.',
  additionalAlibi: 'She claims she was at the dinner party until near midnight then retired to her room, naming the Steward as an alibi. My assistant interviewed him and he corroborates her story. She noted that he seemed honest, and we have no reason at this time to believe he\'s being untruthful. She left me with a cryptic warning as I left, she may know more than she\'s leading on.',

  assistantNotes: 'Clara held a grudge against Van for trying to ruin her career. Is that enough of a motive? And does she have a strong alibi?',

  accusationExplanation: 'Clara\'s resentment towards Van is clear, and her interest in the painting is undeniable. However, she has a strong alibi. The steward vouches for her presence in her quarters during the estimated time of the murder. As well as her passion for art which seems more towards creation rather than destruction or theft. Her guilt is highly unlikely.',

  evidenceConversation: [
    'Det. Blythe: Good morning, Miss Deveraux, do you mind if I asked you some questions, maybe take a look around your quarters? I\'m sure you\'ve heard about what happened last night.',
    'I did hear, what a tragic loss. And certainly, make yourself at home, it seems you\'re going to regardless.',
    'Det. Blythe: Can you explain those paint chips on your dress to me? It appears you\'ve been handling a dry painting.',
    'Oh my, what a keen eye... but maybe not so much a keen mind? I\'m a struggling artist darling... I\'ve got to pay my way somehow, after Van tried to destroy my career.',
    'Det. Blythe: Paying your way by stealing priceless paintings, maybe?',
    'Hardly... I heard Alexander Petrov was going to be aboard, and since he\'s on the committee overseeing the new National Art Exhibit I figured I could grease the wheels to get prime space of the gallery. So I did a portrait of his wife and daughter.',
    'Det. Blythe: Why is there a sketch of the stolen painting in your sketchbook then?',
    'It\'s a beautiful piece, and even I need inspiration sometimes. Do you have anymore inane questions, detective?',
    'Det. Blythe: That\'s all for now, thank-you for your time Miss Deveraux.',
    'Can\'t say it\'s been a pleasure.',
  ],
  alibiConversation: [
    'Det. Blythe: Good morning, Miss Deveraux, do you mind if I asked you some questions? I\'m sure you\'ve heard about what happened last night.',
    'I did hear, what an awful and tragic loss... I suppose.',
    'Det. Blythe: Yes, I\'ve heard you\'re not a fan of Leonard. That being said, can you explain your whereabouts last night Miss Deveraux?',
    'I was mingling in the dining hall, keeping up appearances of course. Then retired to my quarters around midnight.',
    'Det. Blythe: Can anyone vouch for you\'r whereabouts after you left the party?',
    'I\'m sure the steward would recall, maybe ask him? He escorted me back.',
    'Det. Blythe: Thank you for your cooperation, Miss Deveraux.',
    'I don\'t think this clears me of any suspicion, does it?... Leonard Van is hardly the man he portrays to everyone else. I\'m sure you\'ll see that soon enough.',
  ],

};


// // Clara HTML Buttons

// // Event Listeners for Clara's HTML Buttons

// const askForAlibiButton = document.getElementById('askForAlibi');
// const searchForEvidenceButton = document.getElementById('searchForEvidence');
// const accuseClaraButton = document.getElementById('accuseClara');

// document.getElementById('askForAlibiButton').addEventListener('click', function() {
//   claraDeveraux.displayConversation(claraDeveraux.alibiConversation);
// });

// document.getElementById('searchForEvidenceButton').addEventListener('click', function() {
//   claraDeveraux.displayConversation(claraDeveraux.evidenceConversation);
// });

  // Displays the conversation based on the question asked

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
      const typeInterval = 25; // Delay between typing each character
  
      const typeWriter = setInterval(() => {
        if (charIndex < line.length) {
          newLineElement.textContent += line[charIndex];
          charIndex++;
        } else {
          clearInterval(typeWriter);
          setTimeout(displayNextLine, 1000); // Delay of 1 seconds before displaying the next line
        }
      }, typeInterval);
    }
  }
}
