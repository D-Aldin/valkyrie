/** @type {HTMLCanvasElement} */
let canvas;

/** @type {Keyboard} Keyboard input handler instance */
key = new Keyboard();

/** @type {HTMLCanvasElement} */
canvas = document.getElementById("canvas");

/** @type {HTMLButtonElement} Restart button element */
const restartButton = document.querySelector("#restart");

const quickRestartButton = document.querySelector("#quick-restart");

/** @type {HTMLImageElement} Sound icon element */
let soundIcon = document.getElementById("soundIcon");

/** @type {HTMLImageElement} Restart icon element */
let restartIcon = document.getElementById("restartIcon");

const homeButton = document.querySelector("#backToIntro");

let defeatImage = document.querySelector("#defeatImage");
let victoryImage = document.querySelector("#victoryImage");

const leftThumb = document.querySelector("#left-thumb");
const rightThumb = document.querySelector("#right-thumb");

/**
 * Initializes the game environment:
 * - Sets sound icon state
 * - Adds event listeners for mobile controls and sound UI
 * - Creates the game world
 */
function init() {
  triggerDomManipulation();
  setIconForSound();
  manageEventListenerForMobileBtn();
  manageEventListenerForSound();
  world = new World(canvas, key);
}

/**
 * Adds touch event listeners for mobile control buttons.
 * Maps button touches to corresponding key actions.
 */
function manageEventListenerForMobileBtn() {
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
}

/**
 * Adds hover effect listeners for sound and restart icons.
 * Changes the icon images on mouseover and mouseout.
 */
function manageEventListenerForSound() {
  soundIcon.addEventListener("mouseover", () => {
    if (soundIcon.src.includes("stumm.png")) {
      soundIcon.src = "./assets/icons/stumm_hover.png";
    } else if (soundIcon.src.includes("lautstarke.png")) {
      soundIcon.src = "./assets/icons/lautstarke_hover.png";
    }
  });

  soundIcon.addEventListener("mouseout", () => {
    if (soundIcon.src.includes("stumm_hover.png")) {
      soundIcon.src = "./assets/icons/stumm.png";
    } else if (soundIcon.src.includes("lautstarke_hover.png")) {
      soundIcon.src = "./assets/icons/lautstarke.png";
    }
  });

  restartIcon.addEventListener("mouseover", () => {
    restartIcon.src = "./assets/icons/restart_hover.png";
  });

  restartIcon.addEventListener("mouseout", () => {
    restartIcon.src = "./assets/icons/restart.png";
  });
}

/**
 * Sets the correct sound icon based on saved user preference.
 * If muted, shows mute icon, otherwise shows volume icon.
 */
function setIconForSound() {
  if (localStorage.getItem("isMuted") == "true") {
    soundIcon.src = "./assets/icons/stumm.png";
  } else {
    soundIcon.src = "./assets/icons/lautstarke.png";
  }
}

/**
 * Handles keydown events for keyboard controls.
 * Ignores input if character is dead.
 * @param {KeyboardEvent} event - The keydown event
 */
const keydownHandler = (event) => {
  if (world?.character?.isDead) return;
  if (event.key == "ArrowRight") key.right = true;
  if (event.key == "ArrowLeft") key.left = true;
  if (event.key == "ArrowUp") key.up = true;
  if (event.key == "ArrowDown") key.down = true;
  if (event.key == " ") key.space = true;
  if (event.code == "KeyD") key.d = true;
  if (event.code == "Enter") key.enter = true;
};

/**
 * Handles keyup events for keyboard controls.
 * Ignores input if character is dead.
 * @param {KeyboardEvent} event - The keyup event
 */
const keyUpHandler = (event) => {
  if (world?.character?.isDead) return;
  if (event.key == "ArrowRight") key.right = false;
  if (event.key == "ArrowLeft") key.left = false;
  if (event.key == "ArrowUp") key.up = false;
  if (event.key == "ArrowDown") key.down = false;
  if (event.key == " ") key.space = false;
  if (event.code == "KeyD") key.d = false;
  if (event.code == "Enter") key.enter = false;
};

/**
 * Checks if the user is on a mobile device in portrait mode.
 * Displays a warning to rotate the device if necessary.
 */
function checkOrientation() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  const isIPad = /iPad/.test(userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1); // iPad Pro iOS 13+

  const isTablet = /Tablet|PlayBook|Nexus 7|Nexus 10|Kindle/i.test(userAgent) || isIPad;
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

// Orientation and keyboard listeners
window.addEventListener("load", checkOrientation);
window.addEventListener("load", setSizeOfEndScreen);
window.addEventListener("resize", checkOrientation);
window.addEventListener("keydown", keydownHandler);
window.addEventListener("keyup", keyUpHandler);

/**
 * Sets the width and height of the defeat and victory end screen images
 * to match the current size of the canvas element.
 *
 * This ensures that the end screen images are properly scaled
 * to fit the canvas, maintaining visual consistency.
 */
function setSizeOfEndScreen() {
  const width = canvas.offsetWidth + "px";
  const height = canvas.offsetHeight + "px";
  defeatImage.style.width = width;
  defeatImage.style.height = height;
  victoryImage.style.width = width;
  victoryImage.style.height = height;
}

/**
 * Attaches a click event listener to the restart button that resets
 * the visibility of key UI elements such as the defeat screen, victory screen,
 * canvas, and story section. Also ensures the start button is shown on smaller screens.
 *
 * This function is intended to manage UI changes related to restarting the game.
 */
function domManipulations() {
  document.querySelector(".defeat").style.display = "none";
  document.querySelector(".victory").style.display = "none";
  document.querySelector("#canvas").style.display = "block";
  document.querySelector("#story").style.display = "flex";
  if (window.innerWidth < 800) {
    document.querySelector("#startButton").style.display = "flex";
    document.querySelector("#storyMobile").style.display = "flex";
  }
}

// function domManipulations2() {
//   quickRestartButton.addEventListener("click", () => {
//     document.querySelector(".defeat").style.display = "none";
//     document.querySelector(".victory").style.display = "none";
//     document.querySelector("#canvas").style.display = "block";
//     document.querySelector("#story").style.display = "flex";
//     if (window.innerWidth < 800) {
//       document.querySelector("#startButton").style.display = "flex";
//       document.querySelector("#storyMobile").style.display = "flex";
//     }
//   });
// }

function triggerDomManipulation() {
  restartButton.addEventListener("click", domManipulations);
  quickRestartButton.addEventListener("click", domManipulations);
}
