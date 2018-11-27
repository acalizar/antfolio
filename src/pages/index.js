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
        .column > .content.tile {
          border: none;
          text-align: center;
          position: relative;
          overflow: hidden;
          min-height: 350px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0px 0px 50px -25px #000000;
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
      <Wrapper>
        <Layout>
          <div className="fade-in-element">
            <HeaderOverlay title={"Anthony Calizar"} subtitle={"Design & Development Professional"} />
            <div className="main">
              <section className="section">
                <div className="container">
                  <div className="content">
                    <div className="columns is-multiline">
                      {posts
                        .map(({ node: post }, index) => (
                          <div className="column is-6" key={index}>
                            <div className="content tile" style={{ padding: '2em 3em' }} key={post.id}>
                              <div className="thumbnail" style={{ 'backgroundImage': 'url(' + post.frontmatter.thumbnail + ')' }}></div>
                              <h2>
                                <Link to={post.fields.slug} style={{ "fontSize": "24px" }}>
                                  {post.frontmatter.title}
                                </Link>
                              </h2>
                              <p>
                                {post.frontmatter.description}
                              </p>
                              <p>
                                <Link className="button is-link" to={post.fields.slug}>View →</Link>
                              </p>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </section>
              <br />
              <section>
                <div class="container">
                  <div class="columns">
                    <div class="column is-10 is-offset-1">
                      <div class="content"  style={{"textAlign":"center"}}>
                        <h2>About Me</h2>
                        <p>I am a well-rounded creative with a demonstrated history of delivering impactful results in a fast-paced environment. Starting as a passionate designer over 7 years ago, I have since expanded my skill set to include UI development, immersing myself in several web-based application / CMS projects. Currently, I lead and execute marketing initiatives as the Creative Services Manager including UX design, UI development, sales support, branding, and much more.</p>
                        <p><strong><a href="https://linkedin.com/in/acalizar">LinkedIn</a></strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Layout>
      </Wrapper>
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
