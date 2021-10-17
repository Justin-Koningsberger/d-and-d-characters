import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import CharacterOverview from './CharacterOverview'
import LeftRow from './leftRow/LeftRow'
import MiddleRow from './MiddleRow'
import RightRow from './RightRow'

import { findCharacter } from '../characterReducer'

const Character = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(findCharacter(id))
  }, [dispatch, id])

  return (
    <div style={{ height: '1280px' }}>
      <CharacterOverview />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        height: '100%',
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
