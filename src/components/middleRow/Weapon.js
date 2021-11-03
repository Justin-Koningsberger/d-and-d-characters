import { connect, useSelector } from 'react-redux'
import { updateWeapon } from '../../characterReducer'

const Weapon = (props) => {
  const character = useSelector((state) => state)
  const index = props.index

  const updateWeapon = (event) => {
    const data = {
      index: index,
      key: event.target.className,
      value: event.target.value
    }
    props.updateWeapon(data)
  }

  return (
    <div className="weapon">
      <textarea
        className='name'
        value={character.weapons[index].name || ''}
        onChange={e => updateWeapon(e)}
      />
      <input
        className='bonus'
        style={{width: '75px', textAlign: 'center'}}
        type='number'
        value={character.weapons[index].bonus || ''}
        onChange={e => updateWeapon(e)}
      />

      <textarea
        className='damage'
        value={character.weapons[index].damage || ''}
        onChange={e => updateWeapon(e)}
      />
    </div>
  )
}

const ConnectedWeapon = connect(null, { updateWeapon })(Weapon)

export default ConnectedWeapon
