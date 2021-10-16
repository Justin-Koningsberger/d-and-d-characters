import React, { useState, useEffect } from 'react'
import './CharacterOverview.css'

const CharacterOverview = ({ character, updateCharacter }) => {
  const [charClass, setCharClass] = useState('')
  const [charRace, setCharRace] = useState('')
  const [charAlign, setCharAlign] = useState('')
  const [charBackground, setCharBackground] = useState('')
  const [charExperience, setCharExperience] = useState('')

  useEffect(() => {
    if (typeof character.attributes !== 'undefined') {
      const attrs = character.attributes

      setCharClass(attrs.charClass || '')
      setCharRace(attrs.charRace || '')
      setCharAlign(attrs.charAlign || '')
      setCharBackground(attrs.charBackground || '')
      setCharExperience(attrs.charExperience || '')

    }
  }, [character.attributes])

  const updateChar = () => {
    const data = { charClass, charRace, charAlign, charBackground, charExperience }

    updateCharacter(data)
  }

  return (
    <div className="container">
      <div className="characterName">
        <p style={{ paddingLeft: '10px'}}>
          {character?.name}
        </p>
        <label>
          character name
        </label>
        <button onClick={() => console.log('character object:', character)}>values?</button>
      </div>
      <div className="characterOverview">
        <div className="row">
          <div className="charClass">
            <input
              value={charClass}
              onChange={ e => setCharClass(e.target.value) }>
            </input>
            <label>class and level</label>
          </div>
          <div>
            <input
              className="charRace"
              value={charRace}
              onChange={ e => setCharRace(e.target.value) }>
            </input>
            <label htmlFor="charRace">race</label>
          </div>
        </div>
        <div className="row">
          <div>
            <input
              className="charAlign"
              value={charAlign}
              onChange={ e => setCharAlign(e.target.value) }>
            </input>
            <label>alignment</label>
          </div>
          <div>
            <input
              className="charBackground"
              value={charBackground}
              onChange={ e => setCharBackground(e.target.value) }>
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
              value={charExperience}
              onChange={ e => setCharExperience(e.target.value) }>
            </input>
            <label>experience points</label>
          </div>
        </div>
      </div>
      <button onClick={updateChar}>update</button>
    </div>
  )
}

export default CharacterOverview
