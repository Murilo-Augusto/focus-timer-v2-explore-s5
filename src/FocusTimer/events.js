import * as Elements from "./elements.js"
import * as Actions from "./actions.js"
import * as Sounds from "./sounds.js"

export function resgisterControls() {
  Elements.controls.addEventListener('click', (e) => {
    const action = e.target.dataset.action
    
    if(typeof Actions[action] != 'function') {
      return
    }
    
    Actions[action]()
    console.log(Actions[action])
  })
}

export function resgisterSounds() {
  Elements.sounds.addEventListener('click', (e) => {
    const sound = e.target.dataset.sound
    console.log(sound)
    if(typeof Sounds[sound] != 'function') {
      return
    }
    
    Sounds[sound]()
    console.log(Sounds[sound])
  })
}