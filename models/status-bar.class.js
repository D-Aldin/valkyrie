class StatusBar extends DrawableObject {


    health = ["./assets/image/status/1.png", "./assets/image/status/2.png", "./assets/image/status/3.png", "./assets/image/status/4.png", "./assets/image/status/5.png", "./assets/image/status/6.png"];
    // items = ["assets/image/items/item/0.png", "./assets/image/items/item/1.png", "./assets/image/items/item/2.png", "./assets/image/items/item/3.png", "./assets/image/items/item/4.png", "./assets/image/items/item/5.png"];
    
    percentage = 100;
    // item = 0
    // goldAmount = 0;

    constructor() {
        super();
        this.loadImage(this.health);
        this.loadImagesInCache(this.health);
        // this.loadImage(this.items);
        // this.loadImagesInCache(this.items);
        // this.loadImage(this.gold);
        // this.loadImagesInCache(this.gold);
        this.setPercentage(100);
        this.x_position = 30;
        this.y_position = 50;
        this.width = 50;
        this.height = 75;
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.health[this.resolveImagePath(percentage) - 1];
        this.img = this.imageCache[path]
    }

    resolveImagePath(percentage) {
        if (percentage == 100) {
            return 6
        } 
        else if(percentage >= 80) {
            return 5
        }
        else if(percentage >= 60) {
            return 4
        } else if(percentage >= 40) {
            return 3
        } else if(percentage >= 20) {
            return 2
        } else if(percentage >= 0) {
            return 1
        } else {
            return 1
        }
    } ;

    // collectItem() {
    //     this.item++;
    //     let path = this.items[this.item - 1];
    //     this.img = this.imageCache[path]
    // }

    // collectGold() {
    //     this.goldAmount++;
    //     let path = this.gold[this.goldAmount - 1];
    //     this.img = this.imageCache[path]
    // }
 

}

