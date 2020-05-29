import { Nav, Navbar } from "react-bootstrap";
import React from 'react';
import { Link } from 'gatsby';


const Header = () => {
    return(
    <header className="header">
          <Navbar collapseOnSelect expand="sm">
            <Link to="/"><Navbar.Brand className="ml-4">
              <img src='/img/logo_bookla.png' className="navbar-logo"></img>
            </Navbar.Brand></Link> 
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto mr-5">
                <Nav.Link className="nav-link-text pl-4 pr-4" as="div">
                  <Link to="/o-nas" className='link'>O Nás</Link>
                </Nav.Link>
                <Nav.Link className="nav-link-text pl-4 pr-4" as="div">
                  <Link to="/blog" className='link'>Blog</Link>
                </Nav.Link>
                <Nav.Link className="nav-link-text pl-4 pr-4" as="div">
                  <Link to="/kontakty" className='link'>Kontakty</Link>
                </Nav.Link>
                <Nav.Link className="nav-link-text pl-4 pr-4" as="div">
                  <a href='https://www.bookla.cz/'>Zjistit více</a>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
    );
}
export default Header;