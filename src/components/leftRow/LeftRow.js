import React from 'react'
import AbilityScoreList from './AbilityScoreList'
import SavingThrows from './SavingThrows'
import Skills from './Skills'
import LangAndProf from './LangAndProf'
import NumberField from '../NumberField'
import TextField from '../TextField'
import './LeftRow.css'

const LeftRow = () => {
  return (
    <div className="leftRow flexRow">
      <div id="skills">
        <AbilityScoreList />
        <div id="subSkills">
          <NumberField name="inspiration" label="inspiration" />
          <NumberField name="proficiencyBonus" label="proficiency bonus" />
          <SavingThrows />
          <Skills />
        </div>
      </div>
      <div id="passiveSkills">
        <NumberField label="" name="passiveSkillLevel" />
        <TextField label="" name="passiveSkill" />
      </div>
      <LangAndProf />
    </div>
  )
}

export default LeftRow
