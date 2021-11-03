import React from 'react'
import Skill from './Skill'
import './SavingThrows.css'

const SavingThrows = () => {
  return (
    <div className="savingThrows">
      <Skill name="strengthST" label="strength" />
      <Skill name="dexterityST" label="dexterity" />
      <Skill name="constitutionST" label="constitution" />
      <Skill name="intelligenceST" label="intelligence" />
      <Skill name="wisdomST" label="wisdom" />
      <Skill name="charismaST" label="charisma" />
      <p>saving throws</p>
    </div>
  )
}

export default SavingThrows
