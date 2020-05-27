import { Nav, Navbar } from "react-bootstrap";
import logo from "./logo_bookla.png";
import "./style.scss";
import React from 'react';
import { Link } from 'gatsby';


const Header = () => {
    return(
    <header className="header">
          <Navbar collapseOnSelect expand="sm">
            <Link to="/"><Navbar.Brand className="ml-4">
              <img src={logo} className="navbar-logo"></img>
            </Navbar.Brand></Link> 
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto mr-5">
                <Nav.Link className="nav-link-text pl-4 pr-4">
                  <Link to="/o-nas" className='link'>O Nás</Link>
                </Nav.Link>
                <Nav.Link className="nav-link-text pl-4 pr-4">
                  <Link to="/blog" className='link'>Blog</Link>
                </Nav.Link>
                <Nav.Link className="nav-link-text pl-4 pr-4">
                  <Link to="/kontakty" className='link'>Kontakty</Link>
                </Nav.Link>
                <Nav.Link className="nav-link-text pl-4 pr-4">
                  <a href="//www.bookla.cz/" className='link'>Zjistit více</a>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
    );
}
export default Header;