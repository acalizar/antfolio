import React from 'react'
import { Link } from 'gatsby'
import github from '../uploads/github-icon.svg'
import logo from '../uploads/icon.png'
import styled from "styled-components"

const Nav = styled.div`
  .logo {
    width: 1.75em;
    height: 1.75em;
  }
`

const Navbar = () => (
  <Nav>
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img src={logo} alt="Ant" className="logo" />
            </figure>
          </Link>
        </div>
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Work
        </Link>
          <Link className="navbar-item" to="/about">
            About
        </Link>
          <Link className="navbar-item" to="/products">
            Products
        </Link>
          <Link className="navbar-item" to="/contact">
            Contact
        </Link>
        </div>
        <div className="navbar-end">
          <a
            className="navbar-item"
            href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={github} alt="Github" />
            </span>
          </a>
        </div>
      </div>
    </nav>
  </Nav>
)

export default Navbar
