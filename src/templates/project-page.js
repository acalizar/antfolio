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
        padding: 40px;
  }
  .main > section > .content::before {
      content: '';
      position: absolute;
      top: 0; 
      right: 0;
      left: 0;
      min-height: 1000px;
      background: linear-gradient(to bottom,#f7f7f7 60%,rgba(255,255,255,0) );
      z-index: -1;
  }
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
    <div className="fade-in-element">
      <div className="content">
        <HeaderOverlay title={title} subtitle={description} />
      </div>
      <div className="content">
        <div className="main">
          <div className="psuedo-bg"></div>
          <section className="section">
            {helmet || ''}
            <div className="container content fade-in-element">
              <div className="columns">
                <div className="column is-12">
                  <PostContent content={content} />
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
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

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
          tags={post.frontmatter.tags}
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
