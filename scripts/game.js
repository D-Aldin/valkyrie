let canvas;
// let world = new World();

function init() {
  canvas = document.getElementById("canvasContainer");
  world = new World(canvas);
  key = new Keyboard();

  console.log(world);
  console.log(key);
}

const keydownHandler = (event) => {
  if (event.key == "ArrowRight") {
    key.right = true;
  }
  if (event.key == "ArrowLeft") {
    key.left = true;
  }
  if (event.key == "ArrowUp") {
    key.up = true;
  }
  if (event.key == "ArrowDown") {
    key.down = true;
  }
  if (event.key == " ") {
    key.space = true;
  }
  console.log(key);
};

const keyUpHandler = (event) => {
  if (event.key == "ArrowRight") {
    key.right = false;
  }
  if (event.key == "ArrowLeft") {
    key.left = false;
  }
  if (event.key == "ArrowUp") {
    key.up = false;
  }
  if (event.key == "ArrowDown") {
    key.down = false;
  }
  if (event.key == " ") {
    key.space = false;
  }
  console.log(key);
};

window.addEventListener("keydown", keydownHandler);
window.addEventListener("keyup", keyUpHandler);
