import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const mainNavigation  = props => (
    <header>
        <Navbar bg="light" variant="light">
            <Navbar.Brand>Товары РП</Navbar.Brand>
            <Nav className="mr-auto">
                <LinkContainer to="/">
                    <Nav.Link>Главная</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/links">
                    <Nav.Link>Ссылки</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contacts">
                    <Nav.Link>Контакты</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    </header>
)

export default mainNavigation