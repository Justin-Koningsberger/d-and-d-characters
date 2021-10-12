import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Character = () => {
  const baseUrl = '/api/characters'
  const { id } = useParams()
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    const fetchCharacter = async () => {
      const result = await axios.get(`${baseUrl}/${id}`)
      console.log(result.data)
      setCharacter(result.data)
    }
    fetchCharacter()
  }, [id])

  return (
    <div>
      <p>name: {character?.name}</p>
    </div>
  )
}

export default Character
