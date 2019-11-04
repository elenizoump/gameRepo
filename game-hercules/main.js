const $canvas = document.querySelector("canvas");
const context = $canvas.getContext('2d');
$canvas.width = window.screen.width;

$canvas.height = "600";
const game = new Game($canvas);
const startButton = document.querySelector(".start-button")

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  }

  function startGame() {
    let game = new Game($canvas);
    game.start();
  }
};