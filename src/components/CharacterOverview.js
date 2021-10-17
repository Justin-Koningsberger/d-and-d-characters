import React from 'react'
import { connect, useSelector } from 'react-redux'
import { updateCharacter } from '../characterReducer'
import { saveCharacter } from '../characterService'
import './CharacterOverview.css'

const CharacterOverview = (props) => {
  const character = useSelector((state) => state)

  const updateCharacter = (event) => {
    const data = { key: event.target.className, value: event.target.value }
    props.updateCharacter(data)
  }

  if (!character.attributes) {
    return null
  }

  return (
    <div className="container">
      <div className="characterName">
        <p style={{ paddingLeft: '10px'}}>
          {character.name}
        </p>
        <label>
          character name
        </label>
        <button onClick={() => saveCharacter(character)}>save</button>
      </div>
      <div className="characterOverview">
        <div className="row">
          <div>
            <input
              className="charClass"
              value={character.attributes.charClass}
              onChange={e => updateCharacter(e)}>
            </input>
            <label>class and level</label>
          </div>
          <div>
            <input
              className="charRace"
              value={character.attributes.charRace}
              onChange={e => updateCharacter(e)}>
            </input>
            <label htmlFor="charRace">race</label>
          </div>
        </div>
        <div className="row">
          <div>
            <input
              className="charAlign"
              value={character.attributes.charAlign}
              onChange={e => updateCharacter(e)}>
            </input>
            <label>alignment</label>
          </div>
          <div>
            <input
              className="charBackground"
              value={character.attributes.charBackground}
              onChange={e => updateCharacter(e)}>
            </input>
            <label>background</label>
          </div>
        </div>
        <div className="row">
          <div>
            <input
              type="number"
              min="0"
              className="charExperience"
              value={character.attributes.charExperience}
              onChange={e => updateCharacter(e)}>
            </input>
            <label>experience points</label>
          </div>
        </div>
      </div>
    </div>
  )
}

const ConnectedCharacterOverview = connect(null, { updateCharacter })(CharacterOverview)

export default ConnectedCharacterOverview
