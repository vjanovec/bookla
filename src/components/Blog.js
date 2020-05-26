import React from "react";
import "./Blog.scss";
import "./App.scss";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import logo from "./logo_bookla.png";
import samonakladatel from "./samonakladatel.png";
import pisalek from './pisalek_novy.png';
import marketing from './marketing.png';
import milovnik from './milovnik-knih.png';
import nabizejici from './nabizejici.png';
import zazobanec from './zazobanec.png';


const Blog = () => {
  return (
    <div className="page">
      <div class="wrapper">
        <header className="header">
          <Navbar collapseOnSelect expand="sm">
            <Navbar.Brand href="#home" className="ml-4">
              <img src={logo} className="navbar-logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto mr-5">
                <Nav.Link href="#features" className="nav-link-text pl-4 pr-4">
                  O Nás
                </Nav.Link>
                <Nav.Link href="#pricing" className="nav-link-text pl-4 pr-4">
                  Blog
                </Nav.Link>
                <Nav.Link href="#contacts" className="nav-link-text pl-4 pr-4">
                  Kontakty
                </Nav.Link>
                <Nav.Link href="#more" className="nav-link-text pl-4 pr-4">
                  Zjistit více
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <main className="main">
          <Container fluid>
          <h1 className="secondary-heading">Jak napsat knihu?</h1>
          <div class="blog-thumbnail">
              <h2 className="blog-thumbnail-title">Jak začít psát vlastní knihu</h2>
          </div>
          <div class="blog-thumbnail">
              <h2 className="blog-thumbnail-title">Jak začít psát vlastní knihu</h2>
          </div>
          <h2 className="secondary-heading">Jak vydat vlastní knihu?</h2>
          <div class="blog-thumbnail">
              <h2 className="blog-thumbnail-title">Kde vydat knihu a neplatit za tisk</h2>
          </div>
          <div class="blog-thumbnail">
              <h2 className="blog-thumbnail-title">Jak začít psát vlastní knihu</h2>
          </div>
          <h2 className="secondary-heading">Jak prodat vlastní knihu?</h2>
          <div className="blog-thumbnail">
              <h2 className="blog-thumbnail-title">Kde prodávat</h2>
          </div>
          <div class="blog-thumbnail">
              <h2 className="blog-thumbnail-title">Jak začít psát vlastní knihu</h2>
          </div>
          </Container>
        </main>
        <footer className="footer">
          <img src={logo} className="navbar-logo ml-4"></img>
          <p className="footer-copyright">Copyright ©  2020  Powerprint & Bookla</p>
          <div class="social-links ml-4">
          <i class="fab fa-facebook-square social-icon"></i>
          <i class="fab fa-instagram social-icon"></i>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Blog;
