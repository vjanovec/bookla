import logo from "/img/logo_bookla.png";
import "./style.scss";
import React from 'react';
import { Container } from "react-bootstrap";
import { Link } from "gatsby"; 

const Footer = () => {
    return(
        <footer className="footer">
        <Link to='/'><img src={logo} className="navbar-logo ml-4"></img></Link>
        <p className="footer-copyright">Copyright ©  2020  Powerprint & Bookla</p>
        <div class="social-links ml-sm-1 ml-xs-1 ml-md-4">
          <Container fluid>
          <a href="https://www.facebook.com/bookla.cz/?__tn__=kC-R&eid=ARBtgHI9Rw2UwvMoVag5_Xz0lgGDo0VDH243AO0IBV_t_WrXA8H_1UYnQc5hFVqGsxZlrrAJ71ttqzlg&hc_ref=ARRSYdViS3XaMnec6JqXMZqAxN5vwDe80sIlKEp2t7buupnCkjXP-X8rJEDgdI6hb3Y&fref=nf"><i class="fab fa-facebook-square social-icon"></i></a>
          <a href=""><i class="fab fa-instagram social-icon"></i></a>
          </Container>
        
        </div>
      </footer>
    )
}

export default Footer;