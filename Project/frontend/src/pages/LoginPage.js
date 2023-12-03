import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    return (
        <div className = 'outer loginPage'>
        <section id = "section">
        <center>
        <h1 id = "logoImg"> <img src="https://i.imgur.com/t0DWiN9.png" alt="Your Logo" /></h1>
        </center>
<form onSubmit={loginUser}>
    
<br></br>
                  
<label className ="title" for="user">USERNAME</label> 
            <input type="user" name="username"/>
            <label className = 'title'for="pass">PASSWORD</label> 
            <input type="pass" name="password"/>
            <button type="submit">SIGN IN</button>
           
            </form>
        </section>
        </div>
        
    )
}

export default LoginPage