class ItemStatusBar extends DrawableObject {
  items = ["./assets/image/items/item/status5.png"];

  constructor() {
    super();
    this.loadImage(this.items);
    this.loadImagesInCache(this.items);
    this.x_position = 20;
    this.y_position = 30;
    this.width = 100;
    this.height = 50;
    // this.x_position = 200 + Math.random() * 500;
  }
}
