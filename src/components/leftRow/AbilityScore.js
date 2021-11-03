import { connect, useSelector } from 'react-redux'
import { updateCharacter } from '../../characterReducer'
import { signedNumber } from '../../utilities'

const AbilityScore = (props) => {
  const character = useSelector((state) => state)
  const abilityName = props.name

  const updateCharacter = (event) => {
    const data = { key: abilityName, value: event.target.value }
    props.updateCharacter(data)
  }

  const abilityScore = character.attributes[abilityName]
  const modifier = Math.floor((abilityScore-10)/2)

  return (
    <div className="abilityBadge">
      <p className="name">{abilityName}</p>
      <div className="modifier">
        {signedNumber(modifier)}
      </div>
      <div>
        <input
          className="score"
          type="number"
          min="0"
          value={abilityScore || ''}
          onChange={e => updateCharacter(e)}>
        </input>
      </div>
    </div>
  )
}

const ConnectedAbilityScore = connect(null, { updateCharacter })(AbilityScore)

export default ConnectedAbilityScore
