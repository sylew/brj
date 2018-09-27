import React from 'react'
import Rainbow from '../HOC/Rainbow';

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Welcome to BrocChain</p>
        </div>
    )
}

export default Rainbow(About);