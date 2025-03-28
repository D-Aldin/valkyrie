class MovableObject {
  x_position = 0;
  y_position = 310;
  img;
  height = 180;
  width = 180;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log("moving right");
  }

  moveLefit() {
    console.log("moving left");
  }
}
