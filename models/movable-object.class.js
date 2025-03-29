class MovableObject {
  x_position = 0;
  y_position = 310;
  img;
  height = 180;
  width = 180;
  imageCache = {};
  currentImage = 0;
  speed = Math.random() * 0.25;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImagesInCache(arr) {
    arr.forEach((path) => {
      let image = new Image();
      image.src = path;
      this.imageCache[path] = image;
    });
  }

  moveRight() {
    console.log("moving right");
  }

  moveLeft() {
    setInterval(() => {
      this.x_position -= this.speed;
      if (this.x_position < 0) {
        this.x_position = 500;
      }
    }, 2);
  }
}
