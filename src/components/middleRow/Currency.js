import { connect, useSelector } from 'react-redux'
import { updateCharacter } from '../../characterReducer'

const Currency = (props) => {
  const character = useSelector((state) => state)
  const name = props.name

  const updateCharacter = (event) => {
    const data = {
      key: name,
      value: event.target.value
    }
    props.updateCharacter(data)
  }

  if (!character.attributes) {
    return null
  }

  return (
    <div className="currencyBadge">
      {name}
      <input
        id={name}
        type="number"
        min="0"
        value={character.attributes[name]}
        onChange={e => updateCharacter(e)}
      />
    </div>
   )
}

const ConnectedCurrency = connect(null, { updateCharacter })(Currency)

export default ConnectedCurrency
