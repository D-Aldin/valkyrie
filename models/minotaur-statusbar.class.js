class MinotaurStatusBar extends DrawableObject {
  healthMinotaur = [
    "./assets/image/status/1.png",
    "./assets/image/status/2.png",
    "./assets/image/status/3.png",
    "./assets/image/status/4.png",
    "./assets/image/status/5.png",
  ];
  percentageMinotaur = 100;

  constructor() {
    super();
    this.loadImage(this.healthMinotaur);
    this.loadImagesInCache(this.healthMinotaur);
    this.x_position = 240;
    this.y_position = 50;
    this.width = 50;
    this.height = 75;
  }
}
