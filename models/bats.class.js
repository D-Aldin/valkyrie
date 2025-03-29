class Bats extends MovableObject {
  constructor() {
    super();
    this.loadImage("./assets/image/background/PNG/1/bats.png", true);
    this.y_position = 30;
    this.height = 500;
    this.width = 700;
    this.x_position = Math.random() * 500;
    this.end = this.moveBats();
  }

  moveBats() {
    setInterval(() => {
      this.x_position -= 0.25;
      if (this.x_position < 0) {
        this.x_position = 500;
      }
    }, 1);
  }
}
