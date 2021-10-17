import React from 'react'
import { connect, useSelector } from 'react-redux'
import { updateCharacter } from '../../characterReducer'
import './AbilityScores.css'

const AbilityScores = (props) => {
  const character = useSelector((state) => state)

  const updateCharacter = (event) => {
    const data = { key: event.target.id, value: event.target.value }
    props.updateCharacter(data)
  }

  if (!character.attributes) {
    return null
  }

  return (
    <div id="abilityScores">
      {/* TODO - For sure make components out of these elements
          when I settle on a style */}
      <div>
        <input
          type="number"
          value={character.attributes.strength}
          onChange={e => updateCharacter(e)}
          id="strength"></input>
        <label>strength</label>
      </div>
      <div>
        <input
          type="number"
          value={character.attributes.dexterity}
          onChange={e => updateCharacter(e)}
          id="dexterity"></input>
        <label>dexterity</label>
      </div>
      <div>
        <input
          type="number"
          value={character.attributes.constitution}
          onChange={e => updateCharacter(e)}
          id="constitution"></input>
        <label>constitution</label>
      </div>
      <div>
        <input
          type="number"
          value={character.attributes.intelligence}
          onChange={e => updateCharacter(e)}
          id="intelligence"></input>
        <label>intelligence</label>
      </div>
      <div>
        <input
          type="number"
          value={character.attributes.wisdom}
          onChange={e => updateCharacter(e)}
          id="wisdom"></input>
        <label>wisdom</label>
      </div>
      <div>
        <input
          type="number"
          value={character.attributes.charisma}
          onChange={e => updateCharacter(e)}
          id="charisma"></input>
        <label>charisma</label>
      </div>
    </div>
  )
}

const ConnectedAbilityScores = connect(null, { updateCharacter })(AbilityScores)

export default ConnectedAbilityScores
