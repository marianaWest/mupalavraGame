let element = document.getElementById("rightTerm");
let rightTerm = element.innerText;
console.log(rightTerm);

const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;

let rightGuessArray = Array.from(rightTerm);
console.log(rightGuessArray);

function initBoard() {
  let board = document.getElementById("game-board");

  for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
    let row = document.createElement("div");
    row.className = "letter-row";

    for (let j = 0; j < rightTerm.length; j++) {
      let box = document.createElement("div");
      box.className = "letter-box";
      row.appendChild(box);
    }
    board.appendChild(row);
  }
}
initBoard();

// function shadeKeyBoard

//  function deleteLetter

// function checkGuess

// function insertLetter
