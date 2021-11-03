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

  return (
    <div className="container">
      <div className="characterName">
        <p>
          {character.name}
        </p>
        <label>
          character name
        </label>
        <button onClick={() => saveCharacter(character)}>save</button>
      </div>
      <div className="characterOverview">
        <div className="class twoRows">
          <input
            className="charClass"
            value={character.attributes.charClass}
            onChange={e => updateCharacter(e)}>
          </input>
          <label>class and level</label>
        </div>
        <div className="race twoRows">
          <input
            className="charRace"
            value={character.attributes.charRace}
            onChange={e => updateCharacter(e)}>
          </input>
          <label>race</label>
        </div>
        <div className="alignment twoRows">
          <input
            className="charAlign"
            value={character.attributes.charAlign}
            onChange={e => updateCharacter(e)}>
          </input>
          <label>alignment</label>
        </div>
        <div className="background twoRows">
          <input
            className="charBackground"
            value={character.attributes.charBackground}
            onChange={e => updateCharacter(e)}>
          </input>
          <label>background</label>
        </div>
        <div className="experience twoRows">
          <input
            className="charExperience"
            type="number"
            min="0"
            value={character.attributes.charExperience}
            onChange={e => updateCharacter(e)}>
          </input>
          <label>experience points</label>
        </div>
      </div>
    </div>
  )
}

const ConnectedCharacterOverview = connect(null, { updateCharacter })(CharacterOverview)

export default ConnectedCharacterOverview
