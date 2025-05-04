/**
 * Class representing a skeleton enemy in the game. It includes animation for walking and being hurt.
 * The skeleton moves across the screen and has different images for walking and hurt animations.
 */
class Skeleton extends MovableObject {
  /**
   * Array of image paths representing the walking animation of the skeleton.
   * @type {string[]}
   */
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

  /**
   * Array of image paths representing the hurt animation of the skeleton.
   * @type {string[]}
   */
  skeletonHurtImages = [
    "./assets/image/skeleton_hurt/0_Skeleton_Crusader_Hurt_000.png",
    "./assets/image/skeleton_hurt/0_Skeleton_Crusader_Hurt_001.png",
    "./assets/image/skeleton_hurt/0_Skeleton_Crusader_Hurt_002.png",
    "./assets/image/skeleton_hurt/0_Skeleton_Crusader_Hurt_003.png",
    "./assets/image/skeleton_hurt/0_Skeleton_Crusader_Hurt_004.png",
    "./assets/image/skeleton_hurt/0_Skeleton_Crusader_Hurt_005.png",
    "./assets/image/skeleton_hurt/0_Skeleton_Crusader_Hurt_006.png",
    "./assets/image/skeleton_hurt/0_Skeleton_Crusader_Hurt_007.png",
    "./assets/image/skeleton_hurt/0_Skeleton_Crusader_Hurt_008.png",
    "./assets/image/skeleton_hurt/0_Skeleton_Crusader_Hurt_009.png",
    "./assets/image/skeleton_hurt/0_Skeleton_Crusader_Hurt_010.png",
    "./assets/image/skeleton_hurt/0_Skeleton_Crusader_Hurt_011.png",
  ];

  /**
   * The vertical position of the skeleton on the screen.
   * @type {number}
   */
  y_position = 360;

  /**
   * Creates an instance of the Skeleton object.
   * Initializes the skeleton with a random horizontal position, walking, and hurt images.
   */
  constructor() {
    super();
    this.loadImage("./assets/image/skeleton_walking/0_Skeleton_Crusader_Walking_000.png", true);
    this.x_position = 300 + Math.random() * 1400; // Randomize starting position
    this.loadImagesInCache(this.skeletonWalkingImages);
    this.loadImagesInCache(this.skeletonHurtImages);
  }

  /**
   * Animates the skeleton's walking movement by periodically changing the walking images.
   * Moves the skeleton left across the screen at regular intervals.
   */
  animateMoving() {
    setInterval(() => {
      this.moveLeft(this.skeletonWalkingImages);
    }, 60);
  }

  /**
   * Starts the skeleton's walking animation.
   * Calls `animateMoving` to initiate the walking animation.
   */
  startWalking() {
    this.animateMoving();
  }
}
