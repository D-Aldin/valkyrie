class ValkyrieStatusBar extends DrawableObject {
  healthValkyrie = [
    "./assets/image/status/health1.png",
    "./assets/image/status/health2.png",
    "./assets/image/status/health3.png",
    "./assets/image/status/health4.png",
    "./assets/image/status/health5.png",
    "./assets/image/status/health6.png",
  ];

  percentageValkyrie = 100;
  item = 0;

  constructor() {
    super();
    this.loadImage(this.healthValkyrie);
    this.loadImagesInCache(this.healthValkyrie);
    this.setPercentage(this.percentageValkyrie);
    this.x_position = 140;
    this.y_position = 50;
    this.width = 50;
    this.height = 75;
  }

  setPercentage(percentage) {
    this.percentageValkyrie = percentage;
    let path = this.healthValkyrie[this.resolveImagePath(percentage) - 1];
    this.img = this.imageCache[path];
  }

  resolveImagePath(percentage) {
    if (percentage == 100) {
      return 6;
    } else if (percentage >= 80) {
      return 5;
    } else if (percentage >= 60) {
      return 4;
    } else if (percentage >= 40) {
      return 3;
    } else if (percentage >= 20) {
      return 2;
    } else if (percentage >= 0) {
      return 1;
    } else {
      return 1;
    }
  }
}
