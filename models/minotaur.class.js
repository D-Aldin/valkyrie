class Minotaur extends MovableObject {
    
    width = 280;
    height = 280
    y_position = 221
    

    MinotaurWalkingImages = [
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_000.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_001.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_002.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_003.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_004.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_005.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_006.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_007.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_008.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_009.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_010.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_011.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_012.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_013.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_014.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_015.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_016.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_017.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_018.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_019.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_020.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_021.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_022.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Walking/0_Minotaur_Walking_023.png",
      ];

      constructor () {
        super()
        this.loadImage(this.MinotaurWalkingImages[0], true)
        this.loadImagesInCache(this.MinotaurWalkingImages)
        this.animate()
        this.x_position = 1500
      }

      animate() {
        setInterval(() => {
            this.updateAnimationFrame(this.MinotaurWalkingImages);
        }, 60);
      }
    }