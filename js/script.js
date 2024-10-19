window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const howToButton = document.getElementById("how-to-button");
  const returnButton = document.getElementById("return-home");

  let ourGame;
  let readInstruction;

  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", function () {
    window.location.reload();
  });
  howToButton.addEventListener("click", function () {
    readInstructions();
  });
  returnButton.addEventListener("click", function () {
    window.location.reload();
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
      ourGame.player.directionX = 3;
    }
    if (event.code === "ArrowLeft") {
      ourGame.player.directionX = -3;
    }
    if (event.code === "ArrowUp") {
      ourGame.player.directionY = 3;
    }
    if (event.code === "ArrowDown") {
      ourGame.player.directionY = -3;
    }
  });

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
    ourGame = new Game();
    ourGame.start();
  }
  function readInstructions() {
    console.log("instructions");
    readInstruction = new Instructions();
    readInstruction.showInstructions();
  }
};
