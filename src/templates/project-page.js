import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import HeaderOverlay from '../components/HeaderOverlay'
import styled from 'styled-components'

const Post = styled.div`
  .main > section > .content{
        padding: 0px 40px 40px;
  }
  img {
    box-shadow: none !important;
    max-width:650px;
    height: auto !important;
    position: unset !important;
  }
  .gatsby-resp-image-background-image{
    background-image: none !important;
    padding-bottom: 0 !important;
    text-align: center;
  }
`
const Wrapper = styled.div`
`

export const ProjectPageTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  return (
    <Wrapper>

      {helmet || ''}
      <div className="title">
        <h1 className="has-text-weight-bold is-size-2">{title}</h1>
        <h3>{description}</h3>
      </div>
      <div className="columns">
        <div className="column is-12">
          <PostContent content={content} />
          <Link to={`/`}><p style={{ textAlign: "center" }}>Back</p></Link>




        </div>
      </div>
    </Wrapper>
  )
}

/* 
//Add this right after Postcontent
{tags && tags.length ? (
  <div style={{ marginTop: `4rem` }}>
    <h4>Tags</h4>
    <ul className="taglist">
      {tags.map(tag => (
        <li key={tag + `tag`}>
          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
        </li>
      ))}
    </ul>
  </div>
) : null}
*/

ProjectPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const ProjectPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Post>
      <Layout>
        <ProjectPageTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          helmet={
            <Helmet titleTemplate="%s | Project">
              <title>{`${post.frontmatter.title}`}</title>
              <meta name="description" content={`${post.frontmatter.description}`} />
            </Helmet>
          }
          // tags={post.frontmatter.tags}
          title={post.frontmatter.title}
        />
      </Layout>
    </Post>
  )
}

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProjectPage

export const pageQuery = graphql`
  query ProjectPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        thumbnail
        tags
      }
    }
  }
`
