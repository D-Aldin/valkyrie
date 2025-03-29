class Skeleton extends MovableObject {
  skeletonWalkingImages = [
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_000.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_001.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_002.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_003.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_004.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_005.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_006.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_007.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_008.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_009.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_010.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_011.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_012.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_013.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_014.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_015.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_016.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_017.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_018.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_019.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_020.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_021.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_022.png",
    "./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_023.png",
  ];

  constructor() {
    super();
    this.loadImage("./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_000.png", true);
    this.x_position = 300 + Math.random() * 500;
    this.loadImagesInCache(this.skeletonWalkingImages);
    this.animate();
    this.moveLeft();
  }

  animate() {
    setInterval(() => {
      let index = this.currentImage % this.skeletonWalkingImages.length;
      let path = this.skeletonWalkingImages[index];
      this.img = this.imageCache[path];
      this, this.currentImage++;
    }, 60);
  }
}
