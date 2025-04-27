class Level {
  enemies;
  minotaur;
  bats;
  backgroundObjects;
  gold;
  item;
  levelEnd = 2440;

  constructor(enemies, minotaur, bats, backgroundObjects, gold, item) {
    (this.enemies = enemies), (this.bats = bats), (this.backgroundObjects = backgroundObjects);
    this.minotaur = minotaur;
    this.gold = gold;
    this.item = item;
    this.throwables = [];
  }
}
