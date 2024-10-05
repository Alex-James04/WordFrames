class WordGame {
    constructor(seed) {
        this.seed = seed || Math.floor(Math.random() * 1000000).toString();
        this.resetScore();
        this.resetFoundWords();
        this.wordList = [];
        this.playerWords = [];
        this.loadWords();
        this.letterDistribution = [['A', 8228], ['B', 10495], ['C', 13120], ['D', 16476], ['E', 25377], ['F', 27029], ['G', 29357], ['H', 31799], ['I', 36901], ['J', 37351], ['K', 39518], ['L', 44035], ['M', 46816], ['N', 50798], ['O', 57128], ['P', 59988], ['Q', 60119], ['R', 65492], ['S', 73986], ['T', 78495], ['U', 82025], ['V', 82959], ['W', 84555], ['X', 84959], ['Y', 87707], ['Z', 88330]]
        this.gridItems = [];
        this.initializeGrid();
        this.letters = this.generateLetters();
        this.currentLetterIndex = 0;
        this.updateCurrentLetter();
        this.displayCurrentSeed();
    }

    async loadWords() {
        try {
            const response = await fetch('wordlist.txt');
            const text = await response.text();
            this.wordList = text.split('\n').map(word => word.trim().toUpperCase());
            // console.log("Succesful words loaded");
        } catch (error) {
            console.error('Error loading dictionary:', error);
        }
    }

    generateLetters() {
        let allLetters = [];
        let rng = this.seededRandom(this.seed);
        for (let i = 0; i < 25; i++){
            let generatedNumber = Math.floor(rng()*88330);
            console.log(generatedNumber);
            for (let element of this.letterDistribution){
                if (generatedNumber <= element[1]){
                    allLetters[i] = element[0];
                    break;
                }
            }
        }
        return allLetters;
    }

    seededRandom(seed) {
        let state = seed ? parseInt(seed, 36) : Math.random() * 0x100000000;
    
        return function() {
            state = (state * 1664525 + 1013904223) % 0x100000000;
            return state / 0x100000000;
        };
    }

    displayCurrentSeed() {
        const currentSeedElement = document.getElementById('CurrentSeed');
        currentSeedElement.textContent = this.seed;
    }

    initializeGrid() {
        const gridContainer = document.querySelector(".grid-container");
        gridContainer.innerHTML = " ";
        for (let i = 0; i < 25; i++) {
            const gridItem = document.createElement('button');
            gridItem.classList.add('grid-item');
            gridItem.addEventListener('click', () => this.onGridItemClick(i));
            this.gridItems.push(gridItem);
            gridContainer.appendChild(gridItem);
        }
    }

    onGridItemClick(index) {
        // console.log(this.playerWords);
        if (this.currentLetterIndex < this.letters.length) {
            this.gridItems[index].textContent = this.letters[this.currentLetterIndex];
            this.gridItems[index].disabled = true;
            this.currentLetterIndex++;
            this.updateCurrentLetter();
            this.findWords();
        }

    }

    updateCurrentLetter() {
        const currentLetterElement = document.getElementById('CurrentLetter');
        if (this.currentLetterIndex < this.letters.length) {
            currentLetterElement.textContent = this.letters[this.currentLetterIndex];
        } else {
            currentLetterElement.textContent = '-';
        }
    }

    updatePlayerWordsList() {
        const playerWordsList = document.getElementById('PlayerWordsList');
        playerWordsList.innerHTML = '';
        
        // Sort the player words alphabetically
        const sortedWords = Array.from(this.playerWords).sort((a, b) => a.localeCompare(b));
        
        sortedWords.forEach(word => {
            const wordSpan = document.createElement('span');
            wordSpan.textContent = word;
            playerWordsList.appendChild(wordSpan);
        });
    }

    findWords() {
        this.score = 0;
        this.playerWords = [];
        this.findAllWords();
        this.updatePlayerWordsList();
        this.updateScore();
    }

    findAllWords() {
        // Check horizontal words
        for (let row = 0; row < 5; row++) {
            this.checkWordsInLine(row, 0, 0, 1);
        }

        // Check vertical words
        for (let col = 0; col < 5; col++) {
            this.checkWordsInLine(0, col, 1, 0);
        }
    }

    checkWordsInLine(startRow, startCol, rowStep, colStep) {
        for (let start = 0; start < 5; start++) {
            let word = '';
            for (let i = 0; i < 5 - start; i++) {
                const row = startRow + start * rowStep + i * rowStep;
                const col = startCol + start * colStep + i * colStep;
                const letter = this.gridItems[row * 5 + col].textContent;
                
                if (letter && letter !== ' ') {
                    word += letter;
                    if (word.length >= 1 && word.length <= 5) {
                        this.checkWord(word);
                    }
                } else {
                    break; // Stop if we hit an empty cell
                }
            }
        }
    }

    checkWord(word) {
        if (this.wordList.includes(word.toUpperCase())) {
            this.score += this.calculateWordScore(word);
            this.playerWords.push(word);
        }
    }

    calculateWordScore(word) {
        // Simple scoring: 1 point per letter
        return word.length;
    }

    updateScore() {
        if (this.score >= parseInt(document.getElementById('Score').textContent)){
            document.getElementById('Score').textContent = this.score;
        }
        this.updateHighScore();
    }

    updateHighScore() {
        const currentScore = parseInt(document.getElementById('Score').textContent);
        const highScore = parseInt(document.getElementById('HighScore').textContent);
        if (currentScore > highScore) {
            document.getElementById('HighScore').textContent = currentScore;
        }
    }

    resetScore() {
        this.score = 0;
        document.getElementById('Score').textContent = 0;
    }

    resetFoundWords() {
        this.playerWords = [];
        this.updatePlayerWordsList();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const game = new WordGame();
})