class SoundManager {
  isMuted = false;

  constructor() {
    this.sounds = {};
    this.muteButton();
  }

  addSound(name, file, loop = false) {
    const audio = new Audio(file);
    audio.loop = loop;
    this.sounds[name] = audio;
  }

  playSound(name) {
    const sound = this.sounds[name];
    if (sound) {
      if (!this.isMuted) {
        sound.currentTime = 0;
        sound.play();
      }
    } else {
      console.log(`Sound not found.`);
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
