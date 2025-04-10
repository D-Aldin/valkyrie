class Minotaur extends MovableObject {
    
    width = 280;
    height = 280
    y_position = 221
    

    MinotaurWalkingImages = [
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_000.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_001.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_002.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_003.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_004.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_005.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_006.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_007.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_008.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_009.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_010.png",
        "./assets/image/Minotaur_2/PNG/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_011.png"
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