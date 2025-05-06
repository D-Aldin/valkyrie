let canvas;
key = new Keyboard();
canvas = document.getElementById("canvas");
const restartButton = document.querySelector("#restart");
let soundIcon = document.getElementById("soundIcon");
let restartIcon = document.getElementById("restartIcon");

function init() {
  setIconForSound();
  manageEventListenerForMobileBtn();
  manageEventListenerForSound();
  world = new World(canvas, key);
}

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

function manageEventListenerForSound(params) {
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

function setIconForSound() {
  if (localStorage.getItem("isMuted") == "true") {
    soundIcon.src = "./assets/icons/stumm.png";
  } else {
    soundIcon.src = "./assets/icons/lautstarke.png";
  }
}

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

window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
window.addEventListener("keydown", keydownHandler);
window.addEventListener("keyup", keyUpHandler);
