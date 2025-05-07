/**
 * Class representing a Valkyrie character.
 * This class extends the `MovableObject` class and manages the Valkyrie's movement, animations, and interactions in the game world.
 *
 * @extends MovableObject
 */
class Valkyrie extends MovableObject {
  /**
   * Array of images for the walking animation.
   * @type {string[]}
   */
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

  /**
   * Array of images for the jumping animation (start, loop, and falling).
   * @type {string[]}
   */
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
  ];

  /**
   * Array of images for the hurt animation.
   * @type {string[]}
   */
  valkyrieHurt = [
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Hurt/0_Valkyrie_Hurt_000.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Hurt/0_Valkyrie_Hurt_001.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Hurt/0_Valkyrie_Hurt_002.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Hurt/0_Valkyrie_Hurt_003.png",
  ];

  /**
   * Array of images for the dying animation.
   * @type {string[]}
   */
  valkyrieDead = [
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Dying/0_Valkyrie_Dying_000.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Dying/0_Valkyrie_Dying_001.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Dying/0_Valkyrie_Dying_002.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Dying/0_Valkyrie_Dying_003.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Dying/0_Valkyrie_Dying_004.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Dying/0_Valkyrie_Dying_005.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Dying/0_Valkyrie_Dying_006.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Dying/0_Valkyrie_Dying_007.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Dying/0_Valkyrie_Dying_008.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Dying/0_Valkyrie_Dying_009.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Dying/0_Valkyrie_Dying_010.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Dying/0_Valkyrie_Dying_011.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Dying/0_Valkyrie_Dying_012.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Dying/0_Valkyrie_Dying_013.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Dying/0_Valkyrie_Dying_014.png",
  ];

  /**
   * Array of images for the throwing animation.
   * @type {string[]}
   */
  valkyrieThrowing = [
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Throwing/0_Valkyrie_Throwing_000.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Throwing/0_Valkyrie_Throwing_001.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Throwing/0_Valkyrie_Throwing_002.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Throwing/0_Valkyrie_Throwing_003.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Throwing/0_Valkyrie_Throwing_004.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Throwing/0_Valkyrie_Throwing_005.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Throwing/0_Valkyrie_Throwing_006.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Throwing/0_Valkyrie_Throwing_007.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Throwing/0_Valkyrie_Throwing_008.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Throwing/0_Valkyrie_Throwing_009.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Throwing/0_Valkyrie_Throwing_010.png",
    "./assets/image/Valkyrie_3/PNG/PNG Sequences/Throwing/0_Valkyrie_Throwing_011.png",
  ];

  /**
   * The game world the Valkyrie is part of.
   * @type {World}
   */
  world;

  /**
   * The vertical position of the Valkyrie in the game world.
   * @type {number}
   */
  y_position = 360;

  /**
   * The speed of the Valkyrie.
   * @type {number}
   */
  speed = 12;
  x;
  /**
   * Indicates whether the Valkyrie is hurt.
   * @type {boolean}
   */
  isHurt = false;

  /**
   * Indicates whether the Valkyrie is dead.
   * @type {boolean}
   */
  isDead = false;

  /**
   * Indicates whether the Valkyrie is currently throwing an item.
   * @type {boolean}
   */
  isThrowing = false;

  /**
   * Indicates whether the Valkyrie is falling.
   * @type {boolean}
   */
  isFalling = false;

  /**
   * The Valkyrie's health.
   * @type {number}
   */
  live = 100;

  /**
   * The amount of gold collected by the Valkyrie.
   * @type {number}
   */
  collectGold = 0;

  /**
   * The amount of items collected by the Valkyrie.
   * @type {number}
   */
  collectItem = 0;

  /**
   * Creates an instance of the Valkyrie character.
   * Initializes the character's animations and sets up the gravity and animation loop.
   */
  constructor() {
    super();
    this.loadImage("./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_001.png", true);
    this.loadImagesInCache(this.valkyrieWalking);
    this.loadImagesInCache(this.valkyrieJumping);
    this.loadImagesInCache(this.valkyrieThrowing);
    this.loadImagesInCache(this.valkyrieHurt);
    this.loadImagesInCache(this.valkyrieDead);
    this.gravity();
    this.animate();
  }

  /**
   * Starts the animation loop and updates the Valkyrie's movement and animation.
   * Runs every 60 milliseconds.
   */
  animate() {
    setInterval(() => {
      this.handleMovement();
      this.handleAnimation();
      this.world.cameraPosition = this.x_position;
    }, 60);
  }

  /**
   * Handles the Valkyrie's movement based on user input.
   * Moves the Valkyrie left or right and makes her jump when the respective keys are pressed.
   */
  handleMovement() {
    if (this.isDead) return;
    this.isMoving = false;
    if (this.world.key.right && this.x_position + this.width < this.world.level.levelEnd) {
      this.moveRight(this.valkyrieWalking);
      this.direction = false;
      this.isMoving = true;
    }
    if (this.world.key.left && this.x_position > 0) {
      this.moveLeft(this.valkyrieWalking);
      this.direction = true;
      this.isMoving = true;
    }
    if (this.world.key.space) this.jump();
  }

  /**
   * Handles the Valkyrie's animation based on her movement state.
   * Updates the animation frames based on whether she is jumping or walking.
   */
  handleAnimation() {
    if (this.isDead) {
      if (!this.hasPlayedDeathAnimation) {
        this.width = 90;
        this.height = 90;
        this.playAnimationOnce(this.valkyrieDead, () => {
          this.hasPlayedDeathAnimation = true;
        });
      }
    } else if (this.isAboveGround()) {
      this.updateAnimationFrame(this.valkyrieJumping);
    } else if (this.isMoving) {
      this.updateAnimationFrame(this.valkyrieWalking);
    }
  }

  /**
   * Makes the Valkyrie jump by setting her vertical speed (Y-axis).
   */
  jump() {
    if (!this.isAboveGround()) {
      this.speedY = 30;
    }
  }

  playAnimationOnce(images, onFinish) {
    if (!this.currentImageIndex) this.currentImageIndex = 0;
    this.img = this.imageCache[images[this.currentImageIndex]];
    this.currentImageIndex++;
    if (this.currentImageIndex >= images.length) {
      this.currentImageIndex = images.length - 1;
      if (onFinish) onFinish();
    }
  }
}
