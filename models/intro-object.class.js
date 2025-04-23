class Intro extends DrawableObject {
  width = 720;
  height = 480;
  introActive = true;

  constructor() {
    super();
    this.loadImage("./assets/image/intro/ChatGPT Image Apr 21, 2025, 04_55_32 PM.png", true);
    this.x_position = 0;
    this.y_position = 0;
  }

  update(ctx, key) {
    this.draw(ctx);
    this.drawText(ctx);
    if (key.enter) {
      this.introActive = false;
      key.enter = false;
      document.querySelector("#story").style.display = "none";
    }
  }

  drawText(ctx) {
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Press Enter to Start", this.width / 2, this.height - 30);
  }
}
