import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../uploads/favicon.ico'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet link={[
      { rel: 'shortcut icon', type: 'image/ico', href: `${favicon}` }
    ]} title="Anthony Calizar" />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
