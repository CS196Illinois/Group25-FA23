import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  return (
    <div className='outer'>
      <section>
      <h1>Login</h1>
        <form onSubmit={loginUser}>
          <input type="text" name="username" placeholder="Enter Username" />
          <input type="password" name="password" placeholder="Enter Password" />
          <input type="submit" />
        </form>
      </section>
    </div>
  )
}

export default LoginPage
