class Player {
  constructor(left, bottom, width, height, playerImage) {
    this.gameScreen = document.querySelector("#game-screen");
    this.bottom = bottom;
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
    this.element.style.bottom = `${this.bottom}px`;
    this.element.style.left = `${this.left}px`;
    //to add the image to the DOM
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.left += this.directionY;
    this.bottom += this.directionX;
    if (this.left < 10) {
      this.left = 10;
    }
    if (this.left + this.width > 200) {
      this.left = 200 - this.width;
    }
    if (this.bottom < 10) {
      this.bottom = 0;
    }
    if (this.bottom + this.height > 340) {
      this.bottom = 340 - this.height;
    }

    this.updatePosition();
  }
  updatePosition() {
    this.element.style.bottom = `${this.bottom}px`;
    this.element.style.left = `${this.left}px`;
  }
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = this.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
