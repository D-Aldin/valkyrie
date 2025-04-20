class GoldStatusBar extends DrawableObject {
  gold = ["./assets/image/items/gold/5.png"];

  constructor() {
    super();
    this.loadImage(this.gold);
    this.loadImagesInCache(this.gold);
    this.x_position = 21;
    this.y_position = 80;
    this.width = 100;
    this.height = 50;
  }
}
