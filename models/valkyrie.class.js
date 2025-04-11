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

  valkyrieJumping = [
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Jump Start/0_Valkyrie_Jump Start_000.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Jump Start/0_Valkyrie_Jump Start_001.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Jump Start/0_Valkyrie_Jump Start_002.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Jump Start/0_Valkyrie_Jump Start_003.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Jump Start/0_Valkyrie_Jump Start_004.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Jump Start/0_Valkyrie_Jump Start_005.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Jump Loop/0_Valkyrie_Jump Loop_000.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Jump Loop/0_Valkyrie_Jump Loop_001.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Jump Loop/0_Valkyrie_Jump Loop_002.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Jump Loop/0_Valkyrie_Jump Loop_003.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Jump Loop/0_Valkyrie_Jump Loop_004.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Jump Loop/0_Valkyrie_Jump Loop_005.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Falling Down/0_Valkyrie_Falling Down_000.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Falling Down/0_Valkyrie_Falling Down_001.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Falling Down/0_Valkyrie_Falling Down_002.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Falling Down/0_Valkyrie_Falling Down_003.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Falling Down/0_Valkyrie_Falling Down_004.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Falling Down/0_Valkyrie_Falling Down_005.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Jump Start/0_Valkyrie_Jump Start_000.png",
  ]

  valkyrieHurt = [
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Hurt/0_Valkyrie_Hurt_000.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Hurt/0_Valkyrie_Hurt_001.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Hurt/0_Valkyrie_Hurt_002.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Hurt/0_Valkyrie_Hurt_003.png",
  ]
  // currentImage = 0;
  world;
  speed = 12;
  isHurt = false


  constructor() {
    super();
    this.loadImage("./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_000.png", true);
    this.loadImagesInCache(this.valkyrieWalking)
    this.loadImagesInCache(this.valkyrieJumping)
    this.loadImagesInCache(this.valkyrieHurt)
    this.gravity()
    this.animate();
  }

  animate() {
    setInterval(() => {
      let isMoving = false;
  
      if (this.world.key.right && this.x_position + this.width < this.world.level.levelEnd) {
        this.moveRight(this.valkyrieWalking);
        this.direction = false;
        isMoving = true;
      }
  
      if (this.world.key.left && this.x_position > 0) {
        this.moveLeft(this.valkyrieWalking);
        this.direction = true;
        isMoving = true;
      }
  
      if (this.world.key.space) {
        this.jump();
      }
  
      if (this.isAboveGround()) {
        this.updateAnimationFrame(this.valkyrieJumping);
      } else if (isMoving) {
        this.updateAnimationFrame(this.valkyrieWalking);
      }
  
      this.world.cameraPosition = this.x_position;
    }, 60);
  }
  
  

  jump() {
    if (!this.isAboveGround()) {
      this.speedY = 30;
      
    }
    
  }
}
