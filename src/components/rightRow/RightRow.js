import React from 'react'
import TextField from './TextField'
import './RightRow.css'

const RightRow = () => {
  return (
    <div className="rightRow">
      <div className="personalStuff">
        <TextField label="personalityTraits" />
        <TextField label="ideals" />
        <TextField label="bonds" />
        <TextField label="flaws" />
      </div>
      <div className="featuresTraits">
        <p>features & traits</p>
      </div>
    </div>
  )
}

export default RightRow
