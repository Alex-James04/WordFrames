class WordGame {
    constructor() {
        this.letterDistribution = [['A', 8228], ['B', 10495], ['C', 13120], ['D', 16476], ['E', 25377], ['F', 27029], ['G', 29357], ['H', 31799], ['I', 36901], ['J', 37351], ['K', 39518], ['L', 44035], ['M', 46816], ['N', 50798], ['O', 57128], ['P', 59988], ['Q', 60119], ['R', 65492], ['S', 73986], ['T', 78495], ['U', 82025], ['V', 82959], ['W', 84555], ['X', 84959], ['Y', 87707], ['Z', 88330]]
        this.gridItems = [];
        this.initializeGrid();
        this.letters = this.generateLetters();
        this.currentLetterIndex = 0;
        this.updateCurrentLetter();
    }

    generateLetters() {
        let allLetters = [];
        for (let i = 0; i < 25; i++){
            let generatedNumber = Math.floor(Math.random()*88330);
            for (let element in this.letterDistribution){
                if (generatedNumber <= this.letterDistribution[element][1]){
                    allLetters[i] = this.letterDistribution[element][0];
                    break;
                }
            }
        }
        return allLetters;
    }

    initializeGrid() {
        const gridContainer = document.querySelector(".grid-container");
        gridContainer.innerHTML = "";
        for (let i = 0; i < 25; i++) {
            const gridItem = document.createElement('button');
            gridItem.classList.add('grid-item');
            gridItem.addEventListener('click', () => this.onGridItemClick(i));
            this.gridItems.push(gridItem);
            gridContainer.appendChild(gridItem);
        }
    }

    onGridItemClick(index) {
        if (this.currentLetterIndex < this.letters.length) {
            this.gridItems[index].textContent = this.letters[this.currentLetterIndex];
            this.gridItems[index].disabled = true;
            this.currentLetterIndex++;
            this.updateCurrentLetter();
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
}

document.addEventListener("DOMContentLoaded", () => {
    const game = new WordGame();
})