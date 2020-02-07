import React from 'react';
import news1 from '../images/news1.jpg';
import news2 from '../images/news2.jpg';
import news3 from '../images/news3.jpg';
import news4 from '../images/news4.jpg';
import news5 from '../images/news5.jpg';
import news6 from '../images/news6.jpg';



export default function Imagecard(props) {
    return (
        <div className="wrapper">
        <img className="headlineImage" src={props.img}/>
        <div className="text">
        <h3>{props.headline}</h3>
        <h4 className="section1">{props.section}</h4>
        </div> 
        </div>
    )
}
