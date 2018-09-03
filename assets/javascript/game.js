(function(){

var wordSource = ["Clown", "Elephant", "Tigers", "Acrobats", "Contortionist",
                    "Ballons", "Popcorn", "Juggler",
                    "Trapeze", "Ringmaster", "Strongman", 
                    "Zebras", "Horses"];
var lettersGuessedSpan;
var winsCounter = document.getElementById("wins");
var missedLettersCounter = document.getElementById("num-guesses");
var winAudio = document.getElementById("win-audio");
var loseAudio = document.getElementById("lose-audio");
var winsValue = 0;
var missedLetters;
var wordContainer;
var wordGuessed;
var wordContent;
var initialContent;
var tempWordLower;
var tempWordGuessed;
var wordContainer;
var wrongGuessLetters;
var clearContainers = function () {
    var list = document.getElementById("computer-word");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    var list = document.getElementById("letter-guessed");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    wordContainer = [];
    wordGuessed = "";
    wordContent = [];
    initialContent = [];
    wrongGuessLetters = [];
}
var computerGuess = function () {
    clearContainers();
    wordGuessed = wordSource[Math.floor(Math.random() * wordSource.length)];
    console.log(wordGuessed);
    tempWordLower = wordGuessed.toLowerCase();
    tempWordGuessed = tempWordLower.split("");
    wordContainer = wordGuessed.split("");
    missedLetters = 15;
    missedLettersCounter.textContent = missedLetters;
    lettersGuessedSpan = document.createElement("span");

    for (i = 0; i < wordGuessed.length; i++) {
        var computerGuessText = document.createElement("span");
        var type = document.createAttribute("id");
        type.value = i;
        initialContent.push("_");
        console.log(initialContent[i]);
        wordContent.push(wordGuessed.charAt(i));
        computerGuessText.attributes.setNamedItem(type);
        computerGuessText.appendChild(document.createTextNode("_ "));
        document.getElementById("computer-word").appendChild(computerGuessText);

    }


    console.log("Number of Childs = " + document.getElementById("computer-word").childElementCount);
};
var printLetterGuessesCorrect = function (letter) {

    if (wordGuessed.indexOf(letter.toLowerCase()) = 0) {

        document.getElementById(i).innerHTML = letter.toUpperCase();
    }
    else {
        document.getElementById(i).innerHTML = letter;
    }

    console.log(letter, i);
    return;

}

computerGuess();

console.log(tempWordGuessed);


document.onkeydown = function (event) {
    if (event.key) {
        var letterChoice = event.key.toLowerCase();
        console.log(letterChoice);
        if (tempWordGuessed.indexOf(letterChoice) >= 0) {
            console.log("Right Choice!");
            console.log(tempWordGuessed.indexOf(letterChoice));
            for (i = 0; i < tempWordGuessed.length; i++) {
                console.log(initialContent);
                if (letterChoice === tempWordGuessed[i] && i === 0) {
                    console.log(tempWordGuessed.indexOf(letterChoice));
                    tempLetterUpper = letterChoice.toUpperCase();
                    initialContent[i] = letterChoice.toUpperCase();
                    document.getElementById(i).innerHTML = tempLetterUpper;
                }
                else if (letterChoice === tempWordGuessed[i]) {
                    console.log(i);
                    document.getElementById(i).innerHTML = letterChoice;
                    initialContent[i] = letterChoice;
                }
            }
        }
        else{
            console.log("Wrong!!");
            missedLetters--;
            missedLettersCounter.textContent = missedLetters;
            wrongGuessLetters.push(letterChoice);
            lettersGuessedSpan.appendChild(document.createTextNode(letterChoice + " "));
            document.getElementById("letter-guessed").appendChild(lettersGuessedSpan);

        }
        console.log(initialContent.toString());
        console.log(wordContainer.toString());
        if (initialContent.includes("_") === false) {
            winAudio.play();
        }
        else if (missedLetters === 0) {
            loseAudio.play();
        }
    }
}
document.onkeyup = function (event) {
    if (initialContent.includes("_") === false) {
        winsValue = winsValue + 1;
        winsCounter.textContent = winsValue;
        console.log("You win");
        alert("You Win!!!!! \n\nPress Ok to play again");
        winAudio.pause();
        winAudio.load();
        computerGuess();
    }
    else if (missedLetters === 0) {
        alert("You Lose!!!\n\nHit Ok to play again.");
        loseAudio.pause();
        loseAudio.load();
        computerGuess();
    }
       
}
})();

