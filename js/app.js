
'use strict'

// Globals
const user = getUser();
const mainBackground = document.querySelector('main');
const claraDiv = document.getElementById('clara');
const detectiveDiv= document.getElementById('detective');
const assistantDiv = document.getElementById('assistant');

let clara = false;

claraDiv.addEventListener('click', claraClick)

// User Constructor
// To Do.  In submission handler for username, check local storage.  If username exists, start game from previous state.

function User(userName){
  this.userName = userName;
  this.Clara = false;
  this.Marguerite = false;
  this.Alexander = false;
  this.Jonathan = false;
  this.Wallace = false;
  this.Leonard = false;
}

User.prototype.updateLocalStorage = function() {
  
  let stringifiedUser = JSON.stringify(this);
  localStorage.setItem('currentUser', stringifiedUser);

}

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
    clara = true;
  } else {
    mainBackground.style.backgroundImage = 'url("../img/airship 1.png")';
    claraDiv.style.gridArea = '2 / 1 / 3 / 2';
    revertChanges();
    detectiveDiv.classList.add('hidden');
    assistantDiv.classList.add('hidden');
    claraDiv.removeEventListener('click', claraClick);
  }
}

































































































// Character Objects

const claraDeveraux = {
  name: 'Clara Deveraux',
  role: 'Disgruntled Artist',
  image: '/imgs/clara.jpg',
  evidenceUpdate: false,
  evidenceNotesUpdate: false,
  alibiUpdate: false,
  alibiNotesUpdate: false,
  accusationMade: false,
  
  evidence: 'Found paint stains on her dress that match the color palette of the stolen painting.',
  additionalEvidence: 'A sketch of the stolen painting was found in her sketchbook, suggesting she had a keen interest in it.',
  let conversation = "",

conversation += "Player: Can you explain the paint stains on your dress?\n";
conversation += "Clara: Those paint stains? It's from my recent art project. No connection to the stolen painting, I assure you.\n";
conversation += "Player: I also found a sketch of the stolen painting in your sketchbook. Care to explain?\n";
conversation += "Clara: Ah, that sketch. It's just an artistic study. I'm fascinated by the painting, but I had no involvement in its theft.\n";


  alibi: 'Was seen in the dining area before the estimated time of the murder, but not eating.',
  additionalAlibi: 'A steward recalls delivering room service to her during the estimated time of the crime.',

  notes: 'Clara held a grudge against Van for ruining her career. Does she have motive? Or a strong alibi?',

  evidenceNotesUpdate: 'Clara\'s resentment toward Van is palpable, but her artistic admiration for the stolen painting makes her involvement in its theft implausible.',

  alibiNotesUpdate: 'She has a strong alibi. The steward vouches for her presence in her quarters during the estimated time of the murder ',

  accusationExplanation: 'Clara\'s resentment towards Van is clear, and her interest in the painting is undeniable. However, she has a strong alibi. The steward vouches for her presence in the dining area during the estimated time of the murder. As well as her passion for art seems more towards creation rather than destruction or theft. Her guilt is highly unlikely.',
  
  unlockResponse: function(question) {
    if (question === 'askForAlibi') {
      this.alibiUpdate = true;
    } else if (question === 'searchForEvidence') {
      this.evidenceUpdate = true;
    }
  },
  updateAccusationStatus: function(accused) {
    if (accused) {
      this.accusationMade = true;
    }
  },
};

// Clara HTML Buttons

<button id="askForAlibi">Ask for Alibi</button>
<button id="searchForEvidence">Search for Evidence</button>
<button id="accuseClara">Accuse Clara</button>

// Event Listeners for Clara's HTML Buttons

const askForAlibiButton = document.getElementById('askForAlibi');
const searchForEvidenceButton = document.getElementById('searchForEvidence');
const accuseClaraButton = document.getElementById('accuseClara');

askForAlibiButton.addEventListener('click', function() {
  claraDeveraux.unlockResponse('askForAlibi');
});

searchForEvidenceButton.addEventListener('click', function() {
  claraDeveraux.unlockResponse('searchForEvidence');
});

accuseClaraButton.addEventListener('click', function() {
  claraDeveraux.updateAccusationStatus(true);
});

