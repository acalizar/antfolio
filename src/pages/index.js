import React from 'react'
import PropTypes from 'prop-types'
import HeaderOverlay from '../components/HeaderOverlay'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const Wrapper = styled.div`
        & .content .title{
          text-align:center;
        }
        .column > .content {
          border: none;
          text-align: center;
          position: relative;
          overflow: hidden;
          min-height: 350px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0px 0px 50px -25px #000000;
          border-radius: 10px;
          border: 1px solid #ededed;
        }
        .thumbnail{
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: -1;
          background-size: cover;
          transform: scale(1.2)
        }
        .thumbnail::after{
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(255,255,255,.90);
        }
    `
    return (
      <Layout>
        <Wrapper>
          <div className="fade-in-element">
            <div className="content">
              <HeaderOverlay title={"Anthony Calizar"} subtitle={"Design & Development Professional"} />
            </div>
            <section className="section">
              <div className="container">
                <div className="content">
                  <div className="main">
                    <div className="psuedo-bg"></div>
                    <div className="columns is-multiline">
                      {posts
                        .map(({ node: post }, index) => (
                          <div className="column is-4" key={index}>
                            <div className="content" style={{ padding: '2em 3em' }} key={post.id}>
                            <div className="thumbnail" style={{ 'backgroundImage' : 'url(' + post.frontmatter.thumbnail + ')'  }}></div>
                              <h2>
                                <Link to={post.fields.slug}>
                                  {post.frontmatter.title}
                                </Link>
                              </h2>
                              <p>
                                {post.frontmatter.description}
                              </p>
                              <p>
                                <Link className="button" to={post.fields.slug}>View →</Link>
                              </p>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Wrapper>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "project-page" } }}
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
            description
            thumbnail
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
