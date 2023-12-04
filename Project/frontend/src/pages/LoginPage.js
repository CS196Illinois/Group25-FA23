import React, {useContext} from 'react'
import { Form, Image, Button } from 'react-bootstrap';
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    return (
        <div className='outer loginPage'>
            <section id="section">
                <Image src="https://i.imgur.com/YcKQpuL.png" className="d-block mx-auto img-fluid w-120"></Image>
                <Form onSubmit={loginUser}>
                    <Form.Label className ="title" for="user">Username</Form.Label> 
                    <Form.Control type="user" name="username"/>
                    <Form.Label className = 'title'for="pass">Password</Form.Label> 
                    <Form.Control type="password" name="password"/>
                    <br />
                    <Button type="submit">SIGN IN</Button>
                </Form>
            </section>
        </div>
        
    )
}

export default LoginPage