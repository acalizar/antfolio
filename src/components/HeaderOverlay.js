import React from 'react'
import styled from "styled-components"


const Overlay = styled.div`
    & {  
    }
    .block-bg{
        position: fixed;
        top: -160px;    
        left: 0;
        right: 0; 
        bottom: -1000px;

        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    .block-container {
        position: relative;
        background-color: #333333;
        transform-origin: 0;    
        overflow: hidden;
        height: 80%;
        min-height: 800px;
        max-height: 1100px;
    }
    .block-row{
        display: flex;
        width: 130%;
        transform: skewY(-12deg);
    }
    .block-item{
        height: 180px;
        box-shadow: 0px 0px 100px -10px rgba(0,0,0,.5);
    }
        
`
export default class HeaderOverlay extends React.Component {

    state = {
        blockItems: [{ background: '#224f8a', width: '33.33%' }]
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
        let red = Math.floor(Math.random() * 2) == 0 ? 0 : Math.round(Math.random() * (58));
        let green = red == 0 ? Math.round(Math.random() * 107) : 0;
        let blue = green == 0 ? Math.round(Math.random()  * (107 - 67) + 67) : 67;
        let rgb = [red, green, blue];
        let color = "linear-gradient(to right, rgb(" + rgb.toString() + "), rgb(" + Math.round((rgb[0] * .7)) + "," + Math.round((rgb[1] * .7)) + "," + Math.round((rgb[2] * .7)) + "))";
        let size = 'calc(20% + ' + Math.round((Math.floor(Math.random() * 2500))) + 'px)';
        let styles = { 'background': color, width: size };
        return styles;
    }
    render() {
        return (
            <Overlay>
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
                        </div>
                        <div className="block-row">
                            <div className="block-item" style={this.state.blockItems[6]}></div>
                            <div className="block-item" style={this.state.blockItems[7]}></div>
                            <div className="block-item" style={this.state.blockItems[8]}></div>
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
            </Overlay >
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