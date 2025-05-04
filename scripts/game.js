/**
 * @fileOverview Initializes game elements, handles user input through buttons and keyboard,
 * and manages device orientation detection for mobile devices.
 */

/**
 * Global variables for canvas, keyboard state, and UI elements.
 * @type {HTMLCanvasElement}
 */
let canvas;
/** @type {Keyboard} */
key = new Keyboard();
/** @type {HTMLButtonElement} */
const restartButton = document.querySelector("#restart");
/** @type {HTMLImageElement} */
let soundIcon = document.getElementById("soundIcon");
/** @type {HTMLImageElement} */
let restartIcon = document.getElementById("restartIcon");

/**
 * Initializes the world and starts the game.
 * This function sets up the game world by creating a new `World` object
 * and passing the canvas and keyboard state to it.
 */
function init() {
  world = new World(canvas, key);
  console.log(world);
}

/**
 * Touch event listener for the left movement button.
 * Sets `key.left` to `true` when the button is pressed, and `false` when released.
 */
document.getElementById("leftButton").addEventListener("touchstart", () => {
  key.left = true;
});
document.getElementById("leftButton").addEventListener("touchend", () => {
  key.left = false;
});

/**
 * Touch event listener for the right movement button.
 * Sets `key.right` to `true` when the button is pressed, and `false` when released.
 */
document.getElementById("rightButton").addEventListener("touchstart", () => {
  key.right = true;
});
document.getElementById("rightButton").addEventListener("touchend", () => {
  key.right = false;
});

/**
 * Touch event listener for the jump button.
 * Sets `key.space` to `true` when the button is pressed, and `false` when released.
 */
document.getElementById("jumpButton").addEventListener("touchstart", () => {
  key.space = true;
});
document.getElementById("jumpButton").addEventListener("touchend", () => {
  key.space = false;
});

/**
 * Touch event listener for the throw button.
 * Sets `key.d` to `true` when the button is pressed, and `false` when released.
 */
document.getElementById("throwButton").addEventListener("touchstart", () => {
  key.d = true;
});
document.getElementById("throwButton").addEventListener("touchend", () => {
  key.d = false;
});

/**
 * Touch event listener for the start button.
 * Sets `key.enter` to `true` when the button is pressed, hiding the start button.
 */
document.getElementById("startButton").addEventListener("touchstart", () => {
  key.enter = true;
  if (key.enter) {
    document.getElementById("startButton").style.display = "none";
  }
});
document.getElementById("startButton").addEventListener("touchend", () => {
  key.enter = false;
});

/**
 * Mouseover event listener for the sound icon.
 * Changes the sound icon image when hovered over based on whether it's muted or not.
 */
soundIcon.addEventListener("mouseover", () => {
  if (soundIcon.src.includes("stumm.png")) {
    soundIcon.src = "./assets/icons/stumm_hover.png";
  } else if (soundIcon.src.includes("lautstarke.png")) {
    soundIcon.src = "./assets/icons/lautstarke_hover.png";
  }
});

/**
 * Mouseout event listener for the sound icon.
 * Reverts the sound icon image when the mouse leaves the icon.
 */
soundIcon.addEventListener("mouseout", () => {
  if (soundIcon.src.includes("stumm_hover.png")) {
    soundIcon.src = "./assets/icons/stumm.png";
  } else if (soundIcon.src.includes("lautstarke_hover.png")) {
    soundIcon.src = "./assets/icons/lautstarke.png";
  }
});

/**
 * Mouseover event listener for the restart icon.
 * Changes the restart icon image when hovered over.
 */
restartIcon.addEventListener("mouseover", () => {
  restartIcon.src = "./assets/icons/restart_hover.png";
});

/**
 * Mouseout event listener for the restart icon.
 * Reverts the restart icon image when the mouse leaves the icon.
 */
restartIcon.addEventListener("mouseout", () => {
  restartIcon.src = "./assets/icons/restart.png";
});

/**
 * Keyboard event handler for `keydown` events.
 * Updates the corresponding key state based on the key pressed.
 *
 * @param {KeyboardEvent} event - The `keydown` event.
 */
const keydownHandler = (event) => {
  if (world?.character?.isDead) return;
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

/**
 * Keyboard event handler for `keyup` events.
 * Resets the corresponding key state when a key is released.
 *
 * @param {KeyboardEvent} event - The `keyup` event.
 */
const keyUpHandler = (event) => {
  if (world?.character?.isDead) return;
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

/**
 * Checks the device orientation and displays a warning if the user is on a mobile device
 * and the device is in portrait mode.
 */
function checkOrientation() {
  const userAgent = navigator.userAgent;
  const isTablet = /iPad|Tablet|PlayBook|Nexus 7|Nexus 10|Kindle/i.test(userAgent);
  const isPhone = /iPhone|Android.*Mobile|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isMobile = isTablet || isPhone;
  const isPortrait = window.innerHeight > window.innerWidth;
  const warning = document.getElementById("rotate");
  if (isMobile && isPortrait) {
    warning.style.display = "flex";
  } else {
    warning.style.display = "none";
  }
}

// Event listeners for orientation and resizing of the window
window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);

// Event listeners for keyboard input
window.addEventListener("keydown", keydownHandler);
window.addEventListener("keyup", keyUpHandler);
