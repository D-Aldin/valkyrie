/**
 * Class responsible for managing sound effects and background music in the game.
 * It handles loading, playing, muting, and adjusting volume for all game sounds.
 */
class SoundManager {
  /**
   * A flag indicating whether the sound is muted.
   * @type {boolean}
   */
  isMuted = false;

  /**
   * Creates an instance of the SoundManager.
   * Initializes the sound assets and mute button functionality.
   */
  constructor() {
    this.sounds = {};
    this.isMuted = JSON.parse(localStorage.getItem("isMuted")) || false;
    this.addAllSounds(); // Load sounds immediately
    this.muteButton();
  }

  /**
   * Loads all the sound assets for the game and stores them in the `sounds` object.
   * Also applies the current mute state to all sounds.
   */
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

  /**
   * Adds a single sound to the `sounds` object with a specified name, file path, and optional loop flag.
   *
   * @param {string} name - The name to identify the sound.
   * @param {string} file - The file path of the sound.
   * @param {boolean} [loop=false] - Whether the sound should loop. Default is false.
   */
  addSound(name, file, loop = false) {
    const audio = new Audio(file);
    audio.loop = loop;
    this.sounds[name] = audio;
  }

  /**
   * Plays a sound by its name if it exists and sound is not muted.
   *
   * @param {string} name - The name of the sound to play.
   */
  playSound(name) {
    const sound = this.sounds[name];
    if (sound && !this.isMuted) {
      sound.currentTime = 0;
      sound.play();
    }
  }

  /**
   * Mutes all the sounds.
   */
  mute() {
    for (const name in this.sounds) {
      this.sounds[name].muted = true;
    }
    this.isMuted = true;
    localStorage.setItem("isMuted", true);
  }

  /**
   * Unmutes all the sounds.
   */
  unmute() {
    for (const name in this.sounds) {
      this.sounds[name].muted = false;
    }
    this.isMuted = false;
    localStorage.setItem("isMuted", false);
  }

  /**
   * Sets the volume for a specific sound.
   *
   * @param {string} name - The name of the sound whose volume is to be adjusted.
   * @param {number} volume - The volume level (0 to 1).
   */
  volume(name, volume) {
    if (this.sounds[name]) {
      this.sounds[name].volume = volume;
    }
  }

  /**
   * Initializes the mute/unmute button and its functionality.
   * This method adds an event listener to toggle the mute state when the button is clicked.
   */
  muteButton() {
    this.muteButton = document.getElementById("muteSound");
    this.muteButton.addEventListener("click", () => {
      this.muteButton.blur();
      if (this.isMuted) {
        this.unmute();
        this.muteButton.lastElementChild.src = "./assets/icons/lautstarke.png";
        this.playSound("background");
        this.volume("background", 0.3);
      } else {
        this.mute();
        this.muteButton.lastElementChild.src = "./assets/icons/stumm.png";
      }
    });
  }
}
