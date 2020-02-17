import React from 'react'

export default function Template(props) {
    return (
        <div className="template__container">
            <h4 className="template__textbox">{props.text}</h4>
            <p className="template__plussign">+</p>  
        </div>
    )
}
