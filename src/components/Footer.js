import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const date = new Date().getFullYear();

const Footer = styled.div`
  & {
    margin-top: 50px;
    padding: 20px 15px 50px; 
      background-color: transparent;
  }
  @media screen and (min-width: 769px){
     & {
    background-color: #ffffff;
    }
  }
  .footer-item{
    padding: 5px 10px;
    color: #333333;
  }
  .sitemap, .social-media, .copyright{
    display:flex;
    justify-content: center;
  }

`
const FooterDiv = () => (
  <Footer>
      <div className="container">
        <hr/>
        <div className="footer-start">
          <div className="sitemap">
            <Link className="footer-item" to="/">
              Work
          </Link>
            <Link className="footer-item" to="/contact">
              Contact
          </Link>
          <a className="footer-item" href="https://linkedin.com/in/acalizar" rel="noopener noreferrer" target="_blank">LinkedIn</a>
          </div>
          <div className="social-media">
          </div>
            <div className="copyright">&copy; {date} Anthony Calizar</div>
          </div>
      </div>
  </Footer>
)

export default FooterDiv
