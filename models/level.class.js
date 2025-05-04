/**
 * Class representing a level in the game.
 * A level contains various objects such as enemies, minotaur, bats, background objects, gold, and items.
 * It also tracks the level's end point and throwable objects.
 */
class Level {
  /**
   * Array of enemies in the level.
   * @type {Array}
   */
  enemies;

  /**
   * The Minotaur in the level.
   * @type {Minotaur}
   */
  minotaur;

  /**
   * Array of bats in the level.
   * @type {Array}
   */
  bats;

  /**
   * Array of background objects in the level.
   * @type {Array}
   */
  backgroundObjects;

  /**
   * Array of gold objects in the level.
   * @type {Array}
   */
  gold;

  /**
   * Array of item objects in the level.
   * @type {Array}
   */
  item;

  /**
   * The position (X-coordinate) where the level ends.
   * @type {number}
   */
  levelEnd = 2440;

  /**
   * Creates an instance of the Level.
   * Initializes the level with enemies, bats, background objects, minotaur, gold, and items.
   * @param {Array} enemies - Array of enemy objects in the level.
   * @param {Minotaur} minotaur - The Minotaur object for the level.
   * @param {Array} bats - Array of bat objects in the level.
   * @param {Array} backgroundObjects - Array of background objects in the level.
   * @param {Array} gold - Array of gold objects in the level.
   * @param {Array} item - Array of item objects in the level.
   */
  constructor(enemies, minotaur, bats, backgroundObjects, gold, item) {
    this.enemies = enemies;
    this.bats = bats;
    this.backgroundObjects = backgroundObjects;
    this.minotaur = minotaur;
    this.gold = gold;
    this.item = item;
    this.throwables = []; // Stores throwable objects like items or projectiles in the level.
  }
}
