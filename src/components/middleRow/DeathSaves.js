import { connect, useSelector } from 'react-redux'
import { updateCharacter } from '../../characterReducer'

const DeathSaves = (props) => {
  const character = useSelector((state) => state)

  const updateCharacter = (event) => {
    const data = {
      key: event.target.className,
      value: event.target.checked
    }
    props.updateCharacter(data)
  }

  const inputChecked = (name) => {
    if (character.attributes[name] === undefined) {
      return false

    }
    else {
      /* eslint-disable no-eval */
      return eval(character.attributes[name])
    }
  }

  return (
    <div className="deathSaves">
      <div>
        <label>successes</label>
        <input
          className="pass1"
          type="checkbox"
          defaultChecked={inputChecked("pass1")}
          onClick={e => updateCharacter(e)}
        />
        <input
          className="pass2"
          type="checkbox"
          defaultChecked={inputChecked("pass2")}
          onClick={e => updateCharacter(e)}
        />
        <input
          className="pass3"
          type="checkbox"
          defaultChecked={inputChecked("pass3")}
          onClick={e => updateCharacter(e)}
        />
      </div>
      <div>
        <label>failures</label>
        <input
          className="fail1"
          type="checkbox"
          defaultChecked={inputChecked("fail1")}
          onClick={e => updateCharacter(e)}
        />
        <input
          className="fail2"
          type="checkbox"
          defaultChecked={inputChecked("fail2")}
          onClick={e => updateCharacter(e)}
        />
        <input
          className="fail3"
          type="checkbox"
          defaultChecked={inputChecked("fail3")}
          onClick={e => updateCharacter(e)}
        />
      </div>
      <label>Death saves</label>
    </div>
   )
}

const ConnectedDeathSaves = connect(null, { updateCharacter })(DeathSaves)

export default ConnectedDeathSaves
