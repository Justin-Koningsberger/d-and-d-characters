import React from 'react'
import Equipment from './Equipment'
import HitPoint from './HitPoint'
import './MiddleRow.css'

const MiddleRow = () => {
  return (
    <div className="middleRow">
      <div id="combatInformation">
        <div id="armorClass"><p>armor class</p></div>
        <div id="initiative"><p>initiative</p></div>
        <div id="speed"><p>speed</p></div>
        <HitPoint label="currentHitPoints" />
        <HitPoint label="temporaryHitPoints" />
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
