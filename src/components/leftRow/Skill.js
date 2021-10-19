import {useState} from 'react'
import { connect, useSelector } from 'react-redux'
import { updateCharacter } from '../../characterReducer'

const Skill = (props) => {
  const character = useSelector((state) => state)
  const [checked, setChecked] = useState('false')
  const skillName = props.name

  // TODO think of a better way of saving skill data
  // maybe change schema in backend as well
  const updateCharacter = (event) => {
    const data = {
      key: skillName,
      value: event.target.value
    }
    props.updateCharacter(data)
  }

  if (!character.attributes) {
    return null
  }

  const skillScore = character.attributes[skillName]

  return (
    <div id={skillName}>
      <input
        className="roundCheckbox"
        type="checkbox"
        value={checked}
        onClick={e => setChecked(!checked)}>
      </input>
      <input
        style={{ width: "40px" }}
        type="number"
        value={skillScore}
        onChange={e => updateCharacter(e)}>
      </input>
      <label>{skillName}</label>
    </div>
  )
}

const ConnectedSkill = connect(null, { updateCharacter })(Skill)

export default ConnectedSkill
