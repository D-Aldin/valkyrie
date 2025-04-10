class MovableObject {
  x_position = 0;
  y_position = 200;
  img;
  height = 180;
  width = 180;
  imageCache = {};
  currentImage = 0;
  speed = Math.random() * 0.25;
  direction = false;
  speedY = 0;
  acceleration = 2.5


  gravity() {
    setInterval(() => {
      if (this.y_position < 310) {
        this.y_position -= this.speedY;
        this.speedY -= this.acceleration
      }
 

      
    }, 1000 / 25);
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  updateAnimationFrame(images) {
    // console.log(images.length);
    
    let index = this.currentImage % images.length;
    let path = images[index];
    this.img = this.imageCache[path];
    this.currentImage++;
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
