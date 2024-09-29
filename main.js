document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("Menu");
    const game = document.getElementById("Game");
    const play_button = document.getElementById("PlayButton");

    play_button.addEventListener("click", () => {
        menu.style.display = "none";
        game.style.display = "block";
        startGame();
    })

    function startGame(){
        new WordGame();
    }

});