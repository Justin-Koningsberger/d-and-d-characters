import React from 'react'
import AbilityScoreList from './AbilityScoreList'
import SavingThrows from './SavingThrows'
import Skills from './Skills'
import './LeftRow.css'

const LeftRow = () => {
  return (
    <div className="leftRow">
      <div id="skills">
        <AbilityScoreList />
        <div id="subSkills">
          <div className="inspiration">inspiration</div>
          <div className="proficiencyBonus">proficiency bonus</div>
          <SavingThrows />
          <Skills />
        </div>
      </div>
      <div id="passiveSkills">passive skills I think</div>
      <div id="langAndProf">languages & proficiencies</div>
    </div>
  )
}

export default LeftRow
