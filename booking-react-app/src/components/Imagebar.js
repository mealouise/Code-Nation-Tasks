import React from 'react';


export default function Imagebar(props) {
    return (
        <div className="wrapper">
            <img src={props.img}/>
            {/* <img src={props.img}/> */}
            {/* <div className="bluestars">
            <img src={props.img}/>
            </div> */}
            <p>{props.text}</p>
            <img className="profile" src={props.img}/>
        
        </div>
    )
}
