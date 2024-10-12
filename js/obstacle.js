class Obstacle {
  constructor() {
    this.gameScreen = document.querySelector("#game-screen");
    //the position is Y because the obstacles will move horizontally and not vertically
    this.positionY = [150, 360, 540, 1000, 1300, 970, 800, 280];
    this.randomIndex = Math.floor(Math.random() * this.positionY.length);
    this.top = this.positionY[this.randomIndex];
    this.height = 120;
    this.width = 100;
    this.left = 1200; //start on the right side of the screen

    //create an array of obstacles
    const obstacleImages = [
      "../images/obstacles/apple remains.png",
      "../images/obstacles/banana peel.png",
      "../images/obstacles/bone.png",
      "../images/obstacles/cigarette.png",
      "../images/obstacles/dirty bag brown.png",
      "../images/obstacles/dirty bag white.png",
      "../images/obstacles/dirty bags.png",
      "../images/obstacles/dirty newspapers.png",
      "../images/obstacles/egg shell.png",
      "../images/obstacles/food remains and rats.png",
      "../images/obstacles/green salad.png",
      "../images/obstacles/various garbage.png",
      "../images/obstacles/melon remains.png",
      "../images/obstacles/plastic bags.png",
      "../images/obstacles/spilled ice cream.png",
      "../images/obstacles/strawberry.png",
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
    this.element.style.top = `${this.top}px`;

    //append the obstacle image to the game screen
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.left -= 3;
    this.updatePosition();
  }
  //the method to visually see where the player moves
  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
}
