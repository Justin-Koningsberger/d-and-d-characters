import { connect, useSelector } from 'react-redux'
import { updateCharacter } from '../characterReducer'

const TextField = (props) => {
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

  return (
    <div className={name}>
      <textarea
        value={character.attributes[name] || ''}
        onChange={e => updateCharacter(e)}
      />
      <label>{label}</label>
    </div>
   )
}

const ConnectedTextField = connect(null, { updateCharacter })(TextField)

export default ConnectedTextField
