import React from 'react'
import Equipment from './Equipment'
import './MiddleRow.css'

const MiddleRow = () => {
  return (
    <div className="middleRow">
      <div id="combatInformation">
        <div id="armorClass"><p>armor class</p></div>
        <div id="initiative"><p>initiative</p></div>
        <div id="speed"><p>speed</p></div>
        <div id="currentHitPoints"><p>current hit points</p></div>
        <div id="temporaryHitPoints"><p>temporary hit points</p></div>
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
