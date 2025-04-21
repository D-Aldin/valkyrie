class Minotaur extends MovableObject {
  width = 280;
  height = 280;
  y_position = 221;
  movingRight = true;

  MinotaurWalkingImages = [
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_000.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_001.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_002.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_003.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_004.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_005.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_006.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_007.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_008.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_009.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_010.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_011.png",
  ];

  constructor() {
    super();
    this.loadImage(this.MinotaurWalkingImages[0], true);
    this.loadImagesInCache(this.MinotaurWalkingImages);
    this.x_position = 1500;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.updateAnimationFrame(this.MinotaurWalkingImages);
      if (this.movingRight) {
        this.x_position += 4;
        if (this.x_position >= 1590) this.movingRight = false;
      } else {
        this.x_position -= 4;
        if (this.x_position <= 1450) this.movingRight = true;
      }
    }, 60);
  }
}
