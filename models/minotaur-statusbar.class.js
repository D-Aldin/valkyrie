class MinotaurStatusBar extends DrawableObject {
  healthMinotaur = [
    "./assets/image/status/minotaur1.png",
    "./assets/image/status/minotaur2.png",
    "./assets/image/status/minotaur3.png",
    "./assets/image/status/minotaur4.png",
    "./assets/image/status/minotaur5.png",
  ];

  percentageMinotaur = 100;
  live = 100;

  constructor() {
    super();
    this.loadImage("./assets/image/status/minotaur5.png");
    this.loadImagesInCache(this.healthMinotaur);
    this.setPercentageMinotaur(this.percentageMinotaur);
    this.x_position = 540;
    this.y_position = 5;
    this.width = 178;
    this.height = 135;
  }

  setPercentageMinotaur(percentage) {
    this.percentageValkyrie = percentage;
    let path = this.healthMinotaur[this.resolveImagePathMino(percentage) - 1];
    this.img = this.imageCache[path];
  }

  resolveImagePathMino(percentage) {
    if (percentage >= 100) return 5;
    if (percentage >= 80) return 4;
    if (percentage >= 60) return 3;
    if (percentage >= 40) return 2;
    if (percentage >= 0) return 1;
    return 1;
  }
}
