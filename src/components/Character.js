import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CharacterOverview from './CharacterOverview'

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
    <div>
      <CharacterOverview character={character} updateCharacter={updateCharacter} />
      <button onClick={() => console.log(character)}>values?</button>
      <button onClick={() => saveCharacter()}>save</button>
    </div>
  )
}

export default Character
