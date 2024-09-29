document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("Menu");
    const game = document.getElementById("Game");
    const play_button = document.getElementById("Play Button");

    play_button.addEventListener("click", () => {
        menu.style.display = "none";
        game.style.display = "block";
    })

    function startGame(){
        console.log("Game Started");
    }

});