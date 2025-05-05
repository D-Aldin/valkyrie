/**
 * Class representing a throwable object in the game.
 * This class handles the behavior of an object that can be thrown in the game world.
 *
 * @extends MovableObject
 */
class ThrowableObject extends MovableObject {
  /**
   * Creates an instance of a throwable object.
   *
   * @param {number} x - The x-coordinate position where the object is spawned.
   * @param {number} y - The y-coordinate position where the object is spawned.
   */
  constructor(x, y) {
    super();
    this.loadImage("./assets/image/Valkyrie_3/PNG/Vector Parts/Sword.png");
    this.x_position = x;
    this.y_position = y;
    this.width = 50;
    this.height = 20;
    this.speedY = 30;
    this.trow();
  }

  /**
   * Initializes the throwing behavior of the object, including applying gravity and moving the object.
   * The object will move horizontally with a constant speed and fall due to gravity.
   */
  trow() {
    this.speedY = 30;
    this.gravity();
    setInterval(() => {
      this.x_position += 25; // Move the object horizontally at a constant speed
    }, 60);
  }
}
