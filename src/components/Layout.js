import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../uploads/favicon.ico'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'
import styled from "styled-components"
import HeaderOverlay from '../components/HeaderOverlay'

const Wrapper = styled.div`
  &{
    overflow: hidden;
    position: relative;    
    padding-bottom: 250px;
  }
`

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet link={[
      { rel: 'shortcut icon', type: 'image/ico', href: `${favicon}` }
    ]} title="Anthony Calizar" />
    <Navbar />
    <HeaderOverlay />
      <div className="main">
        <section className="section">
          <div className="container">
            <div className="content fade-in-element">
              {children}
            </div>
          </div>
        </section>
      </div>
    <Footer />
  </Wrapper>
)

export default TemplateWrapper
