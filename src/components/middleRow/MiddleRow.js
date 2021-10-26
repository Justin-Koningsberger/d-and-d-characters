import React from 'react'
import Equipment from './Equipment'
import NumberField from '../NumberField'
import './MiddleRow.css'

const MiddleRow = () => {
  return (
    <div className="middleRow">
      <div id="combatInformation">
        <NumberField label="armor class" name="armorClass" />
        <NumberField label="initiative" name="initiative" />
        <NumberField label="speed" name="speed" />
        <NumberField label="current hit points" name="currentHitPoints" />
        <NumberField label="temporary hit points" name="temporaryHitPoints" />
        <div id="hitDice"><p>hit dice</p></div>
        <div id="deathSaves"><p>death saves</p></div>
      </div>
      <div id="attacksAndSpells">
        <p>attacks & spellcasting</p>
      </div>
      <Equipment />
    </div>
  )
}

export default MiddleRow
