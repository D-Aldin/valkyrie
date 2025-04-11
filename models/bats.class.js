class Bats extends MovableObject {

  batsImages = ["./assets/image/bats/bats0.png"];

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
    setInterval(() => {
      this.moveLeft(this.batsImages);
    }, 60);
    
  }
}
