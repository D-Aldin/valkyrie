class Level {

    enemies;
    bats;
    backgroundObjects;
    gold;
    item;
    levelEnd = 1440

    constructor(enemies, bats, backgroundObjects, gold, item) {
        this.enemies = enemies,
        this.bats = bats,
        this.backgroundObjects = backgroundObjects
        this.gold = gold
        this.item = item
    }
}