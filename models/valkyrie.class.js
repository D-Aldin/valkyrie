class Valkyrie extends MovableObject {
  valkyrieWalking = [
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_001.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_000.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_002.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_003.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_004.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_005.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_006.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_007.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_008.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_009.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_010.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_011.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_012.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_013.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_014.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_015.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_016.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_017.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_018.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_019.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_020.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_021.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_022.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_023.png",
  ];
  // currentImage = 0;
  world;
  speed = 12;

  constructor() {
    super();
    this.loadImage("./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_000.png", true);
    this.loadImagesInCache(this.valkyrieWalking);
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.key.right) {
        this.x_position += this.speed;
        let index = this.currentImage % this.valkyrieWalking.length;
        let path = this.valkyrieWalking[index];
        this.img = this.imageCache[path];
        this, this.currentImage++;
        this.direction = false;
      }
      if (this.world.key.left) {
        this.x_position -= this.speed;
        this.direction = true;
      }
      this.world.camera_position = this.x_position;
    }, 60);
  }

  jump() {}
}
