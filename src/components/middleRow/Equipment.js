import Currency from './Currency'
import Belongings from './Belongings'
import './MiddleRow.css'

const Equipment = (props) => {
  return (
    <div id="equipment">
      <div id="currency">
        <div>
          <Currency name="copper" />
        </div>
        <div>
          <Currency name="silver" />
        </div>
        <div>
          <Currency name="electrum" />
        </div>
        <div>
          <Currency name="gold" />
        </div>
        <div>
          <Currency name="platinum" />
        </div>
        <br/>
      </div>
      <Belongings />
      <p id="name">equipment</p>
    </div>
  )
}

export default Equipment
