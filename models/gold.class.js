class Gold extends DrawableObject{
    gold = ["assets/image/items/gold/gold.png"]
    y_position = 200;
    width = 60;
    height = 60;

    constructor() {

        super();
        this.loadImage(this.gold);
        this.x_position = 200 + Math.random() * 500;
        this.loadImagesInCache(this.gold);
        // this.animate();
    }

    animate() {
        setInterval(() => {

        }, 60)
    }
}