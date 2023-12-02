import React, {useContext} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { ToggleMode } from "./util";
import Text from './Text';

import AuthContext from '../context/AuthContext';


const NavArea = (props) => {
    let {user, logoutUser} = useContext(AuthContext)
    return(
        <div className="navContainer">
            <Navbar bg={props.variant} expand="lg" variant={props.variant}>
                <Container>
                    <BrandBar to={"/home"} {...props}>
                        IlliniEvents
                    </BrandBar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/home" {...props}>Home</NavLink>
                            <NavLink to="/events" {...props}>ShowEvents</NavLink>
                            <NavLink to="/create-event/" {...props}>CreateEvent</NavLink>
                            {user ? (
                                <p onClick={logoutUser}>Logout</p>
                            ): (
                                <NavLink to="/login" {...props}>Login</NavLink>
                            )}
                            {user ? (
                                user && <p>Hello {user.username}</p>
                            ): (
                                <NavLink to="/register" {...props}>Register</NavLink>
                            )}

                            {/* {user && <p>Hello {user.username}</p>} */}
                        </Nav>
                        <ToggleMode {...props}/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

const BrandBar = (props) => {
    return (
        <Navbar.Brand>
            <Link to={props.to} className="brand">
                <Text size={4} {...props}>
                    {props.children}
                </Text>
            </Link>
        </Navbar.Brand>
    )
}

const NavLink = (props) => {
    return (
        <Nav.Link>
            <Link to={props.to} className="navlink">
                <Text size={5} {...props}>
                    {props.children}
                </Text>
            </Link>
        </Nav.Link>
    )
}

export default NavArea;