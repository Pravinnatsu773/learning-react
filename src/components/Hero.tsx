import TextField from "./TextField";
import { useState } from "react";
import '../style/hero.css'

function Hero(){

    const [heading, setHeading] = useState("");


    return <div className='hero-section'>
        <h1>{heading}</h1>
        <TextField handleChange={(e)=>setHeading(e.target.value)} /></div>
}


export default Hero;