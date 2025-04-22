class Gold extends DrawableObject {
  gold = ["assets/image/items/gold/gold.png"];
  y_position = 200;
  width = 50;
  height = 50;

  constructor() {
    super();
    this.loadImage(this.gold);
    this.x_position = 100 + Math.random() * 1000;
    this.y_position = 200 + Math.random() * 100;
    this.loadImagesInCache(this.gold);
  }

  animate() {
    setInterval(() => {}, 60);
  }
}
