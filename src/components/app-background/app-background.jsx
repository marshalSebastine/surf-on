import './app-background.styles.css';
import React from 'react';
import WaveCirle from '../wave-circle/wave-circle.jsx';

const AppBackGround = () => {

    const positioncircle = {
        justifySelf: "end"
    }
    return(
    <div className="cover-bg">
            <h1 id='title-text'>The <span className='waved-text-bg'>Ocean</span> is for EveryOne.</h1>
            <h1>The <span className='waved-text'>Ocean</span> is for EveryOne.</h1>
            <WaveCirle style={positioncircle}/>
    </div>)
}

export default AppBackGround