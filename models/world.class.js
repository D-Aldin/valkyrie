class World {
  character = new Valkyrie();
  enemies = level_1.enemies
  bats = level_1.bats
  canvas;
  ctx;
  key;
  backgroundObjects = level_1.backgroundObjects
  camera_position = 0;

  constructor(canvas, key) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d");
    this.key = key;
    this.draw();
    this.setworld();    
  }

  setworld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
    this.ctx.translate(-this.cameraPosition, 0);
  
    this.drawLoopingBackground(); 
    this.addToMap(this.character);
    this.addObjectsToMap(this.enemies);
    this.addObjectsToMap(this.bats);
  
    this.ctx.restore();
    requestAnimationFrame(() => this.draw());
  }
  

  addObjectsToMap(objects) {
    objects.forEach((obj, index) => {
      if (obj instanceof Background) {
        obj.y_position = 0;
      }
      this.addToMap(obj);
    });
  }

  addToMap(element) {
    if (element.direction) {
      this.ctx.save();
      // Translate to the character's right edge before flipping
      this.ctx.translate(element.x_position + element.width, 0);
      this.ctx.scale(-1, 1);
      this.ctx.drawImage(element.img, 0, element.y_position, element.width, element.height);
      this.ctx.restore();
    } else {
      this.ctx.drawImage(element.img, element.x_position, element.y_position, element.width, element.height);
    }
  }
  
  drawLoopingBackground() {
    const bgHeight = 480; 
    
    this.backgroundObjects.forEach((bg, index) => {
      const bgWidth = 720; 
      const parallaxFactor = 1 - (index * 0.2); 
      const relativeCam = this.camera_position * parallaxFactor;
      const startX = Math.floor(relativeCam / bgWidth) * bgWidth - bgWidth;
      const repetitions = Math.ceil(this.canvas.width / bgWidth) + 10;
      for (let i = 0; i < repetitions; i++) {
        const xPosition = startX + (i * bgWidth) - relativeCam;
        if (i % 2 === 1) {
          this.ctx.save();
          this.ctx.translate(xPosition + bgWidth, 0);
          this.ctx.scale(-1, 1); 
          this.ctx.drawImage(bg.img, 0, 0, bgWidth, bgHeight);
          this.ctx.restore();
        } else {
          this.ctx.drawImage(bg.img, xPosition, 0, bgWidth, bgHeight);
        }
      }
    });
  }
  
  
}
