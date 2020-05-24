import React from 'react';
import logo from "./logo_bookla.png";


const Footer = () => {
    return(
        <footer className="footer">
        <img src={logo} className="navbar-logo ml-4"></img>
        <p className="footer-copyright">Copyright ©  2020  Powerprint & Bookla</p>
        <div class="social-links ml-4">
        <i class="fab fa-facebook-square social-icon"></i>
        <i class="fab fa-instagram social-icon"></i>
        </div>
      </footer>
    )
}

export default Footer;