import React from "react";
import Layout from '../../components/Layout'
import HeaderOverlay from '../../components/HeaderOverlay'
import styled from "styled-components"

const Wrapper = styled.div`
  &{

  }
  p{
    text-align: center;
  }
`

export default () => (
  <Wrapper>
    <Layout>
          <section className="section">
            <div className="container">
              <div className="content">
                <HeaderOverlay title="Thank You!" />  
              </div>
              <div className="content">
                  <p>I will reach out to you as soon as possible</p>
              </div>
            </div>
            </section>
    </Layout>
  </Wrapper>
);