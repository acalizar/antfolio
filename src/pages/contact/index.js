import React from "react"
import { navigateTo } from "gatsby-link"
import Layout from '../../components/Layout'
import HeaderOverlay from '../../components/HeaderOverlay'
import styled from "styled-components"

const Wapper = styled.div`
    form{
      max-width: 650px; 
      margin: 0 auto;
      padding: 20px;
      background: linear-gradient(to bottom, #ededed, #ffffff);
    }
    input, textarea{
      transition: ease-in-out all .1s;
      padding-left:10px;
    }
    input:focus, textarea:focus{
      padding-left: 13px;
    }
    .submit{
      text-align: right;
    }
`
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}


export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false, currentScrollHeight: 0 };

  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };
  /*
  componentDidMount () {      
    window.onscroll =()=>{
     const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
     if (this.state.currentScrollHeight !== newScrollHeight){
         this.setState({currentScrollHeight: newScrollHeight})
     }
   }
  } 
  const opacity = Math.min(100 / this.state.currentScrollHeight  , 1);*/
  render() {
    return (
      <Wapper>
        <Layout>
          <div className="fade-in-element">
            <HeaderOverlay title={"Let's Chat"} />
            <div className="main">
              <section className="section">
                <div className="container">
                  <div className="content">
                    <form
                      name="contact"
                      method="post"
                      action="/contact/thanks/"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={this.handleSubmit}
                    >
                      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                      <input type="hidden" name="form-name" value="contact" />
                      <div hidden>
                        <label>
                          Don’t fill this out:{" "}
                          <input name="bot-field" onChange={this.handleChange} />
                        </label>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={"name"} >Your name</label>
                        <div className="control">
                          <input className="input" type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={"email"}>Email</label>
                        <div className="control">
                          <input className="input" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={"message"}>Message</label>
                        <div className="control">
                          <textarea className="textarea" name={"message"} onChange={this.handleChange} id={"email"} required={true} />
                        </div>
                      </div>
                      <div className="field submit" >
                        <button className="button is-link" type="submit">Send</button>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Layout>
      </Wapper>
    );
  }
}



