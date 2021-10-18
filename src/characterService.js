import axios from 'axios'

const baseUrl = '/api/characters'

export const getCharacter = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`)

    return response.data
  }
  catch (e) {
    // If status is 400, character id is most likely wrong
    console.log('Character not found:', e.message)
  }
}

export const saveCharacter = async (character) => {
  try {
    const id = character.id
    const response = axios.put(`${baseUrl}/${id}`, character)

    return response.data
  }
  catch (e) {
    console.log('error saving character', e)
  }
}

export default { getCharacter, saveCharacter }
