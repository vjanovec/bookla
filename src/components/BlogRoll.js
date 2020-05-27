import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import { Container } from "react-bootstrap";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      // <div className="columns is-multiline">
      //   <main className="main">
      //     <Container fluid>
      //       <h1 className="secondary-heading">Jak napsat knihu?</h1>
      //       <div class="blog-thumbnail">
      //         <h2 className="blog-thumbnail-title">
      //           Jak začít psát vlastní knihu
      //         </h2>
      //       </div>
      //       <div class="blog-thumbnail">
      //         <h2 className="blog-thumbnail-title">
      //           Jak začít psát vlastní knihu
      //         </h2>
      //       </div>
      //       <h2 className="secondary-heading">Jak vydat vlastní knihu?</h2>
      //       <div class="blog-thumbnail">
      //         <h2 className="blog-thumbnail-title">
      //           Kde vydat knihu a neplatit za tisk
      //         </h2>
      //       </div>
      //       <div class="blog-thumbnail">
      //         <h2 className="blog-thumbnail-title">
      //           Jak začít psát vlastní knihu
      //         </h2>
      //       </div>
      //       <h2 className="secondary-heading">Jak prodat vlastní knihu?</h2>
      //       <div className="blog-thumbnail">
      //         <h2 className="blog-thumbnail-title">Kde prodávat</h2>
      //       </div>
      //       <div class="blog-thumbnail">
      //         <h2 className="blog-thumbnail-title">
      //           Jak začít psát vlastní knihu
      //         </h2>
      //       </div>
      //     </Container>
      //   </main>
      <Fragment>
        {posts &&
          posts.map(({ node: post }) => (
            <Link to={post.fields.slug} style={{textDecoration: 'none'}}>
            <div class="blog-thumbnail" key={post.id}>
                <h2 className="blog-thumbnail-title">
                {post.frontmatter.title}
                </h2>
              </div>
            {/* {post.frontmatter.title} */}
            </Link>
              
                // <header>
                //   {post.frontmatter.featuredimage ? (
                //     <div className="featured-thumbnail">
                //       <PreviewCompatibleImage
                //         imageInfo={{
                //           image: post.frontmatter.featuredimage,
                //           alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                //         }}
                //       />
                //     </div>
                //   ) : null}
                //   <p className="post-meta">
                //     <Link
                //       className="title has-text-primary is-size-4"
                //       to={post.fields.slug}
                //     >
                //       {post.frontmatter.title}
                //     </Link>
                //     <span> &bull; </span>
                //   </p>
                // </header>
            //     <p>
            //       {post.excerpt}
            //       <br />
            //       <br />
            //       <Link className="button" to={post.fields.slug}>
            //         Keep Reading →
            //       </Link>
            //     </p>
            //   </article>
            // </div>
          ))}
      </Fragment>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                featuredpost
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
