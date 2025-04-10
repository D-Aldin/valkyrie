class Bats extends MovableObject {

  batsImages = ["./assets/image/background/PNG/1/bats.png"];

  constructor() {
    super();
    this.loadImagesInCache(this.batsImages);
    this.loadImage(this.batsImages[0], true);
    this.y_position = 30;
    this.height = 500;
    this.width = 700;
    this.x_position = Math.random() * 500;
    this.animateMoving();
  }

  animateMoving() {
    this.moveLeft(this.batsImages);
  }
}
