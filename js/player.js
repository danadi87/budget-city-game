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
    this.left += this.directionX;
    this.bottom += this.directionY;
    if (this.left < 20) {
      this.left = 20;
    }
    if (this.left + this.width > window.innerWidth) {
      this.left = window.innerWidth - this.width;
    }
    if (this.bottom < 10) {
      this.bottom = 10;
    }
    if (this.bottom + this.height > window.innerHeight) {
      this.bottom = window.innerHeight - this.height;
    }

    this.updatePosition();
  }
  updatePosition() {
    this.element.style.bottom = `${this.bottom}px`;
    this.element.style.left = `${this.left}px`;
  }
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

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
