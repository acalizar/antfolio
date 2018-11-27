import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import HeaderOverlay from '../../components/HeaderOverlay'
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
const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
    <Wrapper>
      <Layout>
        <div className="fade-in-elemnt">
          <HeaderOverlay title={"Tags"} />
          <div className="main">
            <section className="section">
              <Helmet title={`Tags | ${title}`} />
              <div className="container content">
                <div className="columns">
                  <div
                    className="column is-10 is-offset-1"
                    style={{ marginTop: '50px' }}
                  >
                    <h1 className="is-size-2 is-bold-light">Tags</h1>
                    <ul className="taglist">
                      {group.map(tag => (
                        <li key={tag.fieldValue}>
                          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                            {tag.fieldValue} ({tag.totalCount})
                    </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </Wrapper>
  )

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
