import { connect, useSelector } from 'react-redux'
import { updateCharacter } from '../../characterReducer'

const HitPoint = (props) => {
  const character = useSelector((state) => state)
  const label = props.label

  const updateCharacter = (event) => {
    const data = {
      key: event.target.className,
      value: event.target.value
    }
    props.updateCharacter(data)
  }

  if (!character.attributes) {
    return null
  }

  return (
    <div id={label}>
      <input
        style={{
          fontSize: '25px',
          width: '50px',
          marginLeft: '20px',
          border: 'none'
        }}
        className={label}
        type= 'number'
        value={character.attributes[label] || ''}
        onChange={e => updateCharacter(e)}
      />
      {/* Use lodash to lowerCase label for display?? */}
      <label>{label}</label>
    </div>
   )
}

const ConnectedHitPoint = connect(null, { updateCharacter })(HitPoint)

export default ConnectedHitPoint
