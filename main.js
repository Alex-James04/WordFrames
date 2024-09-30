document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("Menu");
    const game = document.getElementById("Game");
    const play_button = document.getElementById("PlayButton");
    const menu_button = document.getElementById("MenuButton");

    play_button.addEventListener("click", () => {
        menu.style.display = "none";
        game.style.display = "block";
        startGame();
    })

    menu_button.addEventListener("click", () => {
        menu.style.display = "block";
        game.style.display = "none";
    })

    function startGame(){
        new WordGame();
    }

});