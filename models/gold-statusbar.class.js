class GoldStatusBar extends DrawableObject {
  gold = ["./assets/image/items/gold/1.png", "./assets/image/items/gold/2.png", "./assets/image/items/gold/3.png", "./assets/image/items/gold/4.png", "./assets/image/items/gold/5.png"];

  constructor() {
    super();
    this.loadImage("./assets/image/items/gold/0.png");
    this.loadImagesInCache(this.gold);
    this.x_position = 21;
    this.y_position = 80;
    this.width = 120;
    this.height = 50;
  }

  setGoldCount(count) {
    let index = Math.min(count, this.gold.length - 1);
    let path = this.gold[index];
    this.img = this.imageCache[path];
  }
}
