let canvas;
key = new Keyboard();
// let world = new World();

function init() {
  canvas = document.getElementById("canvasContainer");
  world = new World(canvas, key);
  console.log(world);
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
  if (event.code == "KeyD") {
    key.d = true;
  }
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
  if (event.code == "KeyD") {
    key.d = false;
  }
};

window.addEventListener("keydown", keydownHandler);
window.addEventListener("keyup", keyUpHandler);
