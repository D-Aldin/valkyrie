class Background extends MovableObject {
  width = 720;
  height = 480;
  constructor(imagePath, x) {
    super();
    this.loadImage(imagePath);
    this.x_position = x;
    this.y = 480 - this.height;
    this.y_position = 0;

  }
}
