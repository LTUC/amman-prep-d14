import React from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // without Boostrap

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Memes</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/favList">Memes List</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;