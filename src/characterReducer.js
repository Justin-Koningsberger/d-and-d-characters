import { getCharacter } from './characterService'

export const findCharacter = (id) => {
  return async dispatch => {
    const character = await getCharacter(id)
    dispatch({
      type: 'GET_CHARACTER',
      payload: character
    })
  }
}

export const updateCharacter = (data) => {
  return async dispatch => {
    dispatch({
      type: 'UPDATE_CHARACTER',
      payload: data
    })
  }
}

export const updateWeapon = (data) => {
  return async dispatch => {
    dispatch({
      type: 'UPDATE_WEAPON',
      payload: data
    })
  }
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CHARACTER':
      return action.payload
    case 'UPDATE_CHARACTER':
      const key = action.payload.key
      const value = action.payload.value
      const newState = {...state}
      newState.attributes[key] = value

      return newState
    case 'UPDATE_WEAPON':
      const newWeaponState = {...state}
      newWeaponState.weapons[action.payload.index][action.payload.key] = action.payload.value

      return newWeaponState
    default:
      return state
  }
}

export default reducer
