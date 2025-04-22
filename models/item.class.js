class Item extends DrawableObject {
  item = ["./assets/image/items/item/item.png"];
  y_position = 450;
  width = 60;
  height = 20;

  constructor() {
    super();
    this.loadImage(this.item);
    this.x_position = 200 + Math.random() * 1000;
    this.loadImagesInCache(this.item);
  }
}
