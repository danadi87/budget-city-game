class Instructions {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.instructions = document.querySelector("#instructions");
    this.height = 100;
    this.width = 100;
    this.startGameMusic = new Audio("../sounds/start-game-music.wav");
  }
  showInstructions() {
    //set the height and width of the instructions screen
    this.instructions.style.height = `${this.height}vh`;
    this.instructions.style.width = `${this.width}vw`;
    //to hide the start screen
    this.startScreen.style.display = "none";
    //to show the instructions screen
    this.instructions.style.display = "block";
    //start the music for the game
    this.startGameMusic.play();
  }
}
