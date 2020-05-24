import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import logo from "./logo_bookla.png";

const Header = () => {
    return(
    <header className="header">
          <Navbar collapseOnSelect expand="sm">
            <Navbar.Brand href="#home" className="ml-4">
              <img src={logo} className="navbar-logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto mr-5">
                <Nav.Link href="#1" className="nav-link-text pl-4 pr-4">
                  O Nás
                </Nav.Link>
                <Nav.Link href="#2" className="nav-link-text pl-4 pr-4">
                  Blog
                </Nav.Link>
                <Nav.Link href="#3" className="nav-link-text pl-4 pr-4">
                  Kontakty
                </Nav.Link>
                <Nav.Link href="#4" className="nav-link-text pl-4 pr-4">
                  Zjistit více
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
    );
}
export default Header;