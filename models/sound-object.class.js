class SoundManager {
  isMuted = false;

  constructor() {
    this.sounds = {};
    this.addAllSounds(); // ← Load sounds immediately
    this.muteButton();
  }

  addAllSounds() {
    this.addSound("background", "./assets/sounds/background.mp3", true);
    this.addSound("skeleton", "./assets/sounds/skeleton.mp3");
    this.addSound("gold", "./assets/sounds/gold.mp3");
    this.addSound("jump", "./assets/sounds/jump.mp3");
    this.addSound("throw", "./assets/sounds/throw.mp3");
    this.addSound("minotaurDying", "./assets/sounds/minotaurDying.mp3");
    this.addSound("item", "./assets/sounds/item.mp3");

    // Apply current mute state to all sounds
    for (const name in this.sounds) {
      this.sounds[name].muted = this.isMuted;
    }
  }

  addSound(name, file, loop = false) {
    const audio = new Audio(file);
    audio.loop = loop;
    this.sounds[name] = audio;
  }

  playSound(name) {
    const sound = this.sounds[name];
    if (sound && !this.isMuted) {
      sound.currentTime = 0;
      sound.play();
    }
  }

  mute() {
    for (const name in this.sounds) {
      this.sounds[name].muted = true;
    }
    this.isMuted = true;
  }

  unmute() {
    for (const name in this.sounds) {
      this.sounds[name].muted = false;
    }
    this.isMuted = false;
  }

  volume(name, volume) {
    if (this.sounds[name]) {
      this.sounds[name].volume = volume;
    }
  }

  muteButton() {
    this.muteButton = document.getElementById("muteSound");
    this.muteButton.addEventListener("click", () => {
      this.muteButton.blur();
      if (this.isMuted) {
        this.unmute();
        this.muteButton.lastElementChild.src = "./assets/icons/lautstarke.png";
      } else {
        this.mute();
        this.muteButton.lastElementChild.src = "./assets/icons/stumm.png";
      }
    });
  }
}
