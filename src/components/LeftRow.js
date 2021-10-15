import React from 'react'

const LeftRow = () => {
  // Time to start a separate css file methinks..
  const leftRowStyle = {
    flex: 1,
    backgroundColor: 'green',
    padding: '5px',
    margin: '8px 0px 8px 0px',
    display: 'grid',
    gridTemplateRows: '7fr 0.5fr 2.5fr'
  }

  const rowOne = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr'

  }

  const columnOne = {
    border: '2px solid black',
  }

  const columnTwo = {
    display: 'grid',
    gridTemplateRows: '1fr 1fr 4fr 10fr'
  }

  const inspiration = {
    border: '2px solid black'
  }

  const proficiencyBonus = {
    border: '2px solid black'
  }

  const savingThrows = {
    border: '2px solid black',
    display: 'grid',
    gridTemplateColumns: '1fr'
  }

  const skills = {
    border: '2px solid black',
    display: 'grid',
    gridTemplateColumns: '1fr'
  }

  const rowTwo = {
    border: '2px solid black'
  }

  const rowThree = {
    border: '2px solid black'
  }

  return (
    <div style={leftRowStyle} className="leftRow">
      <div style={rowOne} id="rowOne">
        <div style={columnOne} id="columnOne">
          <input id="strength"></input>
          <label>strength</label>
          <input id="dexterity"></input>
          <label>dexterity</label>
          <input id="constitution"></input>
          <label>constitution</label>
          <input id="intelligence"></input>
          <label>intelligence</label>
          <input id="wisdom"></input>
          <label>wisdom</label>
          <input id="charisma"></input>
          <label>charisma</label>
        </div>
        <div style={columnTwo} id="columnTwo">
          <div style={inspiration} className="inspiration">inspiration</div>
          <div style={proficiencyBonus} className="proficiencyBonus">profieciency bonus</div>
          <div style={savingThrows} className="savingThrows">savingThrows</div>
          <div style={skills} className="skills">skills</div>
        </div>
      </div>
      <div style={rowTwo} id="rowTwo"> Row Two</div>
      <div style={rowThree} id="rowThree"> Row Three</div>
    </div>
  )
}

export default LeftRow
