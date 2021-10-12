import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const LandingPage = () => {
  const style = {
    textAlign: "center",
    paddingTop: "50px",
  }

  const baseUrl = '/api/characters'
  const history = useHistory()

  const [name, setName] = useState('')

  const handleNameChange = (event) => setName(event.target.value)

  const onSubmit = async (event) => {
    event.preventDefault()

    try {
      const resp = await axios.post(baseUrl, { name: name })
      const id = resp.data.id
      setName('')
      history.push(`/characters/${id}`)

    }
    catch (error) {
      console.log("Error: ", error.message)
    }
  }

  return (
    <div>
      <header className="Landing page" >
        <h2 style={style}>Create a new character</h2>
      </header>
      <div>
        <form style={style} className="Character name" onSubmit={onSubmit}>
          <label>
            Enter a name for your character
            <input value={name} onChange={handleNameChange} />
          </label>
          <button type="submit">add</button>
        </form>
      </div>
    </div>
  )
}

export default LandingPage
