import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {

    event.preventDefault() 
    
    alert(`Name: ${name}, Password: ${password}`)

    if (name && password) {

      navigate('/catalog')
    } 

  }
  return (
    <div className="App">
      <h1>Registration</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">Name:</label>
          <input 
          type="text" 
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input 
          type="password" 
          id="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;

