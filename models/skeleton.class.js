class Skeleton extends MovableObject {
  constructor() {
    super();
    this.loadImage("./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_000.png", true);
    this.x_position = 300 + Math.random() * 500;
  }
}
