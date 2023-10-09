import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token'))

  const navigate = useNavigate()
  async function submitForm(e) {
    e.preventDefault()
    if (password.length < 8) {
      setErrorMessage("Password is too short");
    } else {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
      { 
        method: "POST", 
        headers: { 
          "Content-Type": "application/json" 
        }, 
        body: JSON.stringify({ 
          username: email, 
          password 
        }) 
      })
      setEmail(''); // resets the state value
      setPassword('');
      const { token } = await response.json()
      localStorage.setItem('token', token);
      navigate('/authenticated')
    }
  }


  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="email">Email</label>
        <input
          value={email} // controls the input value
          type="email"
          id="email"
          onChange={(e) => {
            setErrorMessage('');
            setEmail(e.target.value)
          }} // changes the state value and rerenders the form with the new values
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          id="password"
          onChange={(e) => {
            setErrorMessage('');
            setPassword(e.target.value)
          }}
        />
        <p>{errorMessage}</p>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;