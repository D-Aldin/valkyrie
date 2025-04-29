class SoundManager {
  constructor() {
    this.sounds = {};
  }

  addSound(name, file, loop = false) {
    const audio = new Audio(file);
    audio.loop = loop;
    this.sounds[name] = audio;
  }

  playSound(name) {
    const sound = this.sounds[name];
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    } else {
      console.log(`Sound "${name}" not found.`);
    }
  }

  muteAll() {
    for (const name in this.sounds) {
      this.sounds[name].muted = true;
    }
  }

  unmuteAll() {
    for (const name in this.sounds) {
      this.sounds[name].muted = false;
    }
  }
}
