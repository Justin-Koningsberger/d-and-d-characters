import React, { useState, useEffect } from 'react'
import './CharacterOverview.css'

const CharacterOverview = ({ character, updateCharacter }) => {
  const [charClass, setCharClass] = useState('')
  const [charRace, setCharRace] = useState('')
  const [charAlign, setCharAlign] = useState('')
  const [charBackground, setCharBackground] = useState('')
  // experience points are the first thing I want to treat as a number
  const [charExperience, setCharExperience] = useState('')

  useEffect(() => {
    if (typeof character.attributes !== 'undefined') {
      const attrs = character.attributes

      setCharClass(attrs.charClass)
      setCharRace(attrs.charRace)
      setCharAlign(attrs.charAlign)
      setCharBackground(attrs.charBackground || '')
      setCharExperience(attrs.charExperience || 0)

    }
  }, [character.attributes])

  const updateChar = () => {
    const data = { charClass, charRace, charAlign, charBackground, charExperience: parseInt(charExperience) || 0 }

    updateCharacter(data)
  }

  return (
    <div className="container">
      <div className="character-name">
        <p style={{ paddingLeft: '10px'}}>
          {character?.name}
        </p>
        <label htmlFor="character-name">
          character name
        </label>
      </div>
      <div className="character-overview">
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
              className="charExperience"
              value={charExperience}
              onChange={ e => setCharExperience(parseInt(e.target.value)) }>
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
