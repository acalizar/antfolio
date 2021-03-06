import React from 'react'
import { Link } from 'gatsby'
import logo from '../uploads/icon.png'
import styled from 'styled-components'

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
    max-width: 40px;
    max-height: 40px;
    width: 40px;
    height: 40px;
    border: 2px solid rgba(255,255,255,.25);
    border-radius: 100px;
    transition: .3s ease-in-out all;
    margin-right: 12px;
  }
  .navbar-item:hover img{
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
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            <figure className="image">
              <img src={logo} alt="Ant" className="logo" />
            </figure>
            Main
        </Link>
          <Link className="navbar-item" to="/contact">
            Contact
        </Link>
        </div>
      </div>
    </nav>
  </Nav>
)

export default Navbar
