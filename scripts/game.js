let canvas;
key = new Keyboard();
canvas = document.getElementById("canvas");
let fullscreenButton = document.querySelector("#fullscreenButton");

function init() {
  world = new World(canvas, key);
}

document.getElementById("leftButton").addEventListener("touchstart", () => {
  key.left = true;
});
document.getElementById("leftButton").addEventListener("touchend", () => {
  key.left = false;
});

document.getElementById("rightButton").addEventListener("touchstart", () => {
  key.right = true;
});
document.getElementById("rightButton").addEventListener("touchend", () => {
  key.right = false;
});

document.getElementById("jumpButton").addEventListener("touchstart", () => {
  key.space = true;
});

document.getElementById("jumpButton").addEventListener("touchend", () => {
  key.space = false;
});

document.getElementById("throwButton").addEventListener("touchstart", () => {
  key.d = true;
});

document.getElementById("throwButton").addEventListener("touchend", () => {
  key.d = false;
});

document.getElementById("startButton").addEventListener("touchstart", () => {
  key.enter = true;
  if (key.enter) {
    document.getElementById("startButton").style.display = "none";
  }
});

document.getElementById("startButton").addEventListener("touchend", () => {
  key.enter = false;
});

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

function fullscreen() {
 
  if (canvas.webkitRequestFullScreen) {
    canvas.webkitRequestFullScreen();
  } else {
    canvas.mozRequestFullScreen();
  }
}

function restart() {
  init()
  this.blur()
}

function checkOrientation() {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isPortrait = window.innerHeight > window.innerWidth;

  const warning = document.getElementById("rotate");

  if (isMobile && isPortrait) {
    warning.style.display = "flex";
  } else {
    warning.style.display = "none";
  }
}

window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);


window.addEventListener("keydown", keydownHandler);
window.addEventListener("keyup", keyUpHandler);
fullscreenButton.addEventListener("click", () => {
  fullscreen()
  
});
