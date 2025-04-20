class MovableObject extends DrawableObject {
  x_position = 0;
  y_position = 180;
  speed = Math.random() * 0.25;
  direction = false;
  speedY = 0;
  acceleration = 2.5;

  gravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y_position -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y_position < 360;
  }

  updateAnimationFrame(images) {
    let index = this.currentImage % images.length;
    let path = images[index];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  isColliding(obj) {
    return this.x_position + this.width > obj.x_position && this.y_position + this.height > obj.y_position && this.x_position < obj.x_position + obj.width && this.y_position < obj.y_position + obj.height;
  }

  moveRight(obj) {
    this.x_position += this.speed;
    this.updateAnimationFrame(obj);
  }

  moveLeft(obj) {
    this.x_position -= this.speed;
    this.updateAnimationFrame(obj);
  }

  jump() {
    this.speedY = 30;
  }
}
