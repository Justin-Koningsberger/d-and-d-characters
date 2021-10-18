import React from 'react'
import { connect, useSelector } from 'react-redux'
import { updateCharacter } from '../../characterReducer'
import AbilityScore from './AbilityScore'
import './AbilityScores.css'

const AbilityScoreList = (props) => {
  return (
    <div id="abilityScoreList">
      <AbilityScore name="strength" />
      <AbilityScore name="dexterity" />
      <AbilityScore name="constitution" />
      <AbilityScore name="intelligence" />
      <AbilityScore name="wisdom" />
      <AbilityScore name="charisma" />
    </div>
  )
}

export default AbilityScoreList
