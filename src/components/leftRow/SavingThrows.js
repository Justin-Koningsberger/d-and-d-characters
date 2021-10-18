import React from 'react'
import './SavingThrows.css'

const SavingThrows = () => {
  // I think all these values need to be calculated from character attributes
  // Also these will be sub components, shared with Skills
  return (
    <div className="savingThrows">
      <div id="strength">
        <input></input>
        strength
      </div>
      <div id="dexterity">
        <input></input>
        Dexterity
      </div>
      <div id="constitution">
        <input></input>
        Constitution
      </div>
      <div id="intelligence">
        <input></input>
        Intelligence
      </div>
      <div id="wisdom">
        <input></input>
        Wisdom
      </div>
      <div id="charisma">
        <input></input>
        Charisma
      </div>
      savingThrows (no state yet)
    </div>
  )
}

export default SavingThrows
