import React from 'react';
import profile1 from '../images/profile1.jpeg';
import profile2 from '../images/profile2.jpeg';
import profile3 from '../images/profile3.jpeg';

export default function Portfolio(props) {
    return (
        <div className="portfolioContainer">
            <img className="portfolio" src={props.img}/>
            <div className="portfolioTitle">
                <h2>{props.name}</h2>
                <h4 className="country">{props.country}</h4>
            </div>
        </div>
    )
}
