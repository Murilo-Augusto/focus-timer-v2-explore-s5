import state from "./state.js";
import * as timer from "./timer.js"
import * as Elements from "./elements.js"
import * as sounds from "./sounds.js"

let whatSoundIsPlayng;

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countDown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function increment() {
  let minutes = Number(Elements.minutes.textContent)
  
  minutes += 5

  if(minutes > 60) {
    minutes = 60
  }
  timer.updateDisplay(minutes)
}

export function decrement() {
  let minutes = Number(Elements.minutes.textContent)
  
  minutes -= 5

  if(minutes < 0) {
    minutes = 0
  }
  timer.updateDisplay(minutes)
}

export function soundTree() {
  if(!state.isPlaying) {
    state.isPlaying = !state.isPlaying
    whatSoundIsPlayng = 'soundTree'
    sounds.soundTree.play()
    document.querySelector(`button[data-sound="${whatSoundIsPlayng}"]`).classList.toggle('secondary-button-sound-color')
    return
  }
  
  if(state.isPlaying && whatSoundIsPlayng == 'soundTree') {
    sounds[whatSoundIsPlayng].pause()
    state.isPlaying = !state.isPlaying
    document.querySelector(`button[data-sound="${whatSoundIsPlayng}"]`).classList.toggle('secondary-button-sound-color')
    return
  }
  
  sounds[whatSoundIsPlayng].pause()
  sounds.soundTree.play()
  document.querySelector(`button[data-sound="${whatSoundIsPlayng}"]`).classList.toggle('secondary-button-sound-color')
  whatSoundIsPlayng = 'soundTree'
  document.querySelector(`button[data-sound="${whatSoundIsPlayng}"]`).classList.toggle('secondary-button-sound-color')
}

export function soundRain() {
  if(!state.isPlaying) {
    whatSoundIsPlayng = 'soundRain'
    state.isPlaying = !state.isPlaying
    sounds.soundRain.play()
    document.querySelector(`button[data-sound="${whatSoundIsPlayng}"]`).classList.toggle('secondary-button-sound-color')
    return
  }
  
  if(state.isPlaying && whatSoundIsPlayng == 'soundRain') {
    sounds[whatSoundIsPlayng].pause()
    state.isPlaying = !state.isPlaying
    document.querySelector(`button[data-sound="${whatSoundIsPlayng}"]`).classList.toggle('secondary-button-sound-color')
    return
  }

  sounds[whatSoundIsPlayng].pause()
  sounds.soundRain.play()
  document.querySelector(`button[data-sound="${whatSoundIsPlayng}"]`).classList.toggle('secondary-button-sound-color')
  whatSoundIsPlayng = 'soundRain'
  document.querySelector(`button[data-sound="${whatSoundIsPlayng}"]`).classList.toggle('secondary-button-sound-color')
}

export function soundCoffeeShop() {
  if(!state.isPlaying) {
    whatSoundIsPlayng = 'soundCoffeeShop'
    state.isPlaying = !state.isPlaying
    sounds.soundCoffeeShop.play()
    document.querySelector(`button[data-sound="${whatSoundIsPlayng}"]`).classList.toggle('secondary-button-sound-color')
    return
  }
  
  if(state.isPlaying && whatSoundIsPlayng == 'soundCoffeeShop') {
    sounds[whatSoundIsPlayng].pause()
    state.isPlaying = !state.isPlaying
    document.querySelector(`button[data-sound="${whatSoundIsPlayng}"]`).classList.toggle('secondary-button-sound-color')
    return
  }

  sounds[whatSoundIsPlayng].pause()
  sounds.soundCoffeeShop.play()
  document.querySelector(`button[data-sound="${whatSoundIsPlayng}"]`).classList.toggle('secondary-button-sound-color')
  whatSoundIsPlayng = 'soundCoffeeShop'
  document.querySelector(`button[data-sound="${whatSoundIsPlayng}"]`).classList.toggle('secondary-button-sound-color')
}

export function soundFirePlace() {
  if(!state.isPlaying) {
    whatSoundIsPlayng = 'soundFirePlace'
    state.isPlaying = !state.isPlaying
    sounds.soundFirePlace.play()
    document.querySelector(`button[data-sound="${whatSoundIsPlayng}"]`).classList.toggle('secondary-button-sound-color')
    return
  }
  
  if(state.isPlaying && whatSoundIsPlayng == 'soundFirePlace') {
    sounds[whatSoundIsPlayng].pause()
    state.isPlaying = !state.isPlaying
    document.querySelector(`button[data-sound="${whatSoundIsPlayng}"]`).classList.toggle('secondary-button-sound-color')
    return
  }

  sounds[whatSoundIsPlayng].pause()
  sounds.soundFirePlace.play()
  document.querySelector(`button[data-sound="${whatSoundIsPlayng}"]`).classList.toggle('secondary-button-sound-color')
  whatSoundIsPlayng = 'soundFirePlace'
  document.querySelector(`button[data-sound="${whatSoundIsPlayng}"]`).classList.toggle('secondary-button-sound-color')
}