import { connect, useSelector } from 'react-redux'
import { updateCharacter } from '../../characterReducer'

const TextField = (props) => {
  const character = useSelector((state) => state)
  const label = props.label

  const updateCharacter = (event) => {
    const data = {
      key: event.target.className,
      value: event.target.value
    }
    console.log(data)
    props.updateCharacter(data)
  }

  if (!character.attributes) {
    return null
  }

  return (
    <div className="hitpoint">
      <textarea
        className={label}
        value={character.attributes[label]}
        onChange={e => updateCharacter(e)}
      />
      <label>{label}</label>
    </div>
   )
}

const ConnectedTextField = connect(null, { updateCharacter })(TextField)

export default ConnectedTextField
