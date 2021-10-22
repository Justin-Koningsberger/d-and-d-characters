import { connect, useSelector } from 'react-redux'
import { updateCharacter } from '../../characterReducer'
import './LeftRow.css'

const Skill = (props) => {
  const character = useSelector((state) => state)
  const skillName = props.name
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

  if (!character.attributes) {
    return null
  }

  const skillScore = character.attributes[skillName]
  // Backend returns skillChecked as string, eval should be safe here
  // value can only be 'true' or 'false'
  const inputChecked = character.attributes[skillChecked] === undefined
    ? false
    /* eslint-disable no-eval */
    : eval(character.attributes[skillChecked])

  return (
    <div id={skillName}>
      <input
        className="roundCheckbox"
        id={skillChecked}
        type="checkbox"
        defaultChecked={inputChecked}
        onClick={e => updateCharacter(e)}>
      </input>
      {/* If I use the signedNumber utility, I can't use type=number */}
      <input
        className="skillInput"
        id={skillName}
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
