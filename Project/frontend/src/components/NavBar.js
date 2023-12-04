import React, {useContext} from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { ToggleMode } from "./util";
import Text from './Text';

import AuthContext from '../context/AuthContext';


const NavArea = (props) => {
    let {user} = useContext(AuthContext)
    return(
        <div className="navContainer">
            <Navbar bg={props.variant} expand="lg" variant={props.variant}>
                <Container>
                    <BrandBar to={"/home"} {...props}>
                        <Image src="https://i.imgur.com/59XICLa.png" width={150} height={120} fluid rounded/>
                    </BrandBar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/events" {...props}>Events</NavLink>
                            <NavLink to="/calendar" {...props}>Calendar</NavLink>

                            {/* <NavLink to="/create-event/" {...props}>CreateEvent</NavLink> */}

                            {user ? (
                                <NavLink to="/create-event/" {...props}>Create Event</NavLink>
                            ): (
                                <p></p>
                            )}

                            {user ? (
                                <NavButton {...props}>Logout</NavButton>
                            ): (
                                <NavLink to="/login" {...props}>Login</NavLink>
                            )}
                            {user ? (
                                user && <NavLink {...props}>Hello, {user.username}</NavLink>
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

const NavButton = (props) => {
    let {logoutUser} = useContext(AuthContext)
    return (
        <Nav.Link>
            <Link onClick={logoutUser} to={props.to} className="navlink">
                <Text size={5} {...props}>
                    {props.children}
                </Text>
            </Link>
        </Nav.Link>
    )
}

export default NavArea;