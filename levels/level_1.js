/**
 * Creates and returns the first level of the game.
 * This level includes various enemies, backgrounds, items, and gold to be used in the game.
 *
 * @returns {Level} The created Level object containing enemies, backgrounds, items, and gold.
 */
function createLevel1() {
  return new Level(
    [
      new Skeleton(),
      new Skeleton(),
      new Skeleton(),
      new Skeleton(), // Array of Skeleton enemies
    ],
    [
      new Minotaur(), // Array containing one Minotaur enemy
    ],
    [
      new Bats(),
      new Bats(),
      new Bats(),
      new Bats(),
      new Bats(),
      new Bats(),
      new Bats(),
      new Bats(), // Array of Bat enemies
    ],
    [
      new Background("./assets/image/background/PNG/2/mirror5.png", -720), // Background objects for scrolling effect
      new Background("./assets/image/background/PNG/2/5.png", 0),
      new Background("./assets/image/background/PNG/2/2.png", 0),
      new Background("./assets/image/background/PNG/2/mirror5.png", 720),
      new Background("./assets/image/background/PNG/2/2.png", 720),
      new Background("./assets/image/background/PNG/2/5.png", 1440),
      new Background("./assets/image/background/PNG/2/2.png", 1440),
      new Background("./assets/image/background/PNG/2/mirror5.png", 2160),
      new Background("./assets/image/background/PNG/2/2.png", 2160),
      new Background("./assets/image/background/PNG/2/5.png", 2879),
      new Background("./assets/image/background/PNG/2/2.png", 2879),
    ],
    [
      new Gold(),
      new Gold(),
      new Gold(),
      new Gold(),
      new Gold(),
      new Gold(), // Array of Gold objects for collection
    ],
    [
      new Item(),
      new Item(),
      new Item(),
      new Item(),
      new Item(),
      new Item(),
      new Item(),
      new Item(),
      new Item(),
      new Item(),
      new Item(),
      new Item(), // Array of Item objects for collection
    ]
  );
}
