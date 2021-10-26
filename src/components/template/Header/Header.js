import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

function Header(props) {

    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Todo</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </header>
        
    )
}

export default Header