import { connect, useSelector } from 'react-redux'
import { updateCharacter } from '../characterReducer'

const NumberField = (props) => {
  const character = useSelector((state) => state)
  const label = props.label
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
    <div className={name}>
      <input
        type= 'number'
        value={character.attributes[name] || ''}
        onChange={e => updateCharacter(e)}
      />
      <label>{label}</label>
    </div>
   )
}

const ConnectedNumberField = connect(null, { updateCharacter })(NumberField)

export default ConnectedNumberField
