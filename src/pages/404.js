import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <div className='d-flex justify-content-center'>
    <div style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '3rem'}}>
      <h3>STRÁNKA NENALEZENA</h3>
      <p>Tato adresa neexistuje. Vraťte se na <Link to='/' style={{color: '#f28e31'}}>úvodní stránku</Link></p>
      <img src="/img/udiv.png" style={{maxWidth: '200px', margin: '1rem auto 1rem auto'}} alt=''></img>
    </div>
    </div>
  </Layout>
)

export default NotFoundPage
