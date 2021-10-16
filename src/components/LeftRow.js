import React from 'react'
import './LeftRow.css'

const LeftRow = () => {
  return (
    <div className="leftRow">
      <div id="skills">
        <div id="abilityScores">
          <div>
            <input id="strength"></input>
            <label>strength</label>
          </div>
          <div>
            <input id="dexterity"></input>
            <label>dexterity</label>
          </div>
          <div>
            <input id="constitution"></input>
            <label>constitution</label>
          </div>
          <div>
            <input id="intelligence"></input>
            <label>intelligence</label>
          </div>
          <div>
            <input id="wisdom"></input>
            <label>wisdom</label>
          </div>
          <div>
            <input id="charisma"></input>
            <label>charisma</label>
          </div>
        </div>
        <div id="subSkills">
          <div className="inspiration">inspiration</div>
          <div className="proficiencyBonus">profieciency bonus</div>
          <div className="savingThrows">savingThrows</div>
          <div className="skills">skills</div>
        </div>
      </div>
      <div id="passiveSkills">passive skills I think</div>
      <div id="langAndProf">languages & proficiencies</div>
    </div>
  )
}

export default LeftRow
