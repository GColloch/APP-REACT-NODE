import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

function Auth ({ setToken }) {
  const [isLoginForm, setIsLoginForm] = useState(true)

  const handleSwitchForm = () => {
    setIsLoginForm(!isLoginForm)
  }

  return (
    <div>
      <h1>{isLoginForm ? 'Login' : 'Register'}</h1>
      {isLoginForm
        ? (
          <LoginForm setToken={setToken} />
          )
        : (
          <RegisterForm setToken={setToken} />
          )}
      <button onClick={handleSwitchForm}>
        {isLoginForm
          ? 'Je n\'ai pas de compte'
          : 'J\'ai déjà un compte'}
      </button>
    </div>
  )
}

export default Auth
