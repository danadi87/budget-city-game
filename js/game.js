class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.endScreen = document.querySelector("#game-end");
    this.gameContainer = document.querySelector("#game-container");
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");
    this.player = new Player(
      0,
      280,
      200,
      320,
      "./images/garbage collector.png"
    );
    this.obtsacles = [new Obstacle()];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 60;
    this.counter = 0;
  }
  start() {
    //to hide the start screen
    this.startScreen.style.display = "none";
    //to show the game screen
    this.gameScreen.style.display = "block";
    this.gameContainer.style.display = "block";
    //to start the loop for the game
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  gameLoop() {
    this.update();
    //to check if the game is over and to stop it if it's true
    if (this.gameIsOver === true) {
      clearInterval(this.gameIntervalId);
    }
  }
  update() {
    this.counter++;
    //update the player on the DOM based on the direction of the player
    this.player.move();
  }
}
