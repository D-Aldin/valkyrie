class MovableObject {
  x_position = 400;
  y_position = 300;
  img;
  height = 220;
  width = 320;

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
