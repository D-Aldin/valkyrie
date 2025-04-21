let canvas;
key = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, key);
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
  if (event.code == "Enter") {
    key.enter = true;
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
  if (event.code == "Enter") {
    key.enter = false;
  }
};

window.addEventListener("keydown", keydownHandler);
window.addEventListener("keyup", keyUpHandler);
