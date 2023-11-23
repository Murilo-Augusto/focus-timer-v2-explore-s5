import * as Elements from "./elements.js"
import * as Actions from "./actions.js"

export function resgisterControls() {
  Elements.controls.addEventListener('click', (e) => {
    const action = e.target.dataset.action
    
    if(typeof Actions[action] != 'function') {
      return
    }
    
    Actions[action]()
  })
}

export function resgisterSounds() {
  Elements.sounds.addEventListener('click', (e) => {
    const sound = e.target.dataset.sound
    if(typeof Actions[sound] != 'function') {
      return
    }
    
    Actions[sound]()
  })
}