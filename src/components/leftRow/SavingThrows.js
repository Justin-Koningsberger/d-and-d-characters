import React from 'react'
import Skill from './Skill'
import './SavingThrows.css'

const SavingThrows = () => {
  return (
    <div className="savingThrows">
      <Skill name="strengthST" />
      <Skill name="dexterityST" />
      <Skill name="constitutionST" />
      <Skill name="intelligenceST" />
      <Skill name="wisdomST" />
      <Skill name="charismaST" />
      <p>savingThrows</p>
    </div>
  )
}

export default SavingThrows
