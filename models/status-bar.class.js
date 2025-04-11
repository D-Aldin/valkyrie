class StatusBar extends DrawableObject {


    statusBarImages = ["./assets/image/status/1.png", "./assets/image/status/2.png", "./assets/image/status/3.png", "./assets/image/status/4.png", "./assets/image/status/5.png", "./assets/image/status/6.png"];
    percentage = 100;

    constructor() {
        super();
        this.loadImage(this.statusBarImages);
        this.loadImagesInCache(this.statusBarImages);
        this.x_position = 100;
        this.y_position = 50;
        this.width = 40;
        this.height = 65;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.statusBarImages[this.resolveImagePath()]
        this.img = this.imageCache[path]
    }

    resolveImagePath(percentage) {
        if (percentage == 100) {
            return 5
        } 
        else if(percentage >= 80) {
            return 4
        }
        else if(percentage >= 60) {
            return 3
        } else if(percentage >= 40) {
            return 2
        } else if(percentage >= 20) {
            return 1
        } else if(percentage >= 0) {
            return 1
        } else {
            return 1
        }
    } ;
}

