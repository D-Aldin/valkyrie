class Minotaur extends MovableObject {
  width = 280;
  height = 280;
  y_position = 231;
  movingRight = true;
  live = 100;
  isDead = false;
  walkingInterval = null; // To track animation interval

  minotaurWalking = [
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

  minotaurDead = [
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Dying/0_Minotaur_Dying_000.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Dying/0_Minotaur_Dying_001.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Dying/0_Minotaur_Dying_002.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Dying/0_Minotaur_Dying_003.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Dying/0_Minotaur_Dying_004.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Dying/0_Minotaur_Dying_005.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Dying/0_Minotaur_Dying_006.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Dying/0_Minotaur_Dying_007.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Dying/0_Minotaur_Dying_008.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Dying/0_Minotaur_Dying_009.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Dying/0_Minotaur_Dying_010.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Dying/0_Minotaur_Dying_011.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Dying/0_Minotaur_Dying_012.png",
  ];

  constructor() {
    super();
    this.loadImage(this.minotaurWalking[0], true);
    this.loadImagesInCache(this.minotaurWalking);
    this.x_position = 1500;
    this.animate();
  }

  animate() {
    this.walkingInterval = setInterval(() => {
      if (this.isDead) {
        this.playDeadAnimation(); // <--- call new function
      } else {
        this.updateAnimationFrame(this.minotaurWalking);
        if (this.movingRight) {
          this.x_position += 4;
          if (this.x_position >= 1590) this.movingRight = false;
        } else {
          this.x_position -= 4;
          if (this.x_position <= 1450) this.movingRight = true;
        }
      }
    }, 60);
  }

  playDeadAnimation() {
    clearInterval(this.walkingInterval);
    this.imageCache = {};
    this.loadImagesInCache(this.minotaurDead);
    this.currentImage = 0;
    this.animateDead();
  }

  animateDead() {
    this.deadInterval = setInterval(() => {
      this.updateAnimationFrame(this.minotaurDead);
      if (this.currentImage >= this.minotaurDead.length - 1) {
        clearInterval(this.deadInterval);
      }
    }, 80);
  }
}
