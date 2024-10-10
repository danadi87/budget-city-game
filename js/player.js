class Player {
  constructor(left, top, width, height, playerImage) {
    this.gameScreen = document.querySelector("#game-screen");
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    //create the image in the js file to append to the game screen
    this.element = document.createElement("img");
    this.element.style.position = "absolute";
    this.element.src = playerImage;
    this.element.style.height = `${height}px`;
    this.element.style.width = `${width}px`;
    this.element.style.top = `${top}px`;
    this.element.style.left = `${left}px`;
    //to add the image to the DOM
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
  didCollide(obstacle) {}
}
