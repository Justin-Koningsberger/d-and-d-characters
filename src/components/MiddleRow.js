import React from 'react'

const MiddleRow = () => {
  const style = {
    flex: 1,
    backgroundColor: 'blue',
    padding: '5px',
    margin: '8px'
  }

  return (
    <div style={style} className="container">
      Three rows: top row has 4 rows (3x1x1x2), middle and bottom row one element
    </div>
  )
}

export default MiddleRow
