import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import {selectWindowWidth} from '../../store/reducers/windowproperties/windowproperties.selector';
import './bg-title-desktop.styles.css';
import WaveCirle from '../wave-circle/wave-circle.jsx';

const BackGroundTitleDesktop = () => {

    function getResponsiveStyle(){
        const width = useSelector(selectWindowWidth)
        console.log(`got width as ${width}`)
        const widthoftext = (0.8 * width * 0.8608)
        const scalofheader = 5/993.05
        const headerfontsize = scalofheader*widthoftext
        const circlegoright = ((widthoftext) + 0.09*widthoftext)
        const perlenofcircle = (22/1151.2)
        const lenofcircle = perlenofcircle*width*0.8
        const styleforheader = {fontSize: `${headerfontsize}rem`}
        
        return[styleforheader,circlegoright,lenofcircle];

    }
    // eslint-disable-next-line no-unused-vars
    const [styleforheader,circlegorightpx,lenofcircle] = getResponsiveStyle();
    const positioncircle = {
        left: `${circlegorightpx}px`,
        height: `${lenofcircle}px`,
        width: `${lenofcircle}px`,
        borderRadius: `${lenofcircle}px`,
    }

    return(   
        <Fragment>
            <div className='header-container'>
                 <h1 style={styleforheader}>The <span className='waved-text-bg'>Ocean</span> is for EveryOne </h1>
                 <h1 style={styleforheader}>The <span className='waved-text'>Ocean</span> is for EveryOne </h1>
            </div> 
            <WaveCirle style={positioncircle}/>
        </Fragment> 
)
}

export default BackGroundTitleDesktop;