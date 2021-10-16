import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CharacterOverview from './CharacterOverview'
import LeftRow from './leftRow/LeftRow'
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
    const characterToUpdate = character

    if (!characterToUpdate.attributes) {
      characterToUpdate.attributes = {}
    }
    Object.assign(characterToUpdate.attributes, data)

    try {
      // console.log('updating', characterToUpdate)
      saveCharacter(characterToUpdate)
      setCharacter(characterToUpdate)
    }
    catch (e) {
      console.error('Uh oh...', e)
    }
  }

  const saveCharacter = async (characterToSave) => {
    const id = character.id
    await axios.put(`${baseUrl}/${id}`, characterToSave)
  }

  return (
    <div style={{ height: '1280px' }}>
      <CharacterOverview character={character} updateCharacter={updateCharacter} />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        height: '100%',
        margin: '40px',
        marginTop: 0
      }} className="rowContainer">
        <LeftRow character={character} updateCharacter={updateCharacter} />
        <MiddleRow character={character} updateCharacter={updateCharacter} />
        <RightRow character={character} updateCharacter={updateCharacter} />
      </div>
    </div>
  )
}

export default Character
