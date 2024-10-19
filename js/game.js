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
    this.player = new Player(0, 30, 200, 320, "images/garbage collector.png");
    this.height = 100;
    this.width = 100;
    this.obstacles = [new Obstacle()];
    this.score = 0 / 50;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 120;
    this.counter = 0;
    this.collectedGarbageItemsCount = 0;
    this.trashCan = new Player(
      1300,
      400,
      100,
      200,
      "images/old-closed-trash-can.png"
    );
    this.startGameMusic = new Audio("sounds/start-game-music.wav");
    this.startGameMusic.volume = 0.07;
    this.positionY = [
      500, 400, 340, 50, 218, 32, 324, 488, 170, 85, 110, 48, 33, 263, 144,
    ];
    this.randomIndex = Math.floor(Math.random() * this.positionY.length);
    this.bottom = this.positionY[this.randomIndex];
    this.positionX = [];
    this.timerElement = document.getElementById("timer");
    this.timer = null;
    this.messageLoser = document.getElementById("message-loser");
    this.messageWinner = document.getElementById("message-winner");
    this.endGameMusicLoser = new Audio("sounds/end-game-lose.wav");
    this.endGameMusicLoser.volume = 0.07;
    this.endGameMusicWinner = new Audio("sounds/end-game-win.wav");
    this.endGameMusicWinner.volume = 0.07;
    this.highScores = document.getElementById("high-scores-card");
  }
  start() {
    this.gameScreen.style.height = `${this.height}vh`;
    this.gameScreen.style.width = `${this.width}vw`;
    this.startScreen.style.display = "none";
    this.highScores.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameContainer.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
    this.startGameMusic.play();

    this.startGameMusic.loop = true;
    this.startGameMusic.play();
    this.startCountdown();
  }
  startCountdown() {
    let duration = 75;
    this.timer = setInterval(() => {
      duration--;
      let minutes = Math.floor(duration / 60);
      let seconds = duration % 60;
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      const formattedTime = `${minutes}:${seconds}`;
      this.timerElement.innerText = formattedTime;
      if (duration === 0) {
        clearInterval(this.timer);
        this.gameIsOver = true;
        this.endGame;
      }
    }, 1000);
  }
  gameLoop() {
    this.update();
    if (this.gameIsOver === true) {
      clearInterval(this.gameIntervalId);
      clearInterval(this.timer);
      this.endGame();
      const highScoresFromLS = JSON.parse(localStorage.getItem("highScores"));
      if (!highScoresFromLS) {
        localStorage.setItem("highScores", JSON.stringify([this.score]));
      } else {
        highScoresFromLS.push(this.score);
        highScoresFromLS.sort((a, b) => {
          if (a > b) {
            return -1;
          } else if (a < b) {
            return 1;
          } else {
            return 0;
          }
        });
        const topThreeScores = highScoresFromLS.slice(0, 3);
        localStorage.setItem("highScores", JSON.stringify([...topThreeScores]));
        topThreeScores.forEach((oneScore) => {
          const newLi = document.createElement("li");
          newLi.innerText = oneScore;
          this.highScores.appendChild(newLi);
        });
      }
    }
  }
  update() {
    this.counter++;
    if (this.counter % 180 === 0) {
      this.obstacles.push(new Obstacle());
    }
    this.player.move();
    for (let i = 0; i < this.obstacles.length; i++) {
      const currentObstacle = this.obstacles[i];
      currentObstacle.move();

      const didCollide = this.player.didCollide(currentObstacle);
      if (didCollide) {
        this.obstacles.splice(i, 1);
        currentObstacle.element.remove();

        this.collectedGarbageItemsCount++;
        console.log(this.collectedGarbageItemsCount);
        this.collectedGarbageItems.innerText = this.collectedGarbageItemsCount;
      }

      const didCollideTrashCan = this.player.didCollide(this.trashCan);
      if (didCollideTrashCan) {
        if (this.collectedGarbageItemsCount > 0) {
          this.score += this.collectedGarbageItemsCount;
          this.scoreElement.innerText = `${this.score} / 50`;

          const randomIndex = Math.floor(Math.random() * this.positionY.length);
          const randomYPosition = this.positionY[randomIndex];
          const randomXPosition = Math.floor(
            Math.random() * (window.innerWidth - this.trashCan.width)
          );
          this.trashCan.bottom = randomYPosition;
          this.trashCan.left = randomXPosition;

          this.trashCan.updatePosition();

          this.collectedGarbageItemsCount = 0;
          this.collectedGarbageItems.innerText =
            this.collectedGarbageItemsCount;
        } else {
          console.log("test", this.collectedGarbageItemsCount);
          this.lives--;
          this.livesElement.innerText = this.lives;
          const randomIndex = Math.floor(Math.random() * this.positionY.length);
          const randomYPosition = this.positionY[randomIndex];
          const randomXPosition = Math.floor(
            Math.random() * (window.innerWidth - this.trashCan.width)
          );
          this.trashCan.bottom = randomYPosition;
          this.trashCan.left = randomXPosition;

          this.trashCan.updatePosition();

          if (this.lives === 0) {
            this.gameIsOver = true;
            this.endGame();
          }
        }
      }
    }
  }
  endGame() {
    this.player.element.remove();
    this.obstacles.forEach((oneObstacle) => {
      oneObstacle.element.remove();
    });
    this.gameScreen.style.display = "none";
    this.endScreen.style.display = "flex";

    this.startGameMusic.pause();

    this.messageLoser.style.display = "none";
    this.messageWinner.style.display = "none";

    if (this.lives === 0) {
      this.messageLoser.style.display = "block";
      this.endGameMusicLoser.play();
    } else if (this.lives > 0 && this.score < 50) {
      this.messageLoser.style.display = "block";
      this.endGameMusicLoser.play();
    } else if (this.lives > 0 && this.score >= 50) {
      this.messageWinner.style.display = "block";
      this.endGameMusicWinner.play();
    }
    if (this.gameIsOver === true) {
      this.highScores.style.display = "block";
    }
  }
}
