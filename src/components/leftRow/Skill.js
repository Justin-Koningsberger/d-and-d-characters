import { connect, useSelector } from 'react-redux'
import { updateCharacter } from '../../characterReducer'
import './LeftRow.css'

const Skill = (props) => {
  const character = useSelector((state) => state)
  const skillName = props.name
  const skillLabel = props.label
  const skillChecked = skillName.concat('Checked')

  const updateCharacter = (event) => {
    let data
    if (event.target.id === skillName) {
      data = {
        key: skillName,
        value: event.target.value
      }
    }
    else {
      data = {
        key: skillChecked,
        value: event.target.checked.toString()
      }
    }
    props.updateCharacter(data)
  }

  const skillScore = character.attributes[skillName]
  let inputChecked

  if (character.attributes[skillChecked] === 'true') {
    inputChecked = true
  }
  else {
    inputChecked = false
  }

  return (
    <div id={skillName}>
      <input
        className="roundCheckbox"
        id={skillChecked}
        type="checkbox"
        defaultChecked={inputChecked}
        onClick={e => updateCharacter(e)}>
      </input>
      <input
        className="skillInput"
        id={skillName}
        type="number"
        value={skillScore || ''}
        onChange={e => updateCharacter(e)}>
      </input>
      <label>{skillLabel}</label>
    </div>
  )
}

const ConnectedSkill = connect(null, { updateCharacter })(Skill)

export default ConnectedSkill
