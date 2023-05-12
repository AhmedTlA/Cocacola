import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

const NAVbar = () => {
  return (
      <Navbar  variant="dark" expand='lg'>
        <Container>
        <Navbar.Brand href="#home" style={{fontFamily : 'Loki Cola',fontSize : '50px'}}>CocaCola</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft : 'auto'}}>
          <Nav style={{marginLeft : 'auto'}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Whats-new">Whats new</Nav.Link>
            <Nav.Link href="#Newsletter">Newsletter</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          <NavDropdown title="Products" id="basic-nav-dropdown" style={{width : '150px'}}>
              <NavDropdown.Item href="#action/3.1">CocaCola ZERO</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">CocaCola</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Fonta
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sprite</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NAVbar