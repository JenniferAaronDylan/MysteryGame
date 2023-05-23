'use strict'



// CLOSE BUTTON: NEED TO FIX
function closeContainer() {
  const logbookContainer = document.getElementById('logbookcontainer');
  const logbookClara = document.getElementById('logbookClara');
  logbookContainer.classList.add('hidden');

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

  alibi: 'Was seen in the dining area before the estimated time of the murder, but not eating.',
  additionalAlibi: 'A steward recalls delivering room service to her during the estimated time of the crime.',

  notes: 'Clara held a grudge against Van for ruining her career. Does she have motive? Or a strong alibi?',

  evidenceNotesUpdate: 'Clara\'s resentment toward Van is palpable, but her artistic admiration for the stolen painting makes her involvement in its theft implausible.',

  alibiNotesUpdate: 'She has a strong alibi. The steward vouches for her presence in her quarters during the estimated time of the murder.',

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
