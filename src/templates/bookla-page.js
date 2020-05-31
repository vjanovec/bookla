import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import { Container, Row, Col } from "react-bootstrap";

export const BooklaPageTemplate = ({
  image,
  title,
  heading,
  section1,
  section2,
  section3
}) => (
  <section>
            <Container fluid>
              <Row>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <div className="main-info">
                    <h1 className="main-heading">
                      {title}<br></br>
                      {/* <button className="start-button"></button> */}
                      
                      <button className="start-button">
                    <Link to="/blog" className="button-link">Chci zjistit jak</Link>
                    </button>
                    </h1>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} className="mt-auto mb-auto justify-content-center d-flex">
                  <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} className="main-illustration"></img>
                </Col>
              </Row>
              <h3 className="secondary-heading mb-5">{heading}</h3>
              <Row>
              <Col xl={6} lg={6} md={6} sm={12} className="order-sm-1 order-xs-1 order-lg-12 mt-auto mb-auto justify-content-center d-flex">
                  <div className="article-thumbnail">
                    <h1 className="secondary-heading">
                      {section1.title}
                    </h1>
                    <h3 className="article-description">
                      {section1.description}
                    </h3>
                    <button className="article-button">
                    <Link to="/blog" className="button-link">Chci zjistit jak</Link>
                    </button>
                    
                  </div>
                </Col>
              <Col xl={6} lg={6} md={6} sm={12} className="order-sm-12 order-xs-12 order-lg-1 mt-auto mb-auto justify-content-center d-flex">
                  <img src={!!section1.image.childImageSharp ? section1.image.childImageSharp.fluid.src : section1.image} className="main-illustration"></img>
                </Col>

              </Row>
              <Row>
              <Col xl={6} lg={6} md={6} sm={12} className="mt-auto mb-auto justify-content-center d-flex">
                  <div className="article-thumbnail">
                    <h1 className="secondary-heading">
                      {section2.title}
                      
                    </h1>
                    <h3 className="article-description">
                    {section2.description}
                    </h3>
                    <button className="article-button">
                    <Link to="/blog" className="button-link">Chci zjistit jak</Link>
                    </button>
                  </div>
                </Col>
              <Col xl={6} lg={6} md={6} sm={12} className="mt-auto mb-auto justify-content-center d-flex">
                  <img src={!!section2.image.childImageSharp ? section2.image.childImageSharp.fluid.src : section2.image} className="main-illustration"></img>
              </Col>
              </Row>
              <Row>
              <Col xl={6} lg={6} md={6} sm={12} className="order-sm-1 order-xs-1 order-md-1 order-lg-12 mt-auto mb-auto justify-content-center d-flex">
                  <div className="article-thumbnail">
                    <h1 className="secondary-heading">
                      {section3.title}
                    </h1>
                    <h3 className="article-description">
                      {section3.description}
                    </h3>
                    <button className="article-button">
                    <Link to="/blog" className="button-link">Chci zjistit jak</Link>
                    </button>
                  </div>
                </Col>
              <Col xl={6} lg={6} md={6} sm={12} className="order-sm-12 order-xs-12 order-md-12 order-lg-1 mt-auto mb-auto justify-content-center d-flex">
                  <img src={!!section3.image.childImageSharp ? section3.image.childImageSharp.fluid.src : section3.image} className="main-illustration"></img>
              </Col>
              
              </Row>
              
            </Container>

          </section>
)

BooklaPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  section1: PropTypes.object,
  section2: PropTypes.object,
  section3: PropTypes.object,

}

const BooklaPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <BooklaPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        section1={frontmatter.section1}
        section2={frontmatter.section2}
        section3={frontmatter.section3}
      />
    </Layout>
  )
}

BooklaPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BooklaPage                           

export const pageQuery = graphql`
  query booklaPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "bookla-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 600, quality: 75) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        section1 {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
          description
        }
        section2 {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
          description
        }
        section3 {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
          description
        }
      }
    }
  }
`
