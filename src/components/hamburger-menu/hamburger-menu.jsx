import React, {useState} from 'react';
import './hamburger-menu.styles.css';

const HamburgerMenu = () => {
    const [isClicked,setClicked] = useState(false);
    const transformToCross = () => {
        setClicked(!isClicked)
    }

    return(<div role={"button"} tabIndex={0}  onKeyDown={transformToCross} onClick = {transformToCross} className='hamburger-shell'>
        <div className={`hamburger-top ${isClicked ? 'rotate ': ''}`}></div>
        <div className={`hamburger-middle ${isClicked ? 'become-circle': ''}`}></div>
        <div className={`hamburger-bottom ${isClicked ? 'rotate-back': ''}`}></div>
    </div>)
}

export default HamburgerMenu