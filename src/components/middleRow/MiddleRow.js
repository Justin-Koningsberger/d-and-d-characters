import React from 'react'
import Equipment from './Equipment'
import './MiddleRow.css'

const MiddleRow = () => {
  return (
    <div className="middleRow">
      <div id="hackyStuff">
        <div id="combatInformation1">
          <div id="div1">armor class</div>
          <div id="div2">initiative</div>
          <div id="div3">speed</div>
          <div id="div4">current hit points</div>
          <div id="div5">temporary hit points</div>
        </div>
        <div id="combatInformation2">
          <div id="hitDice">hit dice</div>
          <div id="deathSaves">death saves</div>
        </div>
      </div>
      <div id="attacksAndSpells">
        attacks & spellcasting
      </div>
      <Equipment />
    </div>
  )
}

export default MiddleRow
