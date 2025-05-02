class DrawableObject {
  img;
  currentImage = 0;
  imageCache = {};
  intervals = [];
  height = 110;
  width = 80;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx, cameraPosition = 0) {
    if (this.img && this.img.complete && this.img.naturalWidth > 0) {
      ctx.drawImage(this.img, this.x_position - cameraPosition, this.y_position, this.width, this.height);
    }
  }

  loadImagesInCache(arr) {
    arr.forEach((path) => {
      let image = new Image();
      image.src = path;
      this.imageCache[path] = image;
    });
  }

  drawFrame(ctx) {
    if (
      this instanceof Valkyrie ||
      this instanceof Minotaur ||
      this instanceof Skeleton ||
      this instanceof Item ||
      this instanceof Gold
    ) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x_position, this.y_position, this.width, this.height);
      ctx.stroke();
    }
  }

  stopIntervals() {
    this.intervals.forEach((interval) => {
      clearInterval(interval);
      // console.log(this.intervals);
    });
  }
}
