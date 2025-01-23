// // Predefined list of words
// const words = [
//   "quick", "brown", "fox", "jumps", "over", "lazy", "dog",
//   "journey", "thousand", "miles", "single", "step",
//   "success", "failure", "determination", "courage",
//   "dreams", "hard", "work", "effort", "believe",
//   "achieve", "power", "focus", "start", "create",
//   "endless", "possibilities", "learn", "grow", "life",
//   "world", "beautiful", "inspire", "kindness", "hope",
//   "future", "strength", "patience", "joy", "happiness",
//   "family", "friendship", "love", "peace", "unity"
// ];

// // Generate a random paragraph
// function generateRandomParagraph(wordCount) {
//   let paragraph = "";
//   for (let i = 0; i < wordCount; i++) {
//     const randomIndex = Math.floor(Math.random() * words.length);
//     paragraph += words[randomIndex] + " ";
//   }
//   return paragraph.trim();
// }

// // Add the paragraph to the DOM
// const randomParagraphElement = document.getElementById("random-paragraph");
// const randomParagraph = generateRandomParagraph(15); // Generate 15 words for the paragraph
// let wordsArray = randomParagraph.split(" ");
// let currentWordIndex = 0;

// // Highlight the current word
// function updateParagraphHighlight() {
//   randomParagraphElement.innerHTML = wordsArray
//     .map((word, index) => {
//       if (index === currentWordIndex) {
//         return `<span class="current-word">${word}</span>`;
//       } else if (word.startsWith("<span")) {
//         return word; // Keep already colored words intact
//       } else {
//         return word;
//       }
//     })
//     .join(" ");
// }

// // Initial render with the first word highlighted
// updateParagraphHighlight();

// // Add an input event listener to the textarea
// const typingArea = document.getElementById("typing-area");

// typingArea.addEventListener("keydown", (event) => {
//   if (event.key === " ") {
//     // Prevent default space behavior
//     event.preventDefault();

//     // Get the last typed word
//     const typedWord = typingArea.value.trim();

//     // Check if the word matches
//     const currentWord = wordsArray[currentWordIndex];
//     if (typedWord === currentWord) {
//       wordsArray[currentWordIndex] = `<span class="correct">${currentWord}</span>`;
//     } else {
//       wordsArray[currentWordIndex] = `<span class="incorrect">${currentWord}</span>`;
//     }

//     // Move to the next word
//     currentWordIndex++;

//     // Clear the textarea
//     typingArea.value = "";

//     // Update the paragraph with the current word highlighted
//     updateParagraphHighlight();
//   }
// });


// create a function that returns a random paragraph in string format
const words = [
  "quick", "brown", "fox", "jumps", "over", "lazy", "dog",
  "journey", "thousand", "miles", "single", "step",
  "success", "failure", "determination", "courage",
  "dreams", "hard", "work", "effort", "believe",
  "achieve", "power", "focus", "start", "create",
  "endless", "possibilities", "learn", "grow", "life",
  "world", "beautiful", "inspire", "kindness", "hope",
  "future", "strength", "patience", "joy", "happiness",
  "family", "friendship", "love", "peace", "unity",
  "creation", "million", "god", "bright", "adventure",
  "imagine", "sky", "forest", "mountain", "ocean",
  "valley", "river", "spark", "brave", "fearless",
  "freedom", "destiny", "light", "shadow", "wisdom",
  "faith", "trust", "harmony", "balance", "energy",
  "focus", "resilience", "perseverance", "action", "choice",
  "purpose", "vision", "clarity", "passion", "innovation",
  "challenge", "success", "opportunity", "progress",
  "ambition", "teamwork", "responsibility", "gratitude",
  "compassion", "journey", "discovery", "adventure",
  "future", "hope", "ambition", "explore", "wonder"
];


function createRandomPara(wordCount){
  let para = "";
  for(let i =0; i<wordCount; i++){
    const randomIndex = Math.floor(Math.random() * words.length);
    para += words[randomIndex] + " "
}
return para;
}

const paragraph = createRandomPara(30);
// console.log(paragraph);

// convert the string into an array to perform manipulation
//create a function that takes a word and highlights it and compares it
let wordsArray = paragraph.split(" ");
let currentWordIndex = 0;
let timeLeft = 60;
let timerStarted = false;
let correctWords = 0;


const timerElement = document.getElementById("timer");

function calculate(){
  const totalWords = wordsArray.length;
  const wpm = correctWords;
  const accuracy = ((correctWords/totalWords)*100).toFixed(2);

  alert(`Times Up! WPM: ${wpm} \nAccuracy: ${accuracy}%`);
}

function wordHighlight(){
  document.getElementById('random-paragraph').innerHTML = wordsArray.map((word, index) =>{
    if (index === currentWordIndex){
      // console.log(wordsArray);
      return `<span class="current-word">${word}</span>`;
    }
    else if (word.startsWith("<span")){
      return word;
    }
    else{
      return word;
    }

  }).join(" ");
}

wordHighlight();
// console.log(hightlight);
// above fucntion works on input in the text area, add a listener
function startTimer(){
  if (timerStarted) return;

  timerStarted = true;
  const timerInterval = setInterval(()=>{
    timeLeft--;
    timerElement.textContent = `Time Left: ${timeLeft}s`;
    // console.log(timeLeft);

    if (timeLeft <=0){
      clearInterval(timerInterval);
      typingArea.disabled = true;
      calculate();
      alert("times up!!!");
    }
  }, 1000);
}

const typingArea = document.getElementById("typing-area");

typingArea.addEventListener("keydown", (event)=>{
  if (!timerStarted){
    // timerStarted = true;
    startTimer();
  }
  if (event.key === " "){
    event.preventDefault();

    const typeWord = typingArea.value.trim();
    const currentWord = wordsArray[currentWordIndex];

    if (typeWord === currentWord){
      correctWords++;
      wordsArray[currentWordIndex] = `<span class="correct">${currentWord}</span>`;
    }
    else{
      wordsArray[currentWordIndex] = `<span class="incorrect">${currentWord}</span>`;
    }

    currentWordIndex++;
    typingArea.value = "";
    wordHighlight();
  }
});