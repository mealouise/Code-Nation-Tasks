import React from 'react';
import fivestars from '../images/fivestars.png';


export default function Imagebar(props) {
    return (
        <div className="wrapper">
            <img className="hotel" src={props.img}/>
            <img className="fivestars" src={fivestars} alt="pic"/>
            <p>{props.text}</p>
        </div>
        
    )
   
}
