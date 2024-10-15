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
    this.player = new Player(0, 30, 200, 320, "./images/garbage collector.png");
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
    this.trashCan = new Player(
      1300,
      400,
      100,
      200,
      "./images/point-winners/old closed trash can.png"
    );
    this.startGameMusic = new Audio("../sounds/start-game-music.wav");
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
    //this.startGameMusic.play();
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
    if (this.counter % 180 === 0) {
      this.obstacles.push(new Obstacle());
    }
    //update the player on the DOM based on the direction of the player
    this.player.move();

    //move all the obstacles
    for (let i = 0; i < this.obstacles.length; i++) {
      const currentObstacle = this.obstacles[i];
      currentObstacle.move();

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
      //check for collisions between the player and the trash can
      const didCollideTrashCan = this.player.didCollide(this.trashCan);
      if (didCollideTrashCan) {
        // if the player had items collected, then the score updates to the number of collected items
        if (this.collectedGarbageItemsCount > 0) {
          this.score += this.collectedGarbageItemsCount;
          this.scoreElement.innerText = this.score;

          // and we need to reset the collected items count back to 0
          this.collectedGarbageItemsCount = 0;
          this.collectedGarbageItems.innerText =
            this.collectedGarbageItemsCount;
        } else {
          //if the player collides with the trash can without having collected anything, he loses a life
          this.lives--;
          this.livesElement.innerText = this.lives;

          //if no more lives are left, the game ends
          if (this.lives === 0) {
            this.gameIsOver = true;
            this.player.element.remove();
            this.obstacles.forEach((oneObstacle) => {
              oneObstacle.element.remove();
            });
            this.gameScreen.style.display = "none";
            this.endScreen.style.display = "block";
          }
        }
      }
    }
  }
}
