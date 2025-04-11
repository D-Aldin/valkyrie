class DrawableObject {
    img;
    currentImage = 0;
    imageCache = {};
    height = 180;
    width = 180;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
      }

    draw(ctx) {
        ctx.drawImage(this.img, this.x_position, this.y_position, this.width, this.height);
      }

    loadImagesInCache(arr) {
        arr.forEach((path) => {
          let image = new Image();
          image.src = path;
          this.imageCache[path] = image;
        });
      }


      drawFrame(ctx) {
        if (this instanceof Valkyrie || this instanceof Minotaur || this instanceof Skeleton) {
          ctx.beginPath();
          ctx.lineWidth = "5";
          ctx.strokeStyle = "blue";
          ctx.rect(this.x_position, this.y_position, this.width, this.height);
          ctx.stroke();
          
        }
      }
}