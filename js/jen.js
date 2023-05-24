// 'use strict'

// const user = getUser();
// const mainBackground = document.querySelector('main');
// const claraDiv = document.getElementById('clara');
// const margueriteDiv = document.getElementById('marguerite');
// const alexanderDiv = document.getElementById('alexander');
// const jonathanDiv = document.getElementById('jonathan');
// const wallaceDiv = document.getElementById('wallace');
// const leonardDiv = document.getElementById('leonard');
// const detectiveDiv= document.getElementById('detective');
// const assistantDiv = document.getElementById('assistant');

// let clara = false;
// let marguerite = false;
// let alexander = false;
// let jonathan = false;
// let wallace = false;
// let leonard = false;

// //For logbook
// const logbook = [];

// claraDiv.addEventListener('click', claraClick);
// margueriteDiv.addEventListener('click', margueriteClick);
// alexanderDiv.addEventListener('click', alexanderClick);
// jonathanDiv.addEventListener('click', jonathanClick);
// wallaceDiv.addEventListener('click', wallaceClick);
// leonardDiv.addEventListener('click', leonardClick);


// Character Objects

// const claraDeveraux = {
//   firstName: 'Clara',
//   lastName: 'Deveraux',
//   fullName: 'Clara Deveraux',
//   role: 'Disgruntled Artist',
//   image: '../img/clara.png',

//   evidence: 'Found paint chips on her dress that match the color palette of the stolen painting.',
//   additionalEvidence: 'Clearly disgruntled by my interview, the paint chips are allegedly from a piece she did to network herself more commissions. There is also a sketch of the stolen painting found in her sketchbook, suggesting she had a keen interest in it, but enough of an interest to steal it? Her resentment toward Van is palpable, but her artistic admiration for the stolen painting makes her involvement in its theft implausible.',

//   alibi: 'Was seen in the dining area before the estimated time of the murder, but not eating.',
//   additionalAlibi: 'She claims she was at the dinner party until near midnight then retired to her room, naming the Steward as an alibi. My assistant interviewed him and he corroborates her story. She noted that he seemed honest, and we have no reason at this time to believe he\'s being untruthful. She left me with a cryptic warning as I left, she may know more than she\'s leading on.',

//   assistantNotes: 'Clara held a grudge against Van for trying to ruin her career. Is that enough of a motive? And does she have a strong alibi?',

//   accusationExplanation: 'Clara\'s resentment towards Van is clear, and her interest in the painting is undeniable. However, she has a strong alibi. The steward vouches for her presence in her quarters during the estimated time of the murder. As well as her passion for art which seems more towards creation rather than destruction or theft. Her guilt is highly unlikely.',

//   evidenceConversation: [
//     'Det. Blythe: Good morning, Miss Deveraux, do you mind if I asked you some questions, maybe take a look around your quarters? I\'m sure you\'ve heard about what happened last night.',
//     'I did hear, what a tragic loss. And certainly, make yourself at home, it seems you\'re going to regardless.',
//     'Det. Blythe: Can you explain those paint chips on your dress to me? It appears you\'ve been handling a dry painting.',
//     'Oh my, what a keen eye... but maybe not so much a keen mind? I\'m a struggling artist darling... I\'ve got to pay my way somehow, after Van tried to destroy my career.',
//     'Det. Blythe: Paying your way by stealing priceless paintings, maybe?',
//     'Hardly... I heard Alexander Petrov was going to be aboard, and since he\'s on the committee overseeing the new National Art Exhibit I figured I could grease the wheels to get prime space of the gallery. So I did a portrait of his wife and daughter.',
//     'Det. Blythe: Why is there a sketch of the stolen painting in your sketchbook then?',
//     'It\'s a beautiful piece, and even I need inspiration sometimes. Do you have anymore inane questions, detective?',
//     'Det. Blythe: That\'s all for now, thank-you for your time Miss Deveraux.',
//     'Can\'t say it\'s been a pleasure.',
//   ],
//   alibiConversation: [
//     'Det. Blythe: Good morning, Miss Deveraux, do you mind if I asked you some questions? I\'m sure you\'ve heard about what happened last night.',
//     'I did hear, what an awful and tragic loss... I suppose.',
//     'Det. Blythe: Yes, I\'ve heard you\'re not a fan of Leonard. That being said, can you explain your whereabouts last night Miss Deveraux?',
//     'I was mingling in the dining hall, keeping up appearances of course. Then retired to my quarters around midnight.',
//     'Det. Blythe: Can anyone vouch for you\'r whereabouts after you left the party?',
//     'I\'m sure the steward would recall, maybe ask him? He escorted me back.',
//     'Det. Blythe: Thank you for your cooperation, Miss Deveraux.',
//     'I don\'t think this clears me of any suspicion, does it?... Leonard Van is hardly the man he portrays to everyone else. I\'m sure you\'ll see that soon enough.',
//   ],

// };



// const margueriteFontaine = {
//   firstName: 'Marguerite',
//   lastName: 'Fontaine',
//   fullName: 'Marguerite Fontaine',
//   role: 'Disgruntled Artist',
//   image: '../img/marguerite.png',

//   evidence: 'Found a document revealing that Marguerite had a large debt to Van',
//   additionalEvidence: 'Marguerite maintains her innocence, stating she has no reason to harm Leonard despite their differences and the alleged debt. Marguerite denies any knowledge of the broken pearl necklace found near Leonard Van\'s room, claiming it was one of her missing necklaces and that she may be being framed.',

//   alibi: 'No one saw Marguerite during the estimated time of the crime.',
//   additionalAlibi: 'Marguerite refused to disclose her whereabouts, asserting her right to privacy. Her lack of cooperation does seem suspicious but she asserts the investigation into her as a wild goose chase. Maybe she was up to something else entirely?',

//   assistantNotes: 'Given the sizeable debt and broken necklace, Mrs. Fontaine may have motive and may have been at the scene of the crime. But her small frame seems unlikely for such a gruesome murder, accomplices?',

//   evidenceConversation: [
//     'Det. Blythe: Morning Mrs. Fontaine I\'m Detective Blythe, I hate to bother you at such an early hour but may I ask you some questions about last night?',
//     'Marguerite: Why certainly Mr. Detective, anything you need, and you can call me Marge.',
//     'Det. Blythe: Well thank-you, Marge... can you shed some light on this broken pearl necklace found near Leonard Van\'s room? I\'m sure you\'ve heard by now. It seems quite peculiar, doesn\'t it?',
//     'Marguerite: Oh, dear! That\'s one of my pearl necklaces! How on earth did it end up there? I had no idea it was missing.',
//     'Det. Blythe: You weren\'t near Mr. Van\'s quarters last night?',
//     'Marguerite: Heavens no, I want nothing to do with him. This zeppelin has its fair share of unsavory characters. Perhaps one of them targeted me? But why would anyone go to such lengths?',
//     'Det. Blythe: Would that aversion have anything to do with your sizeable debt to the Van estate?',
//     'Marguerite: My-My! Now, how would you know anything about that Mr. Blythe? Your assistant here gone sleuthing?',
//     'Det. Blythe: So you have no idea who may have harmed Mr. Van, nor why your necklace was found by his quarters?',
//     'Marguerite: I have no reason to harm Leonard, despite our differences or the supposed debt. I trust you\'ll find the real culprit. I\'m done answering questions now Detective, have a good day.',
//     'Det. Blythe: Thank you for your time, Marge',
//     'Marguerite: It\'s Mrs. Fontaine.',
//   ],

//   alibiConversation: [
//     'Det. Blythe: Morning Mrs. Fontaine I\'m Detective Blythe, I hate to bother you at such an early hour but may I ask you some questions about last night?',
//     'Marguerite: Why certainly Mr. Detective, anything you need, and you can call me Marge.',
//     'Det. Blythe: Well thank-you, Marge... I\'d like to ask your whereabouts around midnight last night. It may help our investigation.',
//     'Marguerite: Why is that relevant, Blythe? I fail to see how my whereabouts at that specific time are of any significance to you.',
//     'Det. Blythe: Please understand the gravity of the situation. Leonard\'s murder occurred around that time, and we need to establish everyone\'s movements to to establish the events, and eliminate suspects.',
//     'Marguerite: I assure you Blythe, I am no suspect. I had no involvement in Leonard\'s murder. However, I value my privacy and do not feel obligated to disclose my exact whereabouts to you or anyone else.',
//     'Det. Blythe: Your refusal to share this information only raises suspicions. If you have nothing to hide, why not be forthcoming?',
//     'Marguerite: I have nothing to hide, but that doesn\'t mean I have to reveal every detail of my personal life to satisfy your curiosity.',
//     'Det. Blythe: The investigation will continue, and if there\'s any evidence or information that links you to Leonard\'s murder, it will come to light.',
//     'Marguerite: You\'ll find nothing regarding me on your wild goose chase so don\'t waste your time.',
//   ],

//   accusationExplanation: 'Marguerite indeed had a financial motive, and the broken pearl necklace found at the crime scene does raise suspicions. However, let us carefully consider this perplexing puzzle. The presence of the necklace might be nothing more than a clever ruse, intended to divert our attention from the true perpetrator, and she wasn\'t seen anywhere, by anyone, the night of the murder. No, my dear friends, Marguerite may be entangled in a web of her own misdeeds, but the threads connecting her to this particular crime remain tenuous at best.'

// };

// const alexanderPetrov = {
//   firstName: 'Alexander',
//   lastName: 'Petrov',
//   fullName: 'Alexander Petrov',
//   role: 'Foreign Diplomat',
//   image: '../img/alexander.png',

//   evidence: 'Found a letter in Petrov\'s quarters hinting at a dispute over a diplomatic matter with Van Dyke.',
//   additionalEvidence: 'Alexander denies any involvement in the murder and maintains his innocence. The stolen painting is one of the artworks currently in dispute between him and Van Dyke. We have no concrete evidence linking Petrov to the crime at this point, but his behavior raises suspicions. He left me with a cryptic note about Van Dyke not being as he appears, maybe Van Dyke\'s son will know more?',

//   alibi: 'Alexander was seen chatting with the zeppelin\'s captain some time before the murder. They were both part of opposing forces during the war, why they would meet let alone conversate with one another is beyond me.',
//   additionalAlibi: 'Petrov claims to have indeed had a conversation with Captain Wallace before the murder. The meeting was an opportunity for mutual respect after being adversaries during the war. No witnesses can confirm the interaction, but it appears unrelated to the crime. There are no witnesses to Alexander\'s whereabouts after he left the bridge.',

//   assistantNotes: 'Maybe we should look into the involvement in diplomatic affairs and any potential conflicts or disagreements he had with Leonard Van Dyke. Gather more details about the nature of the dispute mentioned in the letter found in Petrov\'s quarters. Or maybe inquire about the conversation between Petrov and the zeppelin\'s captain. Determine the purpose and content of their discussion, and ascertain if it has any relevance to the murder.',

//   evidenceConversation: [
//     'Det. Blythe: Good morning, Mr. Petrov. I\'m Detective Blythe. I hope I\'m not interrupting anything, but I have a few questions to ask you regarding last night\'s events.',
//     'Alexander: Good morning, Detective Blythe. Please, go ahead. I\'ll do my best to assist you.',
//     'Det. Blythe: During our investigation, my assistant found some letters in your cabin that mentioned a diplomatic issue with Leonard Van Dyke. Can you shed some light on that?',
//     'Alexander: Make a habit of sleuthing through people\'s belongings Mr. Blythe? The diplomatic matter pertains to an ownership dispute over certain artworks that Leonard Van Dyke possesses. My country believes that these artworks rightfully belong to us, as they hold significant cultural and historical value. He refuses to return or sell them, after he stole them.',
//     'Det. Blythe: So, it\'s an ownership dispute over the paintings? Surely, an ownership dispute wouldn\'t be reason enough for someone to resort to murder, right?',
//     'Petrov: Absolutely not, Detective. While the dispute is undoubtedly a source of tension, it would never justify such a heinous act. I maintain my innocence, and I assure you that I had no involvement in Leonard\'s untimely demise.',
//     'Det. Blythe: And yet, the painting stolen after Van Dyke\'s murder is precisely one of those paintings he allegedly refused to return, is it not?',
//     'Alexander: I understand your line of questioning, but I assure you that my pursuit of these artworks is within the bounds of international law and diplomatic negotiations. I am not involved in any criminal activities or acts of violence. And a final word of warning Detective, Leonard Van Dyke was not the man he appeared to be.',
//     'Det. Blythe: Very well, Mr. Petrov. We will continue our investigation elsewhere. If there\'s any further information or evidence that comes to light, we may need to speak again. Thank you for your time.',
//   ],

//   alibiConversation: [
//     'Det. Blythe: Good morning, Mr. Petrov. I\'m Detective Blythe. I hope I\'m not interrupting anything, but I have a few questions to ask you regarding last night\'s events.',
//     'Alexander: Good morning, Detective Blythe. Please, go ahead. I\'ll do my best to assist you.',
//     'Det. Blythe: Mr. Petrov, I\'d like to discuss your whereabouts last night? Chatting with Capt. Wallace?',
//     'Alexander: Certainly, Detective. I was indeed seen chatting with Capt. Wallace, last night on the bridge.',
//     'Det. Blythe: You two were enemies during the war, what business would you have with Capt. Wallace?',
//     'Alexander: During the war, Captain Wallace and I were indeed adversaries. However, it has been some time since the war ended, I felt it necessary to meet the man who had caused us so much trouble face-to-face, not as enemies, but as individuals who shared the horrors of war. It was a show of mutual respect. I also wanted to know why he choose to be a pilot, a man as decorated as himself surely could have gone on to do anything more productive than flying this... blimp.',
//     'Det. Blythe: Did you meet or speak to anyone once you retired for the night?',
//     'Alexander: No Detective, but I went straight to cabin, and then to bed.',
//     'Det. Blythe: Blythe: Understood. Thank you for your cooperation, Mr. Petrov.',
//     'Alexander: Thank you, Detective.'
//   ],

//   accusationExplanation: 'While the evidence may initially raise suspicions about Alexander Petrov\'s involvement in Van Dyke\'s murder, a closer examination reveals inconsistencies. Although Alexander had a diplomatic dispute with Leonard over the ownership of certain paintings, it does not provide a sufficient motive for murder. There is no concrete evidence linking Alexander to the actual theft, also Alexander\'s alibi for the night of the murder is supported by his interaction with Captain Wallace, with whom he shared a history of wartime conflict. Their meeting was an act of reconciliation, unrelated to Leonard\'s murder although politicians have a knack for lying and this could be an attempt by both him and Capt. Wallace to pull at the heart strings and quell suspicions. Additionally, there are no witnesses or substantial evidence placing Alexander at the scene of the crime. ',
// };



// const jonathan = {
//   firstName: 'jonathan',
//   lastName: 'Deveraux',
//   fullName: 'jonathan',
//   role: 'Disgruntled Artist',
//   image: '../img/clara.png',

//   evidence: 'Found paint chips on her dress that match the color palette of the stolen painting.',
//   additionalEvidence: 'Clearly disgruntled by my interview, the paint chips are allegedly from a piece she did to network herself more commissions. There is also a sketch of the stolen painting found in her sketchbook, suggesting she had a keen interest in it, but enough of an interest to steal it? Her resentment toward Van is palpable, but her artistic admiration for the stolen painting makes her involvement in its theft implausible.',

//   alibi: 'Was seen in the dining area before the estimated time of the murder, but not eating.',
//   additionalAlibi: 'She claims she was at the dinner party until near midnight then retired to her room, naming the Steward as an alibi. My assistant interviewed him and he corroborates her story. She noted that he seemed honest, and we have no reason at this time to believe he\'s being untruthful. She left me with a cryptic warning as I left, she may know more than she\'s leading on.',

//   assistantNotes: 'Clara held a grudge against Van for trying to ruin her career. Is that enough of a motive? And does she have a strong alibi?',

//   accusationExplanation: 'Clara\'s resentment towards Van is clear, and her interest in the painting is undeniable. However, she has a strong alibi. The steward vouches for her presence in her quarters during the estimated time of the murder. As well as her passion for art which seems more towards creation rather than destruction or theft. Her guilt is highly unlikely.',

//   evidenceConversation: [
//     'Det. Blythe: Good morning, Miss Deveraux, do you mind if I asked you some questions, maybe take a look around your quarters? I\'m sure you\'ve heard about what happened last night.',
//     'I did hear, what a tragic loss. And certainly, make yourself at home, it seems you\'re going to regardless.',
//     'Det. Blythe: Can you explain those paint chips on your dress to me? It appears you\'ve been handling a dry painting.',
//     'Oh my, what a keen eye... but maybe not so much a keen mind? I\'m a struggling artist darling... I\'ve got to pay my way somehow, after Van tried to destroy my career.',
//     'Det. Blythe: Paying your way by stealing priceless paintings, maybe?',
//     'Hardly... I heard Alexander Petrov was going to be aboard, and since he\'s on the committee overseeing the new National Art Exhibit I figured I could grease the wheels to get prime space of the gallery. So I did a portrait of his wife and daughter.',
//     'Det. Blythe: Why is there a sketch of the stolen painting in your sketchbook then?',
//     'It\'s a beautiful piece, and even I need inspiration sometimes. Do you have anymore inane questions, detective?',
//     'Det. Blythe: That\'s all for now, thank-you for your time Miss Deveraux.',
//     'Can\'t say it\'s been a pleasure.',
//   ],
//   alibiConversation: [
//     'Det. Blythe: Good morning, Miss Deveraux, do you mind if I asked you some questions? I\'m sure you\'ve heard about what happened last night.',
//     'I did hear, what an awful and tragic loss... I suppose.',
//     'Det. Blythe: Yes, I\'ve heard you\'re not a fan of Leonard. That being said, can you explain your whereabouts last night Miss Deveraux?',
//     'I was mingling in the dining hall, keeping up appearances of course. Then retired to my quarters around midnight.',
//     'Det. Blythe: Can anyone vouch for you\'r whereabouts after you left the party?',
//     'I\'m sure the steward would recall, maybe ask him? He escorted me back.',
//     'Det. Blythe: Thank you for your cooperation, Miss Deveraux.',
//     'I don\'t think this clears me of any suspicion, does it?... Leonard Van is hardly the man he portrays to everyone else. I\'m sure you\'ll see that soon enough.',
//   ],

// };


// const wallace = {
//   firstName: 'wallace',
//   lastName: 'Deveraux',
//   fullName: 'wallace',
//   role: 'Disgruntled Artist',
//   image: '../img/clara.png',

//   evidence: 'Found paint chips on her dress that match the color palette of the stolen painting.',
//   additionalEvidence: 'Clearly disgruntled by my interview, the paint chips are allegedly from a piece she did to network herself more commissions. There is also a sketch of the stolen painting found in her sketchbook, suggesting she had a keen interest in it, but enough of an interest to steal it? Her resentment toward Van is palpable, but her artistic admiration for the stolen painting makes her involvement in its theft implausible.',

//   alibi: 'Was seen in the dining area before the estimated time of the murder, but not eating.',
//   additionalAlibi: 'She claims she was at the dinner party until near midnight then retired to her room, naming the Steward as an alibi. My assistant interviewed him and he corroborates her story. She noted that he seemed honest, and we have no reason at this time to believe he\'s being untruthful. She left me with a cryptic warning as I left, she may know more than she\'s leading on.',

//   assistantNotes: 'Clara held a grudge against Van for trying to ruin her career. Is that enough of a motive? And does she have a strong alibi?',

//   accusationExplanation: 'Clara\'s resentment towards Van is clear, and her interest in the painting is undeniable. However, she has a strong alibi. The steward vouches for her presence in her quarters during the estimated time of the murder. As well as her passion for art which seems more towards creation rather than destruction or theft. Her guilt is highly unlikely.',

//   evidenceConversation: [
//     'Det. Blythe: Good morning, Miss Deveraux, do you mind if I asked you some questions, maybe take a look around your quarters? I\'m sure you\'ve heard about what happened last night.',
//     'I did hear, what a tragic loss. And certainly, make yourself at home, it seems you\'re going to regardless.',
//     'Det. Blythe: Can you explain those paint chips on your dress to me? It appears you\'ve been handling a dry painting.',
//     'Oh my, what a keen eye... but maybe not so much a keen mind? I\'m a struggling artist darling... I\'ve got to pay my way somehow, after Van tried to destroy my career.',
//     'Det. Blythe: Paying your way by stealing priceless paintings, maybe?',
//     'Hardly... I heard Alexander Petrov was going to be aboard, and since he\'s on the committee overseeing the new National Art Exhibit I figured I could grease the wheels to get prime space of the gallery. So I did a portrait of his wife and daughter.',
//     'Det. Blythe: Why is there a sketch of the stolen painting in your sketchbook then?',
//     'It\'s a beautiful piece, and even I need inspiration sometimes. Do you have anymore inane questions, detective?',
//     'Det. Blythe: That\'s all for now, thank-you for your time Miss Deveraux.',
//     'Can\'t say it\'s been a pleasure.',
//   ],
//   alibiConversation: [
//     'Det. Blythe: Good morning, Miss Deveraux, do you mind if I asked you some questions? I\'m sure you\'ve heard about what happened last night.',
//     'I did hear, what an awful and tragic loss... I suppose.',
//     'Det. Blythe: Yes, I\'ve heard you\'re not a fan of Leonard. That being said, can you explain your whereabouts last night Miss Deveraux?',
//     'I was mingling in the dining hall, keeping up appearances of course. Then retired to my quarters around midnight.',
//     'Det. Blythe: Can anyone vouch for you\'r whereabouts after you left the party?',
//     'I\'m sure the steward would recall, maybe ask him? He escorted me back.',
//     'Det. Blythe: Thank you for your cooperation, Miss Deveraux.',
//     'I don\'t think this clears me of any suspicion, does it?... Leonard Van is hardly the man he portrays to everyone else. I\'m sure you\'ll see that soon enough.',
//   ],

// };



// const leonard = {
//   firstName: 'leonard',
//   lastName: 'Deveraux',
//   fullName: 'leonard',
//   role: 'Disgruntled Artist',
//   image: '../img/clara.png',

//   evidence: 'Found paint chips on her dress that match the color palette of the stolen painting.',
//   additionalEvidence: 'Clearly disgruntled by my interview, the paint chips are allegedly from a piece she did to network herself more commissions. There is also a sketch of the stolen painting found in her sketchbook, suggesting she had a keen interest in it, but enough of an interest to steal it? Her resentment toward Van is palpable, but her artistic admiration for the stolen painting makes her involvement in its theft implausible.',

//   alibi: 'Was seen in the dining area before the estimated time of the murder, but not eating.',
//   additionalAlibi: 'She claims she was at the dinner party until near midnight then retired to her room, naming the Steward as an alibi. My assistant interviewed him and he corroborates her story. She noted that he seemed honest, and we have no reason at this time to believe he\'s being untruthful. She left me with a cryptic warning as I left, she may know more than she\'s leading on.',

//   assistantNotes: 'Clara held a grudge against Van for trying to ruin her career. Is that enough of a motive? And does she have a strong alibi?',

//   accusationExplanation: 'Clara\'s resentment towards Van is clear, and her interest in the painting is undeniable. However, she has a strong alibi. The steward vouches for her presence in her quarters during the estimated time of the murder. As well as her passion for art which seems more towards creation rather than destruction or theft. Her guilt is highly unlikely.',

//   evidenceConversation: [
//     'Det. Blythe: Good morning, Miss Deveraux, do you mind if I asked you some questions, maybe take a look around your quarters? I\'m sure you\'ve heard about what happened last night.',
//     'I did hear, what a tragic loss. And certainly, make yourself at home, it seems you\'re going to regardless.',
//     'Det. Blythe: Can you explain those paint chips on your dress to me? It appears you\'ve been handling a dry painting.',
//     'Oh my, what a keen eye... but maybe not so much a keen mind? I\'m a struggling artist darling... I\'ve got to pay my way somehow, after Van tried to destroy my career.',
//     'Det. Blythe: Paying your way by stealing priceless paintings, maybe?',
//     'Hardly... I heard Alexander Petrov was going to be aboard, and since he\'s on the committee overseeing the new National Art Exhibit I figured I could grease the wheels to get prime space of the gallery. So I did a portrait of his wife and daughter.',
//     'Det. Blythe: Why is there a sketch of the stolen painting in your sketchbook then?',
//     'It\'s a beautiful piece, and even I need inspiration sometimes. Do you have anymore inane questions, detective?',
//     'Det. Blythe: That\'s all for now, thank-you for your time Miss Deveraux.',
//     'Can\'t say it\'s been a pleasure.',
//   ],
//   alibiConversation: [
//     'Det. Blythe: Good morning, Miss Deveraux, do you mind if I asked you some questions? I\'m sure you\'ve heard about what happened last night.',
//     'I did hear, what an awful and tragic loss... I suppose.',
//     'Det. Blythe: Yes, I\'ve heard you\'re not a fan of Leonard. That being said, can you explain your whereabouts last night Miss Deveraux?',
//     'I was mingling in the dining hall, keeping up appearances of course. Then retired to my quarters around midnight.',
//     'Det. Blythe: Can anyone vouch for you\'r whereabouts after you left the party?',
//     'I\'m sure the steward would recall, maybe ask him? He escorted me back.',
//     'Det. Blythe: Thank you for your cooperation, Miss Deveraux.',
//     'I don\'t think this clears me of any suspicion, does it?... Leonard Van is hardly the man he portrays to everyone else. I\'m sure you\'ll see that soon enough.',
//   ],

// };




// function logClara() {
//   document.getElementById("clara-evidence").innerText = `Clara's Evidence: ${claraDeveraux.evidence}`;
//   document.getElementById("clara-alibi").innerText = `Clara's Alibi: ${claraDeveraux.alibi}`;
// }

// logClara();

// function logMarguerite() {
//   document.getElementById("marg-evidence").innerText = `Marguerite's Evidence: ${margueriteFontaine.evidence}`;
//   document.getElementById("marg-alibi").innerText = `Marguerite's Alibi: ${margueriteFontaine.alibi}`;
// }

// logMarguerite();

// function logAlexander() {
//   document.getElementById("alex-evidence").innerText = `Alexander's Evidence: ${alexanderPetrov.evidence}`;
//   document.getElementById("alex-alibi").innerText = `Alexander's Alibi: ${alexanderPetrov.alibi}`;
// }

// logAlexander();

// function logJonathon() {
//   document.getElementById("jon-evidence").innerText = `Jonathon's Evidence: ${jonathan.evidence}`;
//   document.getElementById("jon-alibi").innerText = `Jonathon's Alibi: ${jonathan.alibi}`;
// }

// logJonathon();

// function logWallace() {
//   document.getElementById("wallace-evidence").innerText = `Wallace's Evidence: ${wallace.evidence}`;
//   document.getElementById("wallace-alibi").innerText = `Wallace's Alibi: ${wallace.alibi}`;
// }

// logWallace();

// function logLeonard() {
//   document.getElementById("leonard-evidence").innerText = `Leonard's Evidence: ${leonard.evidence}`;
//   document.getElementById("leonard-alibi").innerText = `Leonard's Alibi: ${leonard.alibi}`;
// }
// logLeonard();

// function openLogBook() {
//   let logbook = document.getElementById("logbook");

//   if (logbook.style.display === "none") {
//     logbook.style.display = "block";
//     logClara();
//     logMarguerite();
//     logAlexander();
//     logJonathon();
//     logWallace();
//     logLeonard();
//   } else {
//     logbook.style.display = "none";
//   }
// }

// openLogBook();




























































//FIRST LOGBOOK FUNCTION just for CLARA

// function openLogBook() {
//   let logbook = document.getElementById("logbook");

//   if (logbook.style.display === "none") {

//     logbook.style.display = "block";

//     document.getElementById("clara-evidence").innerText = `Clara's Evidence: ${claraDeveraux.evidence}`;
//     document.getElementById("clara-alibi").innerText = `Clara's Alibi: ${claraDeveraux.alibi}`;
//     document.getElementById("marg-evidence").innerText = `Marguerite's Evidence: ${margueriteFontaine.evidence}`;
//     document.getElementById("marg-alibi").innerText = `Marguerite's Alibi: ${margueriteFontaine.alibi}`;
//     document.getElementById("alex-evidence").innerText = `Alexander's Evidence: ${alexanderPetrov.evidence}`;
//     document.getElementById("alex-alibi").innerText = `Alexander's Alibi: ${alexanderPetrov.alibi}`;
//   } else {
//     logbook.style.display = "none";
//   }

// }

// openLogBook();


//END OF FUNCTION




//THIS FUNCTION IS SUPPOSE TO only display evidence/alibi for characters you clicked on.

// function claraClick() {
//   showLogbook();
// }

// function margueriteClick() {
//   showLogbook();
// }

// function alexanderClick() {
//   showLogbook();
// }

// function jonathanClick() {
//   showLogbook();
// }


// function wallaceClick() {
//   showLogbook();
// }


// function leonardClick() {
//   showLogbook();
// }



// claraDiv.addEventListener('click', claraClick);
// margueriteDiv.addEventListener('click', margueriteClick);
// alexanderDiv.addEventListener('click', alexanderClick);
// jonathanDiv.addEventListener('click', jonathanClick);
// wallaceDiv.addEventListener('click', wallaceClick);
// leonardDiv.addEventListener('click', leonardClick);


// function openLogbook() {
//   let logbook = document.getElementById("logbook");

//   if (logbook.style.display === "none") {
//     logbook.style.display = "block";

//     let characterEvidence = {};
//     let characterName = "";

//     if (clara) {
//       characterEvidence = claraDeveraux;
//       characterName = "Clara: ";
//     } else if (margueriteFontaine) {
//       characterEvidence = margueriteFontaine;
//       characterName = "Marguerite Fontaine: ";
//     } else if (alexanderPetrov) {
//       characterEvidence = alexanderPetrov;
//       characterName = "Alexander: ";
//     } else if (jonathan) {
//       characterEvidence = jonathan;
//       characterName = "Jonathan: ";
//     } else if (wallace) {
//       characterEvidence = wallace;
//       characterName = "Wallace: ";
//     } else if (leonard) {
//       characterEvidence = leonard;
//       characterName = "Leonard:";
//     }

  
//     let addlog = document.createElement("div");
//     addlog.classList.add("log-entry");

//     let characterNameEle = document.createElement("h3");
//     characterNameEle.innerText = characterName;

//     let evidenceEle = document.createElement("p");
//     evidenceEle.innerText = `Evidence: ${characterEvidence.evidence}`;

//     let additionalEvidenceEle = document.createElement("p");
//     additionalEvidenceEle.innerText = `Additional Evidence: ${characterEvidence.additionalEvidence}`;

//     let alibiEle = document.createElement("p");
//     alibiEle.innerText = `Alibi: ${characterEvidence.alibi}`;

//     let addAlibiEle = document.createElement("p");
//     addAlibiEle.innerText = `Additional Alibi: ${characterEvidence.additionalAlibi}`;

//     addlog.appendChild(characterNameEle);
//     addlog.appendChild(evidenceEle);
//     addlog.appendChild(additionalEvidenceEle);
//     addlog.appendChild(alibiEle);
//     addlog.appendChild(addAlibiEle);

//     document.getElementById("logbook").appendChild(addlog);
//   } else {
//     logbook.style.display = "none";
//   }
// }


// openLogbook();





// function showLogbook() {
//   let logbook = document.getElementById("logbook");

//   if (logbook.style.display === "none") {
//     logbook.style.display = "block";

//     let evidence = "";

//     if (clara) {
//       evidence = "Evidence for Clara";
//     } else if (marguerite) {
//       evidence = "Evidence for Marguerite";
//     } else if (alexander) {
//       evidence = "Evidence for Alexander";
//     } else if (jonathan) {
//       evidence = "Evidence for Jonathan";
//     } else if (wallace) {
//       evidence = "Evidence for Wallace";
//     } else if (leonard) {
//       evidence = "Evidence for Leonard";
//     } else {
//     logbook.style.display = "none";
//   }
//   document.getElementById("evidence").innerText = characterEvidence.evidence;
//   document.getElementById("additionalEvidence").innerText = characterEvidence.additionalEvidence;
//   document.getElementById("alibi").innerText = characterEvidence.alibi;
//   document.getElementById("additionalAlibi").innerText = characterEvidence.additionalAlibi;
// }



// SECOND LOGBOOK FUNCTION for ALL characters
// function showLogbook() {
//   let logbook = document.getElementById("logbook");
//   if (logbook.style.display === "none") {

//     logbook.style.display = "block";

//     let characterEvidence = getCharacterEvidence(); 

//     document.getElementById("evidence").innerText = characterEvidence.evidence;
//     document.getElementById("additionalEvidence").innerText = characterEvidence.additionalEvidence;
//     document.getElementById("alibi").innerText = characterEvidence.alibi;
//     document.getElementById("additionalAlibi").innerText = characterEvidence.additionalAlibi;
//   } else {
//     logbook.style.display = "none";
//   }
// }
