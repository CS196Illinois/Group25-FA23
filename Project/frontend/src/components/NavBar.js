import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext';

const NavBar = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary color">
                <Container>
                    <Navbar.Brand href="#">IlliniEvents</Navbar.Brand>
                    <Link to="/">Home</Link>
                    {user ? (
                        <p onClick={logoutUser}>Logout</p>
                    ): (
                        <Link to="/login">Login</Link>
                    )}
                    {user ? (
                        user && <p>Hello {user.username}</p>
                    ): (
                        <Link to="/register">Register</Link>
                    )}

                    {/* {user && <p>Hello {user.username}</p>} */}
                    
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;