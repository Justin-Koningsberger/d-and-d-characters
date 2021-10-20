import React from 'react'
import './RightRow.css'

const RightRow = () => {
  return (
    <div className="rightRow">
      <div style={{ padding: "10px" }} id="personalStuff">
        <div id="personalityTraits"><p>personality traits</p></div>
        <div id="ideals"><p>ideals</p></div>
        <div id="bonds"><p>bonds</p></div>
        <div id="flaws"><p>flaws</p></div>
      </div>
      <div id="featuresTraits">
        <p>features & traits</p>
      </div>
    </div>
  )
}

export default RightRow
