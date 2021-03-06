import React from "react";
import Layout from '../../components/Layout'
import styled from "styled-components"

const Wrapper = styled.div`
  .title  {

    min-height: 1000px;
   
  }
`

export default () => (
  <Wrapper>
    <Layout>
      <div className="title">
        <h1 className="has-text-weight-bold is-size-2">Thank You!</h1>
        <h2>I will reach out to you as soon as possible</h2>
      </div>
    </Layout>
  </Wrapper>
);