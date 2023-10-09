import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')


  const navigate = useNavigate()
  async function submitForm(e) {
    e.preventDefault()
   
      const response = await fetch('https://fakestoreapi.com/Auth/Login', 
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
    
      const { token } = await response.json()
      console.log(token)
      localStorage.setItem('token', token);
      navigate('/authenticated')
  }


  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="email">Email</label>
        <input
          value={email} // controls the input value
      
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