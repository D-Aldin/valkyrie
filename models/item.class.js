class Item extends DrawableObject {
    item = ["./assets/image/items/item/item.png"]
    y_position = 310;
    width = 66;
    height = 30;

    constructor() {
        super();
        this.loadImage(this.item);
        this.x_position = 200 + Math.random() * 500;
        this.loadImagesInCache(this.item);
    }

}

