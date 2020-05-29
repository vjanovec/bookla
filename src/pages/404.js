import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';

const NotFoundPage = () => (
  <Layout>
    <Container fluid>
    <div className='d-flex justify-content-center flex-column mt-5' style={{textAlign: 'center'}}>
      <h3>STRÁNKA NENALEZENA</h3>
      <p>Tato adresa neexistuje. Vraťte se na <Link to='/' style={{color: '#f28e31'}}>úvodní stránku</Link></p>
      <img src="/img/samonakladatel.png" style={{maxWidth: '400px', margin: '1rem auto 1rem auto'}} alt=''></img>
    </div>
    </Container>
  </Layout>
)

export default NotFoundPage
