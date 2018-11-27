import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import HeaderOverlay from '../components/HeaderOverlay';
import styled from "styled-components"

const Wrapper = styled.div`
  .main > section > .content::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    min-height: 750px;
    background: linear-gradient(to bottom,#f7f7f7 60%,rgba(255,255,255,0) );
    z-index: -1;
  }
`


class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
      } tagged with “${tag}”`

    return (
      <Wrapper>
        <Layout>
          <div className="fade-in-elemnt">
            <HeaderOverlay title={"Tags"} />
            <div className="main">
              <section className="section">
                <Helmet title={`${tag} | ${title}`} />
                <div className="container content">
                  <div className="columns">
                    <div
                      className="column is-10 is-offset-1"
                      style={{ marginTop: '50px' }}
                    >
                      <h3 className=" is-size-4 is-bold-light">{tagHeader}</h3>
                      <ul className="taglist">{postLinks}</ul>
                      <p>
                        <Link to="/tags/">Browse all tags</Link>
                      </p>
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

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
