import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const headerStyle = {
    textAlign: "center",
    paddingTop: "50px",
  }

  const formStyle = {
    textAlign: "center",
    paddingTop: "50px",
  }

  const baseUrl = '/api/characters'

  const [name, setName] = useState('')

  const handleNameChange = (event) => setName(event.target.value)

  const onSubmit = async (event) => {
    event.preventDefault()

    try {
      const resp = await axios.post(baseUrl, { name: name })
      console.log(resp.data)
      setName('')
    }
    catch (error) {
      console.log("Error: ", error.message)
    }
  }

  return (
    <div className="App">
      <header className="Landing page" >
        <h2 style={headerStyle}>Create a new character</h2>
      </header>
      <div>
        <form style={formStyle} className="Character name" onSubmit={onSubmit}>
          <label>
            Enter a name for your character
            <input value={name} onChange={handleNameChange} />
          </label>
          <button type="submit">add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
