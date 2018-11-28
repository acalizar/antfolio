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

        .column {
            position: relative;
          .content.tile {
            border: none;
            text-align: center;
            position: relative;
            overflow: hidden;
            min-height: 350px;
            display: flex;
            flex-direction: column;
            /*justify-content: center;*/
            box-shadow: 0px 0px 50px -25px #000000;
            border: 1px solid #ededed;
            padding: 10px 20px 20px;
            :hover img{
              transform: scale(1.1);
            }
          }
          .content.tile.about{
            background: linear-gradient(to bottom, #ededed, #ffffff);
            box-shadow: none;
            border: none;
            padding: 40px 20px;
            margin: 0 auto;
          }
          .content.tile h2{
          margin: -10px -20px 20px;
          padding: 20px 10px;
          background-color: #2d70df;
            a {
              width: 100%;
              display: block;
              color: #ffffff;
            }
          }        
          .thumbnail{
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 300px;
            margin-bottom: 20px;
            overflow: hidden;
            img{
              object-fit: cover;
              height: 300px;
              transition: ease-in-out all .3s;
            }
          }
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
                      <div className="column is-three-fifths is-offset-one-fifth">
                        <div className="content tile about" style={{ "textAlign": "center" }}>
                          <p>Hello! I am a designer and developer based in the Bay Area, CA area. Starting out as a passionate web and graphic designer, I have grown to love multiple disciplines – specifically around UX design and UI development. At the end of the day, I simply just like to create. I have a strong background in marketing design, web development, and user experience.</p>
                          <p><strong><a href="https://linkedin.com/in/acalizar">LinkedIn</a></strong></p>
                        </div>
                      </div>
                      {posts
                        .map(({ node: post }, index) => (
                          <div className="column is-4" key={index}>
                            <div className="content tile" key={post.id}>
                              <h2>
                                <Link to={post.fields.slug} style={{ "fontSize": "24px" }}>
                                  {post.frontmatter.title}
                                </Link>
                              </h2>
                              <Link to={post.fields.slug}>
                                <div className="thumbnail"><img src={post.frontmatter.thumbnail} alt={post.frontmatter.title} /></div>
                              </Link>
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
