import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CharacterOverview from './CharacterOverview'
import LeftRow from './LeftRow'
import MiddleRow from './MiddleRow'
import RightRow from './RightRow'

const Character = () => {
  const baseUrl = '/api/characters'
  const { id } = useParams()

  const [character, setCharacter] = useState({})

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const result = await axios.get(`${baseUrl}/${id}`)
        setCharacter(result.data)
      }
      catch (e) {
        // If status is 400, character id is most likely wrong
        console.log(e)
      }
    }
    fetchCharacter()
  }, [id])

  const updateCharacter = (data) => {
    const updatedCharacter = { ...character, attributes: data }
    setCharacter(updatedCharacter)
  }

  const saveCharacter = async () => {
    const id = character.id
    await axios.put(`${baseUrl}/${id}`, character)
  }

  return (
    <div style={{ height: '1080px' }}>
      <CharacterOverview character={character} updateCharacter={updateCharacter} />
      <div style={ {display: 'flex', height: '80%', margin: '40px', marginTop: 0} } className="rowContainer">
        <LeftRow character={character} updateCharacter={updateCharacter} />
        <MiddleRow character={character} updateCharacter={updateCharacter} />
        <RightRow character={character} updateCharacter={updateCharacter} />
      </div>
      <button onClick={() => console.log(character)}>values?</button>
      <button onClick={() => saveCharacter()}>save</button>
    </div>
  )
}

export default Character
