import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import HeaderOverlay from '../../components/HeaderOverlay'
import styled from "styled-components"

const Wrapper = styled.div`
  & {
      .column{
        position: relative;
        height: 650px;
        padding: 50px;
      }
      .column::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: linear-gradient(to bottom,#f7f7f7 60%,rgba(255,255,255,0) );
    }
  }
  a{
    position: relative;
  }
`
const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
    <Wrapper>
      <Layout>
        <Helmet title={`Tags | ${title}`} />
        <div className="title">
          <h1 className="has-text-weight-bold is-size-2">Tags</h1>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1" style={{ marginTop: '50px' }}>
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
