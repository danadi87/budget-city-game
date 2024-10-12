class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.endScreen = document.querySelector("#game-end");
    this.gameContainer = document.querySelector("#game-container");
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");
    this.collectedGarbageItems = document.getElementById(
      "collected-garbage-items"
    );
    this.player = new Player(
      0,
      280,
      200,
      320,
      "./images/garbage collector.png"
    );
    this.height = 100;
    this.width = 100;
    this.obstacles = [new Obstacle()];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 60;
    this.counter = 0;
    this.collectedGarbageItemsCount = 0;
  }
  start() {
    //set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}vh`;
    this.gameScreen.style.width = `${this.width}vw`;

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
    //increment the counter so we add more obstacles
    this.counter++;

    //update the player on the DOM based on the direction of the player
    this.player.move();

    //move all the obstacles
    for (let i = 0; i < this.obstacles.length; i++) {
      const currentObstacle = this.obstacles[i];
      currentObstacle.move();
s
      //check for collisions between the player and the obstacle and update the collected items
      const didCollide = this.player.didCollide(currentObstacle);
      if (didCollide) {
        //remove the obstacle
        this.obstacles.splice(i, 1);
        currentObstacle.element.remove();
        //update the count on the garbage items collected
        this.collectedGarbageItemsCount++;
        this.collectedGarbageItems.innerText = this.collectedGarbageItemsCount;
      }
    }
  }
}
