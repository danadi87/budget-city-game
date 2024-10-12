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

  //event listener for the key arrows
  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
      ourGame.player.directionX = 2;
    }
    if (event.code === "ArrowLeft") {
      ourGame.player.directionX = -2;
    }
    if (event.code === "ArrowUp") {
      ourGame.player.directionY = -2;
    }
    if (event.code === "ArrowDown") {
      ourGame.player.directionY = 2;
    }
  });

  //event listener that sets the directions to 0 when the keys are released
  document.addEventListener("keyup", (event) => {
    if (event.code === "ArrowRight") {
      ourGame.player.directionX = 0;
    }
    if (event.code === "ArrowLeft") {
      ourGame.player.directionX = 0;
    }
    if (event.code === "ArrowUp") {
      ourGame.player.directionY = 0;
    }
    if (event.code === "ArrowDown") {
      ourGame.player.directionY = 0;
    }
  });
  function startGame() {
    console.log("start game");
    //to create the Game object and store it in the variable
    ourGame = new Game();
    //to call the start method on our Game class
    ourGame.start();
  }
};
