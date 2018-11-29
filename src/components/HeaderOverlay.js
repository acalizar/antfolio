import React from 'react'
import styled from "styled-components"


const Overlay = styled.div`
    .header-bg{

    }
    .block-bg{
        position: fixed;
        top: -160px;    
        left: 0;
        right: 0;  
        z-index: -10;
    }
    .block-container {
        background-color: #333333;
        transform: skewY(-12deg);
        transform-origin: 0;    
        overflow: hidden;
        height: 80%;
        min-height: 800px;
        max-height: 1100px;
    }
    .block-row{
        display: flex;
        width: 130%;
    }
    .block-item{
        height: 180px;
        box-shadow: 0px 0px 100px -10px rgba(0,0,0,.5);
        opacity: 1;
        transform: translateZ(-2px) scale(1.01);
    }
        
`
export default class HeaderOverlay extends React.Component {

    state = {
        blockItems: [{  background: '#224f8a', width: '33.33%' }]
    }
    
    componentDidMount() {
        const blockItemGenerator = () => {
            let items = [];
            for (let i = 0; i < 9; i++) {
                items.push(this.randomBlock());
            }
            return items;
        }
        this.setState({ blockItems: blockItemGenerator() });
    }
    randomBlock = () => {
        let rgb = [Math.round(Math.floor(Math.random() * 50) + 10), Math.round(Math.floor(Math.random() * 70) + 30), Math.round(Math.floor(Math.random() * 120) + 30)];
        let color = "linear-gradient(to right, rgb(" + rgb.toString() + "), rgb(" + Math.round((rgb[0] * .75)) + "," + Math.round((rgb[1] * .75)) + ","+ Math.round((rgb[2] * .75)) + "))";
        let size = 'calc(20% + ' + Math.round((Math.floor(Math.random() * 2500))) + 'px)';
        let styles = { 'background': color, width: size };
        return styles; 
    }
    render() {  
        return (
            <Overlay>
                <div className="content">
                    <div className="header-bg">
                        <div className="block-bg">
                            <div className="block-container">
                            <div className="block-row">
                                    <div className="block-item" style={this.state.blockItems[0]}></div>
                                    <div className="block-item" style={this.state.blockItems[1]}></div>
                                    <div className="block-item" style={this.state.blockItems[2]}></div>
                                </div>
                                <div className="block-row">
                                    <div className="block-item" style={this.state.blockItems[3]}></div>
                                    <div className="block-item" style={this.state.blockItems[4]}></div>
                                    <div className="block-item" style={this.state.blockItems[5]}></div>
                                <div className="block-row">
                                    <div className="block-item" style={this.state.blockItems[6]}></div>
                                    <div className="block-item" style={this.state.blockItems[7]}></div>
                                    <div className="block-item" style={this.state.blockItems[8]}></div>
                                </div>
                                </div>
                                <div className="block-row">
                                    <div className="block-item" style={this.state.blockItems[2]}></div>
                                    <div className="block-item" style={this.state.blockItems[0]}></div>
                                    <div className="block-item" style={this.state.blockItems[1]}></div>
                                </div>
                                <div className="block-row">
                                    <div className="block-item" style={this.state.blockItems[5]}></div>
                                    <div className="block-item" style={this.state.blockItems[3]}></div>
                                    <div className="block-item" style={this.state.blockItems[4]}></div>
                                </div>
                                <div className="block-row">
                                    <div className="block-item" style={this.state.blockItems[8]}></div>
                                    <div className="block-item" style={this.state.blockItems[6]}></div>
                                    <div className="block-item" style={this.state.blockItems[7]}></div>
                                </div>
                                <div className="block-row">
                                    <div className="block-item" style={this.state.blockItems[1]}></div>
                                    <div className="block-item" style={this.state.blockItems[2]}></div>
                                    <div className="block-item" style={this.state.blockItems[0]}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="title">
                            <h1 className="has-text-weight-bold is-size-2">{this.props.title}</h1>
                            <h3>{this.props.subtitle}</h3>
                        </div>
                    </div>
                </div>
            </Overlay>
        )
    }
}

/*

                                {  this.state.blockItems.map((blockItem, index) => {
                                    console.log(blockItem)
                                       return <div className="block-row">
                                           <div className="block-item" style={blockItem}></div>
                                        </div>
                                })  }

                                */