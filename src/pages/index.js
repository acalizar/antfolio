import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import ProjectList from '../components/ProjectList'

export default class IndexPage extends React.Component {

  render() {

    const { data } = this.props
   // const { edges: posts , group: tags} = !data ? null : data.allMarkdownRemark
    const Wrapper = styled.div`
        .column {
            position: relative;
          .content.tile.about{
            background: linear-gradient(to bottom, #ededed, #ffffff);
            box-shadow: none;
            border: none;
            padding: 40px 20px;
            margin: 0 auto 100px;
          }
        }
        .skills{
          text-align: center;
          
          .column{
            margin-bottom: 50px;
          }
          img{
            max-width: 200px;
          }
        }
    `
    return (
      <Wrapper>
        <Layout>
          <div className="title">
            <h1 className="has-text-weight-bold is-size-2">Anthony Calizar</h1>
            <h2>Design & Development Professional</h2>
          </div>
          <div className="columns is-multiline">
            <div className="column is-three-fifths is-offset-one-fifth">
              <div className="content tile about" style={{ "textAlign": "center" , "display": "block"}}>
                <p>Hello! I am a designer and developer based in Bay Area, CA. Starting out as a passionate web and graphic designer, I have grown to love multiple disciplines – specifically around front-end development and UX design. At the end of the day, I simply just like to create. I have a strong background in web development, marketing design, and user experience. </p>
                <p><strong><a target="blank" href="https://linkedin.com/in/acalizar" >LinkedIn</a></strong></p>
              </div>
            </div>
          </div>
          <div className="columns skills">
            <div className="column is-4"><img src="/uploads/web-design-dev.svg"/><hr/><h3>HTML, CSS, JavaScript, Web Applications</h3></div>
            <div className="column is-4"><img src="/uploads/gd-branding.svg"/><hr/><h3>Graphic Design, Marketing, Branding </h3></div>
            <div className="column is-4"><img src="/uploads/ui-ux.svg"/><hr/><h3>Front-end Development, UI Design</h3></div>
          </div>
        <div className="bg-grey">
        <h2>A Few Projects</h2>
            <ProjectList data={data}/>
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
      group: PropTypes.array
    }),
  }),
}
export const pageQuery = graphql`
query IndexPage {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] },
    filter: { frontmatter: { templateKey: { eq: "project-page" } }},
    
  ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      },
    edges {
      node {
        id
        excerpt(pruneLength: 400)
        fields {
          slug
        }
        frontmatter {
          title
          description
          tags
          thumbnail
          templateKey
          color
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}

`