class World {
  character = new Valkyrie();
  enemies = [new Skeleton(), new Skeleton(), new Skeleton()];
  bats = [new Bats(), new Bats()];
  canvas;
  ctx;
  backgroundObjects = [new Background("./assets/image/background/PNG/1/4.png", 0), new Background("./assets/image/background/PNG/1/5.png", 0), new Background("./assets/image/background/PNG/1/2.png", 700)];
  moveTheBats = new Bats();
  imageCache = [
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

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.canvas = canvas;
    this.addObjectsToMap(this.backgroundObjects);
    this.addToMap(this.character); // add valkyrie character
    this.addObjectsToMap(this.enemies); // add skeletons
    this.addObjectsToMap(this.bats);

    let self = this;
    requestAnimationFrame(() => {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((obj, index) => {
      if (obj instanceof Background) {
        obj.y_position = index * 5;
      }
      this.addToMap(obj);
    });
  }

  addToMap(element) {
    this.ctx.drawImage(element.img, element.x_position, element.y_position, element.width, element.height);
  }
}
