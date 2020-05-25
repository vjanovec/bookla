import React from 'react';
import '../Blog.scss';
import '../App.scss';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Container, Row, Col } from "react-bootstrap";
import logo from "./logo_bookla.png";
import samonakladatel from "./samonakladatel.png";
import pisalek from './pisalek_novy.png';
import marketing from './marketing.png';
import milovnik from './milovnik-knih.png';


const LandingPage = () => {
    return(
        <Wrapper>
            <Header></Header>
            <main className="main">
          <section>
            <Container fluid>
              <Row>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <div className="main-info">
                    <h1 className="main-heading">
                      Napište a vydejte <br></br>
                      vlastní knihu<br></br>
                      <button className="start-button">Přejít na Blog</button>
                    </h1>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} >
                  <img src={samonakladatel} className="main-ilustration"></img>
                </Col>
              </Row>
              <h3 className="secondary-heading mb-5">Jak to funguje?</h3>
              <Row>
              <Col xl={6} lg={6} md={6} sm={12} className="order-sm-12 order-lg-1">
                  <img src={pisalek} className="main-ilustration"></img>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} className="order-sm-1 order-lg-12 justify-content-center d-flex">
                  <div className="article-thumbnail">
                    <h1 className="secondary-heading">
                      1. Napište
                    </h1>
                    <h3 className="article-description">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ac dolor sit amet purus malesuada congue. Mauris tincidunt sem sed arcu. Ut tempus purus at lorem. Nulla pulvinar eleifend sem. Curabitur sagittis hendrerit ante. 
                    </h3>
                    <button className="article-button">Chci zjistit jak</button>
                  </div>
                </Col>
              </Row>
              <Row>
              <Col xl={6} lg={6} md={6} sm={12} className="justify-content-center d-flex">
                  <div className="article-thumbnail">
                    <h1 className="secondary-heading">
                      2. Vydejte a neplaťte za tisk
                      
                    </h1>
                    <h3 className="article-description">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ac dolor sit amet purus malesuada congue. Mauris tincidunt sem sed arcu. Ut tempus purus at lorem. Nulla pulvinar eleifend sem. Curabitur sagittis hendrerit ante. 
                    </h3>
                    <button className="article-button">Chci zjistit jak</button>
                  </div>
                </Col>
              <Col xl={6} lg={6} md={6} sm={12}>
                  <img src={milovnik} className="main-ilustration"></img>
              </Col>
              </Row>
              <Row>
              <Col xl={6} lg={6} md={6} sm={12} className="order-sm-12 order-lg-1">
                  <img src={marketing} className="main-ilustration"></img>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} className="order-sm-1 order-lg-12 justify-content-center d-flex">
                  <div className="article-thumbnail">
                    <h1 className="secondary-heading">
                      3. Prodávejte
                    </h1>
                    <h3 className="article-description">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ac dolor sit amet purus malesuada congue. Mauris tincidunt sem sed arcu. Ut tempus purus at lorem. Nulla pulvinar eleifend sem. Curabitur sagittis hendrerit ante. 
                    </h3>
                    <button className="article-button">Chci zjistit jak</button>
                  </div>
                </Col>
              </Row>
              
            </Container>

          </section>
        </main>
            <Footer></Footer>
        </Wrapper>
    )
}
export default LandingPage;