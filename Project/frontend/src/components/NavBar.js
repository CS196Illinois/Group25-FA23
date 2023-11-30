<<<<<<< HEAD
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { ToggleMode } from "./util";
import Text from './Text';

const NavArea = (props) => {
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
                        </Nav>
                        <ToggleMode {...props}/>
                    </Navbar.Collapse>
=======
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
                    
>>>>>>> d82773e6416954b2d4f26b7af1800a1f26f6a02e
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