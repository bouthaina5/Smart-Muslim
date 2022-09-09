import React from "react";
//import { useState } from "react";
import './stat.css';
const Stat = (props)=>{
    return(    
        <div className="container">  
        <div className="circle">
            <p className="stats">{props.percentage} %</p>
        </div>
        <p className="label">{props.title}</p>
        </div> 
    )
}

export default Stat;