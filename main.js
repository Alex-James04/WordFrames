document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("Menu");
    const game = document.getElementById("Game");
    const play_button = document.getElementById("PlayButton");
    const menu_button = document.getElementById("MenuButton");
    const seedInput = document.getElementById("seedInput");

    play_button.addEventListener("click", () => {
        menu.style.display = "none";
        game.style.display = "block";
        const seed = seedInput.value || null;
        startGame(seed);
    })

    menu_button.addEventListener("click", () => {
        menu.style.display = "block";
        game.style.display = "none";
        seedInput.value = "";
    })

    function startGame(seed){
        new WordGame(seed);
    }

});