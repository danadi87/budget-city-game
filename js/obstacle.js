class Obstacle {
  constructor() {
    this.gameScreen = document.querySelector("#game-screen");
    //the position is Y because the obstacles will move vertically
    //the numbers in the array will determine the position at different heights on the screen
    this.positionY = [
      500, 400, 340, 50, 218, 32, 324, 488, 170, 85, 110, 48, 33, 263, 144,
    ];
    this.randomIndex = Math.floor(Math.random() * this.positionY.length);
    this.bottom = this.positionY[this.randomIndex];
    this.height = 120;
    this.width = 100;
    this.left = window.innerWidth; //start on the right side of the screen

    //create an array of obstacles
    const obstacleImages = [
      "images/obstacles/apple remains.png",
      "images/obstacles/banana peel.png",
      "images/obstacles/bone.png",
      "images/obstacles/cigarette.png",
      "images/obstacles/dirty bag brown.png",
      "images/obstacles/dirty bag white.png",
      "images/obstacles/dirty bags.png",
      "images/obstacles/dirty newspapers.png",
      "images/obstacles/egg shell.png",
      "images/obstacles/food remains and rats.png",
      "images/obstacles/green salad.png",
      "images/obstacles/various garbage.png",
      "images/obstacles/melon remains.png",
      "images/obstacles/plastic bags.png",
      "images/obstacles/spilled ice cream.png",
      "images/obstacles/strawberry.png",
    ];
    //select a random obstacle image
    const randomIndex = Math.floor(Math.random() * obstacleImages.length);
    const randomImage = obstacleImages[randomIndex];

    //create the image of the obstacle in js to append to the game screen
    this.element = document.createElement("img");
    this.element.style.position = "absolute";
    this.element.src = randomImage;

    //adjust the position attributes for the obstacles
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.bottom = `${this.bottom}px`;

    //append the obstacle image to the game screen
    this.gameScreen.appendChild(this.element);
  }
  move() {
    //moving the obstacle to the left 3 pixels
    this.left -= 3;

    //check if the obstacle has gone out of bounds and resets it to the right side
    if (this.left < -this.width) {
      this.left = window.innerWidth;

      //reset the bottom position randomly
      this.randomIndex = Math.floor(Math.random() * this.positionY.length);
      this.bottom = this.positionY[this.randomIndex];
    }

    this.updatePosition();
  }
  //the method to visually see where the player moves
  updatePosition() {
    this.element.style.bottom = `${this.bottom}px`;
    this.element.style.left = `${this.left}px`;
  }
}
