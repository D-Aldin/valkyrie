/**
 * Class representing a Minotaur enemy in the game.
 * This class handles the Minotaur's movement, animations (walking, hurt, dying), and status (alive, dead, hurt).
 */
class Minotaur extends MovableObject {
  /**
   * The width of the Minotaur.
   * @type {number}
   */
  width = 280;

  /**
   * The height of the Minotaur.
   * @type {number}
   */
  height = 280;

  /**
   * The vertical position of the Minotaur on the screen.
   * @type {number}
   */
  y_position = 231;

  /**
   * Flag to indicate whether the Minotaur is moving to the right.
   * @type {boolean}
   */
  movingRight = true;

  /**
   * The health of the Minotaur. Starts at 100.
   * @type {number}
   */
  live = 100;

  /**
   * Flag to indicate if the Minotaur is dead.
   * @type {boolean}
   */
  isDead = false;

  /**
   * Interval used to track the Minotaur's walking animation.
   * @type {null | number}
   */
  walkingInterval = null;

  /**
   * Flag to indicate if the Minotaur is hurt.
   * @type {boolean}
   */
  isHurt = false;

  /**
   * The array of walking animation images for the Minotaur.
   * @type {string[]}
   */
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

  /**
   * The array of dying animation images for the Minotaur.
   * @type {string[]}
   */
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
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Dying/0_Minotaur_Dying_013.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Dying/0_Minotaur_Dying_014.png",
  ];

  /**
   * The array of hurt animation images for the Minotaur.
   * @type {string[]}
   */
  minotaurHurt = [
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Hurt/0_Minotaur_Hurt_000.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Hurt/0_Minotaur_Hurt_001.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Hurt/0_Minotaur_Hurt_002.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Hurt/0_Minotaur_Hurt_003.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Hurt/0_Minotaur_Hurt_004.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Hurt/0_Minotaur_Hurt_005.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Hurt/0_Minotaur_Hurt_006.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Hurt/0_Minotaur_Hurt_007.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Hurt/0_Minotaur_Hurt_008.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Hurt/0_Minotaur_Hurt_009.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Hurt/0_Minotaur_Hurt_010.png",
    "./assets/image/Minotaur_2/PNG/PNG Sequences/Hurt/0_Minotaur_Hurt_011.png",
  ];

  /**
   * Creates an instance of the Minotaur.
   * Loads the walking animation images and initializes position.
   */
  constructor() {
    super();
    this.loadImage(this.minotaurWalking[0], true);
    this.loadImagesInCache(this.minotaurWalking);
    this.loadImagesInCache(this.minotaurHurt);
    this.x_position = 1500;
    this.animate();
  }

  /**
   * Controls the Minotaur's horizontal movement.
   * The Minotaur moves right until it reaches the right boundary, then moves left until it reaches the left boundary.
   */
  movement() {
    if (this.movingRight) {
      this.x_position += 33;
      if (this.x_position >= 1590) this.movingRight = false;
    } else {
      this.x_position -= 22;
      if (this.x_position <= 1050) this.movingRight = true;
    }
  }

  /**
   * Starts the animation of the Minotaur.
   * If the Minotaur is dead or hurt, the corresponding animation is played.
   * Otherwise, the walking animation is played.
   */
  animate() {
    this.walkingInterval = setInterval(() => {
      if (this.isDead) {
        this.playDeadAnimation();
      } else if (this.isHurt) {
        this.playHurtAnimation();
      } else {
        this.updateAnimationFrame(this.minotaurWalking);
        this.movement();
      }
    }, 60);
  }

  /**
   * Plays the dying animation of the Minotaur.
   * Clears the walking animation interval and loads the dying images.
   */
  playDeadAnimation() {
    clearInterval(this.walkingInterval);
    this.imageCache = {};
    this.loadImagesInCache(this.minotaurDead);
    this.currentImage = 0;
    this.animateDead();
  }

  /**
   * Plays the hurt animation of the Minotaur.
   * Clears the walking animation interval and loads the hurt images.
   */
  playHurtAnimation() {
    clearInterval(this.walkingInterval);
    this.imageCache = {};
    this.loadImagesInCache(this.minotaurHurt);
    this.currentImage = 0;
    // this.animateHurt(); // The hurt animation can be implemented here
  }

  /**
   * Handles the animation of the Minotaur's death.
   * The animation stops once the last dead frame is reached.
   */
  animateDead() {
    this.deadInterval = setInterval(() => {
      this.updateAnimationFrame(this.minotaurDead);
      if (this.currentImage >= this.minotaurDead.length - 1) {
        clearInterval(this.deadInterval);
      }
    }, 80);
  }
}
