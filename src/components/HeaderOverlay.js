import React from 'react'
import styled from "styled-components"


const Overlay = styled.div`
    .header-bg{

    }
    .block-bg{
        position: fixed;
        transform: translateZ(0px);
        top: 0;    
        left: 0;
        right: 0;  
        z-index: -10;
        bottom: -130px;
    }
    .block-container {
        transform: skewY(-12deg);
        transform-origin: 0;    
        overflow: hidden;
        height: 80%;
        min-height: 800px;
        max-height: 1100px;
    }
    .block-row{
        display: flex;
    }
    .block-item{
        background: #224f8a;
        height: 180px;
        box-shadow: 0px 0px 100px -10px rgba(0,0,0,.5);
        opacity: 1;
        min-width: 25%;
        transform: scale(2);
    }
        
`
export default class HeaderOverlay extends React.Component {
    constructor() {
        super();
        this.state = {
            blockItems: [{  background: '#ededed', width: '33.33%' }]
        }
    }
    componentDidMount() {
        const blockItemGenerator = () => {
            let items = [];
            for (let i = 0; i < 16; i++) {
                items.push(this.randomBlock());
            }
            return items;
        }
        this.setState({ blockItems: blockItemGenerator() });
    }
    randomBlock = () => {
        let rgb = [Math.floor(Math.random() * 50) + 10, Math.floor(Math.random() * 70) + 30, Math.floor(Math.random() * 120) + 30];
        let color = "linear-gradient(to right, rgb(" + rgb.toString() + "), rgb(" + (rgb[0] * .75) + "," + (rgb[1] * .75) + ","+ (rgb[2] * .75) + "))";
        
        let size = 'calc(25% + ' + (Math.floor(Math.random() * 2500) + 200) + 'px)';
        let styles = { background: color, width: size };
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
                                </div>
                                <div className="block-row">
                                    <div className="block-item" style={this.state.blockItems[5]}></div>
                                    <div className="block-item" style={this.state.blockItems[6]}></div>
                                </div>
                                <div className="block-row">
                                    <div className="block-item" style={this.state.blockItems[7]}></div>
                                    <div className="block-item" style={this.state.blockItems[8]}></div>
                                    <div className="block-item" style={this.state.blockItems[9]}></div>
                                </div>
                                <div className="block-row">
                                    <div className="block-item" style={this.state.blockItems[10]}></div>
                                    <div className="block-item" style={this.state.blockItems[11]}></div>
                                </div>
                                <div className="block-row">
                                    <div className="block-item" style={this.state.blockItems[12]}></div>
                                    <div className="block-item" style={this.state.blockItems[13]}></div>
                                </div>
                                <div className="block-row">
                                    <div className="block-item" style={this.state.blockItems[14]}></div>
                                    <div className="block-item" style={this.state.blockItems[15]}></div>
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