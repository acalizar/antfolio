import React from "react";
import Layout from '../components/Layout'
import styled from "styled-components"
import { Link } from 'gatsby'

const Wrapper = styled.div`
  .title  {

    min-height: 1000px;
   
    p{text-align: center}
  }
`

const NotFoundPage = () => (
  <Wrapper>
    <Layout>
      <div className="title">
        <h1 className="has-text-weight-bold is-size-2">Oops! I might have moved this page.</h1><br/>
        <p><Link className="button is-link" to={"/"}>Main →</Link>&nbsp;&nbsp;<Link className="button is-link" to={"/contact"}>Contact →</Link></p>
      </div>
    </Layout>
  </Wrapper>
)

export default NotFoundPage