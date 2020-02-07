import React from 'react'

export default function Home(props) {
    return (
        <div>
            <h1>This is the Home Page</h1>
            <h2>PS4 sale:50</h2>
            <button onClick={props.addToBasket} className="ps4Button">Add PS4 to basket</button>
        </div>
    )
}
