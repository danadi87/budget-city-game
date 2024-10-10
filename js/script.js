window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let ourGame;
  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", function () {
    window.location.reload();
  });
  function startGame() {
    console.log("start game");
    //to create the Game object and store it in the variable
    ourGame = new Game();
    //to call the start method on our Game class
    ourGame.start();
  }
};
