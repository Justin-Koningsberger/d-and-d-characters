import React from 'react'
import Equipment from './Equipment'
import DeathSaves from './DeathSaves'
import NumberField from '../NumberField'
import TextField from '../TextField'
import Weapon from './Weapon'
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
        <TextField label="hit dice" name="hitDice" />
        <DeathSaves />
      </div>
      <div className="attacksAndSpells">
        <Weapon index={0} />
        <Weapon index={1} />
        <Weapon index={2} />
      </div>
      <Equipment />
    </div>
  )
}

export default MiddleRow
