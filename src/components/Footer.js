import logo from "./logo_bookla.png";
import "./style.scss";
import React from 'react';
import { Container } from "react-bootstrap";

const Footer = () => {
    return(
        <footer className="footer">
        <img src={logo} className="navbar-logo ml-4"></img>
        <p className="footer-copyright">Copyright ©  2020  Powerprint & Bookla</p>
        <div class="social-links ml-sm-1 ml-xs-1 ml-md-4">
          <Container fluid>
          <i class="fab fa-facebook-square social-icon"></i>
          <i class="fab fa-instagram social-icon"></i>
          </Container>
        
        </div>
      </footer>
    )
}

export default Footer;