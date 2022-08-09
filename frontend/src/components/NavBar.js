import React from 'react'
import logo from '../static/images/logo.png'
import { Navbar, Nav } from 'react-bootstrap'

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <img src={logo} width="50" height="50" alt="logo"></img>
        <Navbar.Brand href="/">Stack <span className="fw-bold">overflow</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="mr-auto">
            { !localStorage.getItem("token") ? (
              <>
                <Nav.Link href='/login'>Login</Nav.Link>
                <Nav.Link href='/register'>Register</Nav.Link>
              </>
            ): (
              <Nav.Link href='/login' onClick ={ () => localStorage.clear()}>Logout</Nav.Link>
            )}
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar