/**
 * Class representing the state of the keyboard input.
 * Tracks the states of various keys to control the player's movement and actions in the game.
 */
class Keyboard {
  /**
   * Indicates if the left arrow key is pressed.
   * @type {boolean}
   */
  left = false;

  /**
   * Indicates if the right arrow key is pressed.
   * @type {boolean}
   */
  right = false;

  /**
   * Indicates if the up arrow key is pressed.
   * @type {boolean}
   */
  up = false;

  /**
   * Indicates if the down arrow key is pressed.
   * @type {boolean}
   */
  down = false;

  /**
   * Indicates if the spacebar key is pressed.
   * @type {boolean}
   */
  space = false;

  /**
   * Indicates if the "d" key is pressed.
   * @type {boolean}
   */
  d = false;

  /**
   * Indicates if the "enter" key is pressed.
   * @type {boolean}
   */
  enter = false;

  /**
   * Creates an instance of the Keyboard.
   * Initializes the states of all keys to false, representing that no key is pressed.
   */
  constructor() {
    // No need to explicitly initialize properties here as they are already set to false by default.
  }
}
