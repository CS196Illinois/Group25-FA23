import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <div>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='/'>IlliniEvents</Navbar.Brand>
          <Navbar.Brand href='/create-event/'>Create_Event</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
