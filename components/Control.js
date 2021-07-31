import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function Control (props) {
    const [color, setColor] = useState("grey")
    
    useEffect(() => {
        const interval = setInterval(() => {setColor(randomcolor())}, 300);
        return () => clearInterval(interval);
    }, [])
    return (
        <div className="control-container">
            <h1 className="title">TEXT BEAUTIFIER</h1>
            
            <form className="form" onSubmit={props.handleSubmit}>
                <div className="font-container">
                    <label>Font Type  </label>
                    <select value={props.input.fontType} onChange={props.handleChange} name="fontType">
                            <option className="font-roboto" value="Roboto">Roboto</option>
                            <option className="font-lora" value="Lora">Lora</option>
                            <option className="font-opensans" value="Open Sans">Open Sans</option>
                            <option className="font-poppins" value="Poppins">Poppins</option>
                            <option className="font-sacramento" value="Sacramento">Sacramento</option>
                            <option className="font-ubuntu" value="Ubunto">Ubuntu</option>
                            <option className="font-hanaleifill" value="Hanalei Fill">Hanalei Fill</option>
                            <option className="font-luckiestguy" value="Luckiest Guy">Luckiest Guy</option>
                            <option className="font-montserrat" value="Montserrat">Montserrat</option>
                            <option className="font-pacifico" value="Pacifico">Pacifico</option>
                    </select>
                </div>
            
                <div className="slide-container">
                    <label>Font Size</label>
                    <input type="range" min="16" max="50" onChange={props.handleChange} name="rangeValue" value={props.input.rangeValue} className="slider" />
                </div>
                
                <div className="radio-container">
                    <p>Color Options</p>
                    <label>
                        <input 
                            type="radio" 
                            name="colorProperties"
                            value="textColor"
                            className="radio"
                            id="textColor"
                            checked={props.input.colorProperties === "textColor"}
                            onChange={props.handleChange}
                        /> text color
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="colorProperties"
                            value="outlineColor"
                            className="radio"
                            checked={props.input.colorProperties === "outlineColor"}
                            onChange={props.handleChange}
                        /> outline color
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="colorProperties"
                            value="backgroundColor"
                            className="radio"
                            checked={props.input.colorProperties === "backgroundColor"}
                            onChange={props.handleChange}
                        /> background color
                    </label>
                </div>
                
                <div onClick={props.handleClick} id="container" className="color-container">
                    <div id="#FF3F00" className="color"><div className="color-red circle"></div></div>
                    <div id="#FB9300" className="color"><div className="color-orange circle"></div></div>
                    <div id="#FFE268" className="color"><div className="color-yellow circle"></div></div>
                    <div id="#81B214" className="color"><div className="color-green circle"></div></div>
                    <div id="#00C1D4" className="color"><div className="color-blue circle"></div></div>
                    <div id="#0F044C" className="color"><div className="color-navy circle"></div></div>
                    <div id="#52006A" className="color"><div className="color-purple circle"></div></div>
                    <div id="white" className="color"><div className="color-white circle"></div></div>
                    <div id="black" className="color"><div className="color-black circle"></div></div>
                    <div id="random" className="color"><div className="color-random circle"style={{backgroundColor: color}}></div></div>
                </div>
                
                <input type="submit" className="btn-generate" value="Generate!"/>
                    
            </form>
        </div>
    )
}

export default Control