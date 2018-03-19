// 1.one player - game loads
// 2. player guesses letters to complete a word.
//     user clicks a start button - alert to play the game
//     create slots to make a word - random choose the words from an array of choices
//     slots need the same amount as the random word.
var gameWords = ["mj", "kobe", "magic"];
var randomWord = gameWords[Math.floor(Math.random() * gameWords.length)];
console.log('The computer chose:' + randomWord);
var dashes = Array(randomWord.length + 1).join(" _ ");
var wordBox = document.getElementById("word-box");
wordBox.innerHTML = dashes;
// 3. hit a letter on the keyboard 
//     some letters are correct and some are wrong
//     those letters are stored somewhere
var allGuess = [];
var correct = [];
var wrong = [];
document.onkeyup = function(event) {
    var UserGuessLetters = event.key;
    console.log(UserGuessLetters);
    if (allGuess.includes(UserGuessLetters)) {
        console.log("This item already exists");
    } else {
        allGuess.push(UserGuessLetters);
        console.log(allGuess);
    }
    var LetterInput = document.getElementById("letter-input");
    LetterInput.innerHTML = UserGuessLetters;
    // 4.if they are correct, letters are placed in the word and cannot be chosen again
    if (randomWord.includes(UserGuessLetters)) {
        correct.push(UserGuessLetters);
        correct.toString();
        wordBox.innerHTML = correct;
        console.log("correct", correct);
        // 7. if the guess all the letters an alert of winning
        if (randomWord == correct) {
            alert("You Win");
        }
    }
    // 5. if wrong, user get notified that they are wrong, letters are stored in a seperate location and 
    // the hangman builds bit by bit.
    else {
        wrong.push(UserGuessLetters);
        var wrongLetters = document.getElementById("wrong-letters");
        wrong.toString();
        wrongLetters.innerHTML = wrong;
        console.log("wrong", wrong);
        // 6. player  guess 4 wrong, the man is built and the game is over, with alert message
        if (wrong.length > 6) {
            alert("game over");
        }
    }
}
// * 8. Game resets


