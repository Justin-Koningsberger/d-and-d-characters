import React from 'react'
import AbilityScoreList from './AbilityScoreList'
import SavingThrows from './SavingThrows'
import Skills from './Skills'
import LangAndProf from './LangAndProf'
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
      <div id="passiveSkills"><p>passive skills I think</p></div>
      <LangAndProf />
    </div>
  )
}

export default LeftRow
