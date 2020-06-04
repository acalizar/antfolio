import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { CSSTransition }	from 'react-transition-group';

const Fade = ({ children, ...props}) => (
	<CSSTransition {...props} timeout={1000} classNames="fade" unmountOnExit>
		{children}
	</CSSTransition>
);

export default class ProjectList extends React.Component {

	state = {
		activeTag: "all",
		data: this.props.data.allMarkdownRemark.edges,
		tags: this.props.data.allMarkdownRemark.group,
	}

	changeTag = tag => e => {
		this.setState({ "activeTag": tag });
	}

	render() {
		const tags = this.state.tags;

		const ListWrapper = styled.div`
		& {
			width: 100%;
		}
		.column {
			position: relative;
			transition: ease-in-out all .5s;
		.content.tile {
			height: 100%;
			border-radius: 0px 0px 5px 5px;
			background-color: #ffffff;
			text-align: center;
			position: relative;
			overflow: hidden;
			min-height: 350px;
			display: flex;
			flex-direction: column;
			-moz-box-shadow: 0px 0px 0px 0px #000000, 0px 3px 10px -5px #000000;
			-webkit-box-shadow: 0px 0px 0px 0px #000000, 0px 3px 10px -5px #000000;
			box-shadow: 0px 0px 0px 0px #000000, 0px 3px 10px -5px #000000;
			padding: 30px 20px 20px;

			:hover img {
				transform: scale(1.1);
			}

			p {
				margin:0;
			}

			p a {
				color: #363636;
			}
			p a.button {
				color: #ffffff;
			}
			.cta-container {
				margin-top: auto;
			}
		}
		.content.tile.about {
			background: linear-gradient(to bottom, #ededed, #ffffff);
			box-shadow: none;
			border: none;
			padding: 40px 20px;
			margin: 0 auto;
		}
		.content.tile h2 {
			margin: -10px -20px 0px;
			padding: 20px 10px;

			a {
				width: 100%;
				display: block;
			}
		}

		.thumbnail {
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 300px;
			margin-bottom: 20px;
			overflow: hidden;

				img {
					object-fit: cover;
					height: 300px;
					transition: ease-in-out all .3s;
				}
			}
			.tags > div {
				cursor: pointer;
				margin-right: 15px;
			}
		}

		.fade-enter {
			opacity: 0.01;
			transform: translate(-40px, 0);
		}

		.fade-enter.fade-enter-active {
			opacity: 1;
			transform: translate(0, 0);
			transition: all 500ms ease-in;
		}

		.fade-exit {
			opacity: 1;
			transform: translate(0, 0)
		}

		.fade-exit.fade-exit-active {
			opacity: 0.01;
			transform: translate(40px, 0);
			transition: all 500ms ease-in;
		}
	`
		const items = this.state.data.map(( {node: post}) => (
			<Fade key={post.id} in={post.frontmatter.tags.indexOf(this.state.activeTag) > -1 || this.state.activeTag === "all"} >
				<div className="column is-4">
					<div className="content tile" style={{"borderTop": "8px solid" + post.frontmatter.color}}>
					<Link to={post.fields.slug}><div className="thumbnail"><img src={post.frontmatter.thumbnail} alt={post.frontmatter.title} /></div></Link>
					<h2><Link to={post.fields.slug} style={{ "fontSize": "24px" }}>{post.frontmatter.title}</Link></h2>
					<p><Link to={post.fields.slug} style={{ "fontSize": "24px" }}>{post.frontmatter.description}</Link></p>
					<div class="cta-container">
						<hr/>
						<p><Link className="button is-link" to={post.fields.slug}>View →</Link></p>
					</div>
					</div>
				</div>
			</Fade>
		));
		return (
			<ListWrapper>
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
				<div className="columns is-multiline">
					{items}
				</div>
			</ListWrapper>
		)
	}
}
