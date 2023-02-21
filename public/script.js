const NUMBER_OF_GUESSES = 6
let guessesRemaining = NUMBER_OF_GUESSES
let currentGuess = []
let nextLetter = 0

function initBoard(rightTerm) {
    const test = document.createElement('p');
    test.innerText = 'test';
    document.body.appendChild(test);
    
}
initBoard(rightTerm);