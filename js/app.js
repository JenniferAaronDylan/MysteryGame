
'use strict'

// User Constructor
// To Do.  In submission handler for username, check local storage.  If username exists, start game from previous state.

function User(username){
  this.username = username;
  this.Clara = false;
  this.Marguerite = false;
  this.Alexander = false;
  this.Jonathan = false;
  this.Wallace = false;
  this.Leonard = false;
}

































































































// Character Objects

const claraDeveraux = {
  firstName: 'Clara',
  lastName: 'Deveraux',
  fullName: 'Clara Deveraux',
  role: 'Disgruntled Artist',
  image: '/img/clara.png',
  assistantNotes: true,
  evidenceUpdate: false,
  evidenceNotesUpdate: false,
  alibiUpdate: false,
  alibiNotesUpdate: false,
  accusationMade: false,
  
  evidence: 'Found paint chips on her dress that match the color palette of the stolen painting.',
  additionalEvidence: 'Clearly disgruntled by my interview, the paint chips are allegedly from a piece she did to network herself more commissions. There is also a sketch of the stolen painting found in her sketchbook, suggesting she had a keen interest in it, but enough of an interest to steal it? Her resentment toward Van Dyke is palpable, but her artistic admiration for the stolen painting makes her involvement in its theft implausible.',

  alibi: 'Was seen in the dining area before the estimated time of the murder, but not eating.',
  additionalAlibi: 'She claims she was at the dinner party until near midnight then retired to her room, naming the Steward as an alibi. My assistant interviewed him and he corroborates her story. She noted that he seemed honest, and we have no reason at this time to believe he\'s being untruthful. She left me with a cryptic warning as I left, she may know more than she\'s leading on.',

  assistantNotes: 'Clara held a grudge against Van Dyke for trying to ruin her career. Is that enough of a motive? And does she have a strong alibi?',

  accusationExplanation: 'Clara\'s resentment towards Van is clear, and her interest in the painting is undeniable. However, she has a strong alibi. The steward vouches for her presence in her quarters during the estimated time of the murder. As well as her passion for art which seems more towards creation rather than destruction or theft. Her guilt is highly unlikely.',
  
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
  evidenceConversation: [
    'Good morning, Miss Deveraux, do you mind if I asked you some questions, maybe take a look around your quarters? I\'m sure you\'ve heard about what happened last night.',
    'I did hear, what a tragic loss. And certainly, make yourself at home, it seems you\'re going to regardless.',
    'Can you explain those paint chips on your dress to me? It appears you\'ve been handling a dry painting.',
    'Oh my, what a keen eye... but maybe not so much a keen mind? I\'m a struggling artist darling... I\'ve got to pay my way somehow, after Van Dyke tried to destroy my career.',
    'Paying your way by stealing priceless paintings, maybe?',
    'Hardly... I heard Alexander Petrov was going to be aboard, and since he\'s on the committee overseeing the new National Art Exhibit I figured I could grease the wheels to get prime space of the gallery. So I did a portrait of his wife and daughter.',
    'Why is there a sketch of the stolen painting in your sketchbook then?',
    'It\'s a beautiful piece, and even I need inspiration sometimes. Do you have anymore inane questions, detective?',
    'That\'s all for now, thank-you for your time Miss Deveraux.',
    'Can\'t say it\'s been a pleasure.',
  ],
  alibiConversation: [
    'Good morning, Miss Deveraux, do you mind if I asked you some questions? I\'m sure you\'ve heard about what happened last night.',
    'I did hear, what an awful and tragic loss... I suppose.',
    'Yes, I\'ve heard you\'re not a fan of Leonard. That being said, can you explain your whereabouts last night Miss Deveraux?',
    'I was mingling in the dining hall, keeping up appearances of course. Then retired to my quarters around midnight.',
    'Can anyone vouch for you\'r whereabouts after you left the party?',
    'I\'m sure the steward would recall, maybe ask him? He escorted me back.',
    'Thank you for your cooperation, Miss Deveraux.',
    'I don\'t think this clears me of any suspicion, does it?... Leonard Van Dyke is hardly the man he portrays to everyone else. I\'m sure you\'ll see that soon enough.',
  ],
  displayConversation: function(conversation) {
    const playerSpeechElement = document.getElementById('playerSpeech');
    const characterSpeechElement = document.getElementById('characterSpeech');
    playerSpeechElement.textContent = '';
    characterSpeechElement.textContent = '';
  
    let index = 0;
    const displayNextLine = () => {
      if (index < conversation.length) {
        const line = conversation[index];
        const speaker = line.split(':')[0].trim();
        const speech = line.split(':')[1].trim();
        if (speaker === 'Player') {
          playerSpeechElement.textContent += speech + ' ';
        } else {
          characterSpeechElement.textContent += speech + ' ';
        }
        index++;
        setTimeout(displayNextLine, getRandomDelay()); // Adjust the delay time as needed
      }
    };
  
    displayNextLine();
  },
}
// natural speech pattern generator



// Clara HTML Buttons
<div>
<button id="askForAlibiButton">Ask about Alibi</button>
<button id="searchForEvidenceButton">Search for Evidence</button>
<div id="conversation">
  <p id="playerSpeech"></p>
  <p id="characterSpeech"></p>
</div>
</div>

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

document.getElementById('askForAlibiButton').addEventListener('click', function() {
  claraDeveraux.displayConversation(claraDeveraux.alibiConversation);
});

document.getElementById('searchForEvidenceButton').addEventListener('click', function() {
  claraDeveraux.displayConversation(claraDeveraux.evidenceConversation);
});

