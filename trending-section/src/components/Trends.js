import React from 'react'

export default function Trends(props) {
    return (
        <div className="wrapper">
            <div className="trendingContainer">
                <h4 className="trendingCountry">{props.country}</h4>
                <h4 className="arrowdown">&#8964;</h4>
            </div>
            <h4>{props.hashtag}</h4>
            <h4 className="tweetNumber">{props.tweetnumber}</h4>
        </div>
        
    )
}
