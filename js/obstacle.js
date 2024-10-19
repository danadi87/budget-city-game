class Obstacle {
  constructor() {
    this.gameScreen = document.querySelector("#game-screen");
    this.positionY = [
      500, 400, 340, 50, 218, 32, 324, 488, 170, 85, 110, 48, 33, 263, 144,
    ];
    this.randomIndex = Math.floor(Math.random() * this.positionY.length);
    this.bottom = this.positionY[this.randomIndex];
    this.height = 120;
    this.width = 100;
    this.left = window.innerWidth;

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

    const randomIndex = Math.floor(Math.random() * obstacleImages.length);
    const randomImage = obstacleImages[randomIndex];
    this.element = document.createElement("img");
    this.element.style.position = "absolute";
    this.element.src = randomImage;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.bottom = `${this.bottom}px`;
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.left -= 3;
    if (this.left < -this.width) {
      this.left = window.innerWidth;
      this.randomIndex = Math.floor(Math.random() * this.positionY.length);
      this.bottom = this.positionY[this.randomIndex];
    }

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.bottom = `${this.bottom}px`;
    this.element.style.left = `${this.left}px`;
  }
}
