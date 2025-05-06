class ItemStatusBar extends DrawableObject {
  items = [
    "./assets/image/items/item/status0.png",
    "./assets/image/items/item/status1.png",
    "./assets/image/items/item/status2.png",
    "./assets/image/items/item/status3.png",
    "./assets/image/items/item/status4.png",
    "./assets/image/items/item/status5.png",
  ];

  gold = [
    "./assets/image/items/gold/0.png",
    "./assets/image/items/gold/1.png",
    "./assets/image/items/gold/2.png",
    "./assets/image/items/gold/3.png",
    "./assets/image/items/gold/4.png",
    "./assets/image/items/gold/5.png",
  ];

  itemCount = 0;
  goldCount = 0;

  constructor() {
    super();
    this.loadImagesInCache(this.items);
    this.loadImagesInCache(this.gold);
    this.setItemCount(0);
    this.setGoldCount(0);
    this.width = 120;
    this.height = 50;
  }

  setItemCount(count) {
    this.itemCount = Math.min(count, this.items.length - 1);
  }

  setGoldCount(count) {
    this.goldCount = Math.min(count, this.gold.length - 1);
  }

  /**
   * Draw both item and gold images in their positions.
   */
  draw(ctx) {
    const itemImage = this.imageCache[this.items[this.itemCount]];
    const goldImage = this.imageCache[this.gold[this.goldCount]];

    // Ensure both images are loaded
    if (itemImage) ctx.drawImage(itemImage, 20, 30, this.width, this.height);
    if (goldImage) ctx.drawImage(goldImage, 21, 80, this.width, this.height);
  }
}
