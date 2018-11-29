import React from "react";
import Layout from '../../components/Layout'
import HeaderOverlay from '../../components/HeaderOverlay'
import styled from "styled-components"

const Wrapper = styled.div`
  .main section  {

    min-height: 500px;
   
  }
  p{
    text-align: center;
  }
`

export default () => (
  <Wrapper>
    <Layout>
      <div className="fade-in-element">
        <HeaderOverlay title="Thank You!" subtitle="I will reach out to you as soon as possible" />
        <div className="main">
          <section className="section">
            <div className="container">
              <div className="content">
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  </Wrapper>
);