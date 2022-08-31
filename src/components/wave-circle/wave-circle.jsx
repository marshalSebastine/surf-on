import React from 'react';
import PropTypes from 'prop-types';
import './wave-circle.style.css';

const WaveCirle = ({ style }) => {

    return(
    <div style={style} className='parent-container'>
        <div className='wave-circle'></div>
        <div className='wave-circle-bg'></div>
    </div>
    )
}
WaveCirle.propTypes = {
    style: PropTypes.objectOf(PropTypes.string)
}

export default WaveCirle;