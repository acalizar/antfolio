import React from 'react'
import { Link } from 'gatsby'
import logo from '../uploads/icon.png'
import styled from "styled-components"

const Nav = styled.div`
  & {
    position: fixed;
    width: 100%;
    z-index: 1000;
  }
  .logo {
    width: 1.75em;
    height: 1.75em;
  }
  .navbar{
    background: rgba(0,0,0,.75);
  }
  .navbar .container{
    justify-content: center;
    width: auto;
  }
  .navbar-item, .navbar-link{
    color: rgba(255,255,255,.75);
    font-size: 1.4em;
    transition: .3s ease-in-out all;
  }
  .navbar-item img {
    max-width: 30px;
    max-height: 30px;
    width: 30px;
    height: 30px;
    border: 2px solid rgba(255,255,255,.25);
    border-radius: 100px;
    transition: .3s ease-in-out all;
  }
  .navbar-item img:hover{
    border: 2px solid #ffffff;
  }
  a.navbar-item:hover, a.navbar-item.is-active, .navbar-link:hover, .navbar-link.is-active{
    color: #ffffff;
    background-color: transparent
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
            Home
        </Link>
          <Link className="navbar-item" to="/contact">
            Contact
        </Link>
          <a className="navbar-item" href="https://linkedin.com/in/acalizar" rel="noopener noreferrer" target="_blank">LinkedIn</a>
        </div>
      </div>
    </nav>
  </Nav>
)

export default Navbar
