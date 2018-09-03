(function () {
    var game = {
        wordSource: ["Clown", "Elephant", "Tigers", "Acrobats", "Contortionist",
            "Ballons", "Popcorn", "Juggler",
            "Trapeze", "Ringmaster", "Strongman",
            "Zebras", "Horses"],
        lettersGuessedSpan: "",
        winsCounter: document.getElementById("wins"),
        missedLettersCounter: document.getElementById("num-guesses"),
        winAudio: document.getElementById("win-audio"),
        loseAudio: document.getElementById("lose-audio"),
        winsValue: 0,
        missedLetters: "",
        wordContainer: [],
        wordGuessed: "",
        wordContent: [],
        initialContent: [],
        tempWordLower: "",
        tempWordGuessed: [],
        wordContainer: [],
        wrongGuessLetters: [],
        clearContainers: function () {
            var list = document.getElementById("computer-word");
            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }
            var list = document.getElementById("letter-guessed");
            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }
            this.wordContainer = [];
            this.wordGuessed = "";
            this.wordContent = [];
            this.initialContent = [];
            this.wrongGuessLetters = [];
        },
        computerGuess: function () {
            this.clearContainers();
            this.wordGuessed = this.wordSource[Math.floor(Math.random() * this.wordSource.length)];
            this.tempWordLower = this.wordGuessed.toLowerCase();
            this.tempWordGuessed = this.tempWordLower.split("");
            this.wordContainer = this.wordGuessed.split("");
            this.missedLetters = 15;
            this.missedLettersCounter.textContent = this.missedLetters;
            this.lettersGuessedSpan = document.createElement("span");

            for (i = 0; i < this.wordGuessed.length; i++) {
                var computerGuessText = document.createElement("span");
                var type = document.createAttribute("id");
                type.value = i;
                this.initialContent.push("_");
                this.wordContent.push(this.wordGuessed.charAt(i));
                computerGuessText.attributes.setNamedItem(type);
                computerGuessText.appendChild(document.createTextNode("_ "));
                document.getElementById("computer-word").appendChild(computerGuessText);

            }
        },
        printLetterGuessesCorrect: function (letter) {

            if (this.wordGuessed.indexOf(letter.toLowerCase()) = 0) {

                document.getElementById(i).innerHTML = letter.toUpperCase();
            }
            else {
                document.getElementById(i).innerHTML = letter;
            }
            return;

        },
        letterchoicemade: function (letter) {
            if (letter) {
                var letterChoice = letter.toLowerCase();
                if (this.tempWordGuessed.indexOf(letterChoice) >= 0) {
                    for (i = 0; i < this.tempWordGuessed.length; i++) {
                        if (letterChoice === this.tempWordGuessed[i] && i === 0) {
                            this.tempLetterUpper = letterChoice.toUpperCase();
                            this.initialContent[i] = letterChoice.toUpperCase();
                            document.getElementById(i).innerHTML = this.tempLetterUpper;
                        }
                        else if (letterChoice === this.tempWordGuessed[i]) {
                            document.getElementById(i).innerHTML = letterChoice;
                            this.initialContent[i] = letterChoice;
                        }
                    }
                }
                else {
                    this.missedLetters--;
                    this.missedLettersCounter.textContent = this.missedLetters;
                    this.wrongGuessLetters.push(letterChoice);
                    this.lettersGuessedSpan.appendChild(document.createTextNode(letterChoice + " "));
                    document.getElementById("letter-guessed").appendChild(this.lettersGuessedSpan);
                }
                if (this.initialContent.includes("_") === false) {
                    this.winAudio.play();
                }
                else if (this.missedLetters === 0) {
                    this.loseAudio.play();
                }
            }
        },
        evaluate: function (event) {
            if (this.initialContent.includes("_") === false) {
                this.winsValue = this.winsValue + 1;
                this.winsCounter.textContent = this.winsValue;
                alert("You Win!!!!! \n\nPress Ok to play again");
                this.winAudio.pause();
                this.winAudio.load();
                this.computerGuess();
            }
            else if (this.missedLetters === 0) {
                alert("You Lose!!!\n\nHit Ok to play again.");
                this.loseAudio.pause();
                this.loseAudio.load();
                this.computerGuess();
            }

        }
    }
    game.computerGuess();

    document.onkeydown = function (event) {
        game.letterchoicemade(event.key);
    }
    document.onkeyup = function (event) {
        game.evaluate();
    }
})();

