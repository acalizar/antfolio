import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../uploads/favicon.ico';
import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet link={[
      { rel: 'shortcut icon', type: 'image/ico', href: `${favicon}` }
  ]} title="Anthony Calizar" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
