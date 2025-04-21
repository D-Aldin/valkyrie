class ItemStatusBar extends DrawableObject {
  items = ["./assets/image/items/item/status0.png", "./assets/image/items/item/status1.png", "./assets/image/items/item/status2.png", "./assets/image/items/item/status3.png", "./assets/image/items/item/status4.png", "./assets/image/items/item/status5.png"];

  constructor() {
    super();
    this.loadImage("./assets/image/items/item/status0.png");
    this.loadImagesInCache(this.items);
    this.x_position = 20;
    this.y_position = 30;
    this.width = 120;
    this.height = 50;
  }

  setItemCount(count) {
    let index = Math.min(count, this.items.length - 1);
    let path = this.items[index];
    this.img = this.imageCache[path];
  }
}
