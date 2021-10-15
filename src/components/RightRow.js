import React from 'react'

const RightRow = () => {
  const style = {
    flex: 1,
    backgroundColor: 'yellow',
    margin: '8px 0px 8px 0px',
    padding: '5px'
  }

  return (
    <div style={style} className="container">
      Two rows: top row has 4 rows, bottom row is one element
    </div>
  )
}

export default RightRow
