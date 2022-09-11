import React from "react";
//import { useState } from "react";
import './stat.css';

const Stat = (props)=>{
    const styles = {
        backgroundColor : props.percentage < 50 ? '#FF2B2B' : '#CE9400',
    }

    return(    
        <div className="container">  
        <div className="circle" style={styles}>
            <p className="stats">{props.percentage} %</p>
        </div>
        <p className="label">{props.title}</p>
        </div> 
    )
}

export default Stat;