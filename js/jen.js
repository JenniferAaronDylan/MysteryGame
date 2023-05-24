'use strict';

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

  accusationExplanation: 'Clara\'s resentment towards Van is clear, and her interest in the painting is undeniable. However, she has a strong alibi. The steward vouches for her presence in her quarters during the estimated time of the murder. As well as her passion for art which seems more towards creation rather than destruction or theft. Her guilt is highly unlikely.',

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

  // Displays the conversation based on the question asked
  displayConversation: function(conversation) {
    const playerSpeechElement = document.getElementById('playerSpeech');
    const characterSpeechElement = document.getElementById('characterSpeech');
    playerSpeechElement.textContent = '';
    characterSpeechElement.textContent = '';
  
    let index = 0;
  
    function displayNextLine() {
      if (index < conversation.length) {
        if (index % 2 === 0) {
          playerSpeechElement.textContent += conversation[index];
        } else {
          characterSpeechElement.textContent += conversation[index];
        }
        index++;
        setTimeout(displayNextLine, getRandomDelay());
      }
    }
    displayNextLine();
  },
};

// Natural speech pattern generator
function getRandomDelay() {
  return Math.floor(Math.random() * 1000) + 500;
}


// Event Listeners for Clara's HTML Buttons

const askForAlibiButton = document.getElementById('askForAlibi');
const searchForEvidenceButton = document.getElementById('searchForEvidence');
const accuseClaraButton = document.getElementById('accuseClara');

document.getElementById('askForAlibiButton').addEventListener('click', function() {
  claraDeveraux.displayConversation(claraDeveraux.alibiConversation);
});

document.getElementById('searchForEvidenceButton').addEventListener('click', function() {
  claraDeveraux.displayConversation(claraDeveraux.evidenceConversation);
});



//LOG BOOK BUTTON
let logBookButton = document.getElementById('logbook');
logBookButton.addEventListerner('click', displayClaraEvidence);


// CLOSE BUTTON: NEED TO FIX
function closeContainer() {
  const logbookContainer = document.getElementById('logbookcontainer');
  const logbookClara = document.getElementById('logbookClara');
  logbookContainer.classList.add('hidden');

}






// END OF CHARACTER OBJECTS

// Clara's evidence
function displayClaraEvidence() {
  let logbookClara = document.getElementById('logbookClara');
  let evidenceList = document.createElement('ul');
  let evidenceItem1 = document.createElement('li');
  let evidenceItem2 = document.createElement('li');

  evidenceItem1.textContent = claraDeveraux.evidence;
  evidenceItem2.textContent = claraDeveraux.additionalEvidence;

  evidenceList.appendChild(evidenceItem1);
  evidenceList.appendChild(evidenceItem2);

  logbookClara.innerHTML = '';
  logbookClara.appendChild(evidenceList);
  logbookClara.classList.remove('hidden');
}


// logbook button for Clara
let logbookButton = document.getElementById('logbook');
logbookButton.addEventListener('click', displayClaraEvidence);

// Ask for Alibi button
let askForAlibiButton = document.getElementById('askForAlibi');
askForAlibiButton.addEventListener('click', function() {
  claraDeveraux.unlockResponse('askForAlibi');
});

// Search for Evidence button
let searchForEvidenceButton = document.getElementById('searchForEvidence');
searchForEvidenceButton.addEventListener('click', function() {
  claraDeveraux.unlockResponse('searchForEvidence');
});













// logbook button for clara
// let logbookButton = document.getElementById('logbook');
// logbookButton.addEventListener('click', displayClaraEvidence);

// let askForAlibiButton = document.getElementById('askForAlibi');

// askForAlibiButton.addEventListener('click', function() {
//   let alibiText = claraDeveraux.alibi;
//   let additionalAlibiText = claraDeveraux.additionalAlibi;

//   console.log(alibiText);
//   console.log(additionalAlibiText);
// });




// // Character Objects




// // Character Objects


// const claraDeveraux = {
//   name: 'Clara Deveraux',
//   role: 'Disgruntled Artist',
//   image: '/imgs/clara.jpg',
//   evidenceUpdate: false,
//   evidenceNotesUpdate: false,
//   alibiUpdate: false,
//   alibiNotesUpdate: false,
//   accusationMade: false,
  
//   evidence: 'Found paint stains on her dress that match the color palette of the stolen painting.',
//   additionalEvidence: 'A sketch of the stolen painting was found in her sketchbook, suggesting she had a keen interest in it.',

//   alibi: 'Was seen in the dining area before the estimated time of the murder, but not eating.',
//   additionalAlibi: 'A steward recalls delivering room service to her during the estimated time of the crime.',

//   notes: 'Clara held a grudge against Van for ruining her career. Does she have motive? Or a strong alibi?',

//   evidenceNotesUpdate: 'Clara\'s resentment toward Van is palpable, but her artistic admiration for the stolen painting makes her involvement in its theft implausible.',

//   alibiNotesUpdate: 'She has a strong alibi. The steward vouches for her presence in her quarters during the estimated time of the murder.',

//   accusationExplanation: 'Clara\'s resentment towards Van is clear, and her interest in the painting is undeniable. However, she has a strong alibi. The steward vouches for her presence in the dining area during the estimated time of the murder. As well as her passion for art seems more towards creation rather than destruction or theft. Her guilt is highly unlikely.',
  
//   unlockResponse: function(question) {
//     if (question === 'askForAlibi') {
//       this.alibiUpdate = true;
//     } else if (question === 'searchForEvidence') {
//       this.evidenceUpdate = true;
//     }
//   },
//   updateAccusationStatus: function(accused) {
//     if (accused) {
//       this.accusationMade = true;
//     }
//   },
// };




// // NEW: Function to update the logbook with a new entry
// function updateLogbook(entry) {
//   const logbookEntries = document.getElementById('logbookEntries');
//   const logEntry = document.createElement('li');
//   logEntry.textContent = entry;
//   logbookEntries.appendChild(logEntry);
// }




// // END OF CHARACTER OBJECTS

// // Clara's evidence
// function displayClaraEvidence() {
//   let logbookClara = document.getElementById('logbookClara');
//   let evidenceList = document.createElement('ul');
//   let evidenceItem1 = document.createElement('li');
//   let evidenceItem2 = document.createElement('li');

//   evidenceItem1.textContent = claraDeveraux.evidence;
//   evidenceItem2.textContent = claraDeveraux.additionalEvidence;

//   evidenceList.appendChild(evidenceItem1);
//   evidenceList.appendChild(evidenceItem2);

//   logbookClara.innerHTML = '';
//   logbookClara.appendChild(evidenceList);
//   logbookClara.classList.remove('hidden');


//   // NEW: Add entry to logbook
//   updateLogbook("Clara's evidence reviewed");
// }

// // logbook button for clara
// // let logbookButton = document.getElementById('logbook');
// // logbookButton.addEventListener('click', displayClaraEvidence);

// // let askForAlibiButton = document.getElementById('askForAlibi');

// // askForAlibiButton.addEventListener('click', function() {
// //   let alibiText = claraDeveraux.alibi;
// //   let additionalAlibiText = claraDeveraux.additionalAlibi;

// //   console.log(alibiText);
// //   console.log(additionalAlibiText);

// const logbookButton = document.getElementById('logbook');
// logbookButton.addEventListener('click', displayClaraEvidence);

// const askForAlibiButton = document.getElementById('askForAlibi');

// askForAlibiButton.addEventListener('click', function() {
//   claraDeveraux.unlockResponse('askForAlibi');

//   updateLogbook("Asked for Clara's alibi");

// });
