import { connect, useSelector } from 'react-redux'
import { updateCharacter } from '../../characterReducer'

const LangAndProf = (props) => {
  const character = useSelector((state) => state)

  const updateCharacter = (event) => {
    const data = {
      key: event.target.id,
      value: event.target.value
    }
    props.updateCharacter(data)
  }

  if (!character.attributes) {
    return null
  }

  return (
    <div id="langAndProf">
      <div>
        <label>Proficiencies</label>
        <textarea
          id="proficiencies"
          value={character.attributes.proficiencies}
          onChange={e => updateCharacter(e)} />
      </div>
      <div>
        <label>Languages</label>
        <textarea
          id="languages"
          value={character.attributes.languages}
          onChange={e => updateCharacter(e)} />
      </div>
      <p>other proficiencies & languages</p>
    </div>
  )
}

const ConnectedLangAndProf = connect(null, { updateCharacter })(LangAndProf)

export default ConnectedLangAndProf
