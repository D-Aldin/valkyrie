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
      if (this.isAboveGround() || this.speedY > 0) {
        this.y_position -= this.speedY;
        this.speedY -= this.acceleration
      }      
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y_position < 310;
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x_position, this.y_position, this.width, this.height);
  }

  updateAnimationFrame(images) {
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

  moveRight(obj) {
    this.x_position += this.speed;
    this.updateAnimationFrame(obj)
    
  }

  moveLeft(obj) {
    this.x_position -= this.speed;
    this.updateAnimationFrame(obj)
 
  }

  jump() {
    this.speedY = 30
  } 
}
