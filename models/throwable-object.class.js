class ThrowableObject extends MovableObject {
  constructor(x, y) {
    super();
    this.loadImage("./assets/image/items/item/item.png");
    this.x_position = x;
    this.y_position = y;
    this.width = 50;
    this.height = 20;
    this.speedY = 30;
    this.trow();
  }

  trow() {
    this.speedY = 30;
    this.gravity();
    setInterval(() => {
      this.x_position += 25;
    }, 60);
  }
}
