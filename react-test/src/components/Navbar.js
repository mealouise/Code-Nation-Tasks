import React from 'react';

function Navbar(props) {
    return (
        <nav>
            <h1>Code Nation</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>{props.page}</li>

            </ul>
        </nav>
    )
}

export default Navbar;

