/**
 * Class representing a movable object in the game.
 * This class includes properties and methods for handling movement, gravity, collisions, and animations.
 */
class MovableObject extends DrawableObject {
  /**
   * The horizontal position of the object on the screen.
   * @type {number}
   */
  x_position = 0;

  /**
   * The vertical position of the object on the screen.
   * @type {number}
   */
  y_position = 180;

  /**
   * The speed at which the object moves horizontally.
   * A random value is assigned upon initialization.
   * @type {number}
   */
  speed = Math.random() * 2.9 + 0.4;

  /**
   * The direction the object is moving in. `false` for left, `true` for right.
   * @type {boolean}
   */
  direction = false;

  /**
   * The vertical speed of the object, used for gravity and jumping.
   * @type {number}
   */
  speedY = 0;

  /**
   * The acceleration applied to the object's vertical speed due to gravity.
   * @type {number}
   */
  acceleration = 2.5;

  /**
   * Applies gravity to the object, adjusting its vertical position over time.
   * The object will fall if it's above the ground or if it has a downward vertical speed.
   */
  gravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y_position -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  /**
   * Determines if the object is above the ground or not.
   * For throwable objects, this returns `true`.
   * @returns {boolean} `true` if the object is above the ground, `false` otherwise.
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y_position < 360; // Ground level check
    }
  }

  /**
   * Updates the animation frame of the object by cycling through the provided images.
   * @param {string[]} images - An array of image paths for animation.
   */
  updateAnimationFrame(images) {
    let index = this.currentImage % images.length;
    let path = images[index];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * Checks if the object is colliding with another object.
   * @param {MovableObject} obj - The object to check collision against.
   * @returns {boolean} `true` if the objects are colliding, `false` otherwise.
   */
  isColliding(obj) {
    return (
      this.x_position + this.width > obj.x_position &&
      this.y_position + this.height > obj.y_position &&
      this.x_position < obj.x_position + obj.width &&
      this.y_position < obj.y_position + obj.height
    );
  }

  /**
   * Checks if the object is stomped by the player.
   * The player must be falling and above the object to stomp it.
   * @param {MovableObject} player - The player object to check for a stomp.
   * @returns {boolean} `true` if the player has stomped the object, `false` otherwise.
   */
  isStomped(player) {
    const isColliding = this.isColliding(player);
    const playerIsFalling = player.speedY < 0;
    const playerAbove = player.y_position + player.height <= this.y_position + 10;
    return isColliding && playerIsFalling && playerAbove;
  }

  /**
   * Moves the object to the right and updates its animation frame.
   * @param {object} obj - The object used for animation frames.
   */
  moveRight(obj) {
    this.x_position += this.speed;
    this.updateAnimationFrame(obj);
  }

  /**
   * Moves the object to the left and updates its animation frame.
   * If the object has an `end` property, the movement direction can be reversed.
   * @param {object} obj - The object used for animation frames.
   */
  moveLeft(obj) {
    if (this.end) {
      this.x_position += this.speed;
      this.updateAnimationFrame(obj);
    } else {
      this.x_position -= this.speed;
      this.updateAnimationFrame(obj);
    }
  }

  /**
   * Makes the object jump by setting its vertical speed to a positive value.
   * The object will be affected by gravity after jumping.
   */
  jump() {
    this.speedY = 30;
  }
}
