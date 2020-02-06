import React from 'react'
import loadingGif from '../spinner.gif';

const Spinner = () => {
    return (
        <div>
            <img src={loadingGif} alt="loading..." />
        </div>
    )
}

export default Spinner;
