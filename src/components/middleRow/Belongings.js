import { connect, useSelector } from 'react-redux'
import { updateCharacter } from '../../characterReducer'

const Belongings = (props) => {
  const character = useSelector((state) => state)

  const updateCharacter = (event) => {
    const data = {
      key: "belongings",
      value: event.target.value
    }
    props.updateCharacter(data)
  }

  return (
    <div>
      <textarea
        id="belongings"
        value={character.attributes.belongings}
        onChange={e => updateCharacter(e)}
      />
    </div>
   )
}

const ConnectedBelongings = connect(null, { updateCharacter })(Belongings)

export default ConnectedBelongings
