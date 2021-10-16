import React, { useState, useEffect } from 'react'
import './AbilityScores.css'

const AbilityScores = ({ character, updateCharacter }) => {
  const [strength, setStrength] = useState('')
  const [dexterity, setDexterity] = useState('')
  const [constitution, setConstitution] = useState('')
  const [intelligence, setIntelligence] = useState('')
  const [wisdom, setWisdom] = useState('')
  const [charisma, setCharisma] = useState('')

  useEffect(() => {
    if (typeof character.attributes !== 'undefined') {
      const attrs = character.attributes

      setStrength(attrs.strength || '')
      setDexterity(attrs.dexterity || '')
      setConstitution(attrs.constitution || '')
      setIntelligence(attrs.intelligence || '')
      setWisdom(attrs.wisdom || '')
      setCharisma(attrs.charisma || '')

    }
  }, [character.attributes])

  const updateChar = () => {
    const data = {
      strength,
      dexterity,
      constitution,
      intelligence,
      wisdom,
      charisma
    }

    updateCharacter(data)
  }
  return (
    <div id="abilityScores">
      {/* TODO - For sure make components out of these elements
          when I settle on a style */}
      <div>
        <input
          type="number"
          value={strength}
          onChange={ e => setStrength(e.target.value) }
          id="strength"></input>
        <label>strength</label>
      </div>
      <div>
        <input
          type="number"
          value={dexterity}
          onChange={ e => setDexterity(e.target.value) }
          id="dexterity"></input>
        <label>dexterity</label>
      </div>
      <div>
        <input
          type="number"
          value={constitution}
          onChange={ e => setConstitution(e.target.value) }
          id="constitution"></input>
        <label>constitution</label>
      </div>
      <div>
        <input
          type="number"
          value={intelligence}
          onChange={ e => setIntelligence(e.target.value) }
          id="intelligence"></input>
        <label>intelligence</label>
      </div>
      <div>
        <input
          type="number"
          value={wisdom}
          onChange={ e => setWisdom(e.target.value) }
          id="wisdom"></input>
        <label>wisdom</label>
      </div>
      <div>
        <input
          type="number"
          value={charisma}
          onChange={ e => setCharisma(e.target.value) }
          id="charisma"></input>
        <label>charisma</label>
      </div>
    <button onClick={updateChar}>update</button>
    </div>
  )
}

export default AbilityScores
