import React from 'react'
import './MiddleRow.css'

const MiddleRow = () => {
  return (
    <div className="middleRow">
      <div id="hackyStuff">
        <div id="combatInformation1">
          combat information
          <div id="div1"></div>
          <div id="div2"></div>
          <div id="div3"></div>
          <div id="div4"></div>
          <div id="div5"></div>
        </div>
        <div id="combatInformation2">
          <div id="hitDice">hit dice</div>
          <div id="deathSaves">death saves</div>
        </div>
      </div>
      <div id="attacksAndSpells">
        attacks & spellcasting
      </div>
      <div id="equipment">equipment</div>
    </div>
  )
}

export default MiddleRow
