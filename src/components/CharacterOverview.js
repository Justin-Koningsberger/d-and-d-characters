import React, { useState } from 'react'
import './CharacterOverview.css'

const CharacterOverview = ({ character, updateCharacter }) => {
  const [charClass, setCharClass] = useState('')
  const [charRace, setCharRace] = useState('')
  const [charAlign, setCharAlign] = useState('')

//   useEffect(() => {
//     if (character.attributes) {
//       const attrs = character.attributes[0]
// 
//       setCharClass(attrs.charClass)
//       setCharRace(attrs.charRace)
//       setCharAlign(attrs.charAlign)
//     }
//   })

  const updateChar = () => {
    const data = { charClass, charRace, charAlign }

    updateCharacter(data)
  }

  return (
    <div className="container">
      <div className="character-name">
        <p style={{ paddingLeft: '10px'}}>
          {character?.name}
        </p>
        <label htmlFor="character-name">
          character name
        </label>
       </div>
       <div className="character-overview">
         <div>
           <input
             className="charClass"
             value={charClass}
             onChange={ e => setCharClass(e.target.value) }>
           </input>
           <label>class and level</label>
         </div>
         <div>
           <input
             className="charRace"
             value={charRace}
             onChange={ e => setCharRace(e.target.value) }>
           </input>
           <label>race</label>
         </div>
         <div>
           <input
             className="charAlign"
             value={charAlign}
             onChange={ e => setCharAlign(e.target.value) }>
           </input>
           <label>alignment</label>
         </div>
       </div>
       <button onClick={updateChar}>update</button>
    </div>
  )
}

export default CharacterOverview
