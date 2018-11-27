import React from 'react'
import styled from "styled-components"

const randomBlock = () => {
    let rgb = [Math.floor(Math.random() * 50) + 10, Math.floor(Math.random() * 70) + 30, Math.floor(Math.random() * 120) + 30];
    let color = 'linear-gradient(to right, rgb(' + rgb.toString() + '), rgb(' + (rgb[0] * .75) + ',' + (rgb[1] * .75) + ',' + (rgb[2] * .75) + '))';
    let size = 'calc(25% + ' + (Math.floor(Math.random() * 2500) + 200) + 'px)';
    let styles = { background: color, width: size };
    return styles;
}
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
const HeaderOverlay = ({ title, subtitle }) => (
    <Overlay>
        <div className="content">
            <div className="header-bg">
                <div className="block-bg">
                    <div className="block-container">
                        <div className="block-row">
                            <div className="block-item" style={randomBlock()}></div>
                            <div className="block-item" style={randomBlock()}></div>
                        </div>
                        <div className="block-row">
                            <div className="block-item" style={randomBlock()}></div>
                            <div className="block-item" style={randomBlock()}></div>
                        </div>
                        <div className="block-row">
                            <div className="block-item" style={randomBlock()}></div>
                            <div className="block-item" style={randomBlock()}></div>
                        </div>
                        <div className="block-row">
                            <div className="block-item" style={randomBlock()}></div>
                            <div className="block-item" style={randomBlock()}></div>
                            <div className="block-item" style={randomBlock()}></div>
                        </div>
                        <div className="block-row">
                            <div className="block-item" style={randomBlock()}></div>
                            <div className="block-item" style={randomBlock()}></div>
                        </div>
                        <div className="block-row">
                            <div className="block-item" style={randomBlock()}></div>
                            <div className="block-item" style={randomBlock()}></div>
                        </div>
                        <div className="block-row">
                            <div className="block-item" style={randomBlock()}></div>
                            <div className="block-item" style={randomBlock()}></div>
                            <div className="block-item" style={randomBlock()}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="title">
                    <h1 className="has-text-weight-bold is-size-2">{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </div>
        </div>
    </Overlay>
)

export default HeaderOverlay
