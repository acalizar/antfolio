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
    .full-width-container{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 -50vw;
        transform-origin: 0;
        transform: skewY(-12deg) translateZ(-5px);
        overflow: hidden;
        min-width: 800px;
        min-height: 800px;
        height: 100vh;
        z-index: -10;
        overflow-x: hidden;
        overflow-y: hidden;
    }
    .block-container {
        position: absolute;
        top: 0; bottom: 0; left: 0; right: 0;
        background-color: #244250;
    }
    .block-row, .block-row, .block-row{
        display: flex;
    }
    .block-item{
        background: #224f8a;
        height: 175px;
        box-shadow: 0px 0px 100px -10px rgba(0,0,0,.5);
        opacity: 1;
        min-width: 12%;
        transform:translateZ(1px);
        transition: ease-in-out all 3s;
    }
`
const HeaderOverlay = ({title, subtitle}) => (
    <Overlay>
            <div className="full-width-container">
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
        <div className="container">
            <div className="title">
                <h1 className="has-text-weight-bold is-size-2">{title}</h1>
                <h3>{subtitle}</h3>
            </div>
        </div>
    </Overlay>
)

export default HeaderOverlay
