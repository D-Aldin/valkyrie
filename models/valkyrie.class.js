class Valkyrie extends MovableObject {
  images = [
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

  constructor() {
    super();
    this.loadImage("./assets/image/Valkyrie_3/PNG/PNG Sequences/Walking/0_Valkyrie_Walking_000.png", true);
    this.loadImagesToCache(this.images);
  }

  jump() {}
}
