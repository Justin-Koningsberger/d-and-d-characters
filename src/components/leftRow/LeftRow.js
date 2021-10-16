import React from 'react'
import AbilityScores from './AbilityScores'
import SavingThrows from './SavingThrows'
import Skills from './Skills'
import './LeftRow.css'

const LeftRow = ({ character, updateCharacter }) => {

  return (
    <div className="leftRow">
      <div id="skills">
        <AbilityScores character={character} updateCharacter={updateCharacter} />
        <div id="subSkills">
          <div className="inspiration">inspiration</div>
          <div className="proficiencyBonus">proficiency bonus</div>
          <SavingThrows character={character} updateCharacter={updateCharacter} />
          <Skills character={character} updateCharacter={updateCharacter} />
        </div>
      </div>
      <div id="passiveSkills">passive skills I think</div>
      <div id="langAndProf">languages & proficiencies</div>
    </div>
  )
}

export default LeftRow
