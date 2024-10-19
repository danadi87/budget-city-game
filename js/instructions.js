class Instructions {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.instructions = document.querySelector("#instructions");
    this.height = 100;
    this.width = 100;
    this.startGameMusic = new Audio("sounds/start-game-music.wav");
    this.startGameMusic.volume = 0.07;
  }
  showInstructions() {
    this.instructions.style.height = `${this.height}vh`;
    this.instructions.style.width = `${this.width}vw`;
    this.startScreen.style.display = "none";
    this.instructions.style.display = "block";
    this.startGameMusic.play();
    this.startGameMusic.loop = true;
    this.startGameMusic.play();
  }
}
