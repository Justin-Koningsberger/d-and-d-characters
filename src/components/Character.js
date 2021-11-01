import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import CharacterOverview from './CharacterOverview'
import LeftRow from './leftRow/LeftRow'
import MiddleRow from './middleRow/MiddleRow'
import RightRow from './rightRow/RightRow'

import { findCharacter } from '../characterReducer'

const Character = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const character = useSelector(state => state)

  useEffect(() => {
    dispatch(findCharacter(id))
  }, [dispatch, id])

  if (!character.attributes) {
    return <h3>Character not found</h3>
  }

  return (
    <div >
      <CharacterOverview />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridColumnGap: '10px',

        margin: '40px',
        marginTop: 0
      }} className="rowContainer">
        <LeftRow />
        <MiddleRow />
        <RightRow />
      </div>
    </div>
  )
}

export default Character
