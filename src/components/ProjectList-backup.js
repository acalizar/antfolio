import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class ProjectList extends React.Component {

  state = {
    activeTag: "all",
    data: this.props.data.allMarkdownRemark.edges,
    activeProjects: this.props.data.allMarkdownRemark.edges,
    tags: this.props.data.allMarkdownRemark.group,
  }
/*
  componentWillMount() {
    const { data } = this.props;
    const { edges: projects, group: tags } = !data ? null : data.allMarkdownRemark;
    let items = [];
    projects.map((project) => items.push( {post: project.node, id: project.node.id}  ) )
    this.setState({ "data": items });
    //this.setState({ "tags": tags });
    this.setState({"activeProjects": items})
  }

*/
  changeTag = tag => e => {
    this.setState({ "activeTag": tag });
    let newItems = this.state.data.slice();
    this.setState({"activeProjects": newItems.filter(({ node: post }) => {
      return post.frontmatter.tags.indexOf(tag) > -1 || tag === "all";
    }) })

    //this.setState({"activeProjects": []})
  }

  render() {
    const tags = this.state.tags;

    const Wrapper = styled.div`
        &{
          width: 100%;
        }
        .column {
            position: relative;
            transition: ease-in-out all .5s;
          .content.tile {
            border: none;
            text-align: center;
            position: relative;
            overflow: hidden;
            min-height: 350px;
            display: flex;
            flex-direction: column;
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
          .tags > div{
            cursor: pointer;
            margin-right: 15px;
          }
        }
.slide-appear {
    opacity: 0;
    transform: translate(-250px,0);
    transform: translate3d(-250px,0,0);
}
.slide-appear.slide-appear-active {
	opacity: 1;
	transition: opacity 1s ease;
	transform: translate(0,0);
	transform: translate3d(0,0,0);
	transition-property: transform, opacity;
	transition-duration: 300ms;
	transition-timing-function: cubic-bezier(0.175, 0.665, 0.320, 1), linear;
}
.slide-enter {
    opacity: 0;
    transform: translate(-250px,0);
    transform: translate3d(-250px,0,0);
}
.slide-enter.slide-enter-active {
	opacity: 1;
	transition: opacity 1s ease;
	transform:   translate(0,0);
	transform: translate3d(0,0,0);
	transition-property: transform, opacity;
	transition-duration: 300ms;
	transition-timing-function: cubic-bezier(0.175, 0.665, 0.320, 1), linear;
}
.slide-leave {
	opacity: 1;
	transform:   translate(0,0,0);
	transform: translate3d(0,0,0);
  transition-property: transform, opacity;
	transition-duration: 300ms;
	transition-timing-function: cubic-bezier(0.175, 0.665, 0.320, 1), linear;
}
.slide-leave.slide-leave-active {
	opacity: 0;
	transform:   translate(250px,0);
	transform: translate3d(250px,0,0);
}

    `
    //console.log(this.state.activeProjects)
    const items = this.state.activeProjects.map(( {node: post}) => (
      <div key={post.id} className="column is-4">
        <div className="content tile">
          <h2><Link to={post.fields.slug} style={{ "fontSize": "24px" }}>{post.frontmatter.title}</Link></h2>
          <Link to={post.fields.slug}><div className="thumbnail"><img src={post.frontmatter.thumbnail} alt={post.frontmatter.title} /></div></Link>
          <p><Link className="button is-link" to={post.fields.slug}>View →</Link></p>
        </div>
      </div>
    ));
    console.log(items);
    return (
      <Wrapper>
        <div className="columns">
          <div className="column is-12">
            <div className="tags">
              <div onClick={this.changeTag("all")} style={{ fontWeight: this.state.activeTag === "all" ? "bold" : "normal" }}>all</div>
              {tags.map((tag, i) => (
                <div onClick={this.changeTag(tag.fieldValue, i)} key={tag.fieldValue} style={{ fontWeight: this.state.activeTag === tag.fieldValue ? "bold" : "normal" }}>{tag.fieldValue}</div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <ReactCSSTransitionGroup component="div" className="columns is-multiline"
            transitionName="slide"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={true}
            transitionEnterTimeout={500}
            transitionLeave={true}
            transitionLeaveTimeout={500}>
            {items.children}
          </ReactCSSTransitionGroup>
        </div>
      </Wrapper>
    )
  }
}
