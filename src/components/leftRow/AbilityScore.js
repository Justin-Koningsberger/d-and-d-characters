
import { connect, useSelector } from 'react-redux'
import { updateCharacter } from '../../characterReducer'

const AbilityScore = (props) => {
  const character = useSelector((state) => state)
  const abilityName = props.name

  const updateCharacter = (event) => {
    const data = { key: abilityName, value: event.target.value }
    props.updateCharacter(data)
  }

  if (!character.attributes) {
    return null
  }

  const abilityScore = character.attributes[abilityName]
  //check this calc, not sure what the rules are here
  const modifier = Math.floor((abilityScore-10)/2)
  let displayValue
  if (isNaN(modifier)) {
    displayValue = ''
  }
  else {
    displayValue = Math.sign(modifier) < 0 ? modifier : `+${modifier}`
  }

  return (
    <div className="abilityBadge">
      <p className="name">{abilityName}</p>
      <div className="modifier">
        {displayValue}
      </div>
      <div className="score">
        <input
          type="number"
          min="0"
          value={abilityScore}
          onChange={e => updateCharacter(e)}>
        </input>
      </div>
    </div>
  )
}

const ConnectedAbilityScore = connect(null, { updateCharacter })(AbilityScore)

export default ConnectedAbilityScore
