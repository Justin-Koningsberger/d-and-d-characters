import React from 'react'
import TextField from '../TextField'
import './RightRow.css'

const RightRow = () => {
  return (
    <div className="rightRow">
      <div className="personalStuff">
        <TextField name="personalityTraits" label="personality traits" />
        <TextField name="ideals" label="ideals" />
        <TextField name="bonds" label="bonds" />
        <TextField name="flaws" label="flaws" />
      </div>
      <div className="featuresTraits">
        <TextField name="featsTraits" label="features & traits" />
      </div>
    </div>
  )
}

export default RightRow
