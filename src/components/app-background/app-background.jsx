import './app-background.styles.css';
import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setWindowWidth } from '../../store/reducers/windowproperties/windowproperties.reducer';
import BackGroundTitleDesktop from '../bg-title-desktop/bg-title-desktop.jsx';

const AppBackGround = () => {
    const dispatch = useDispatch()
    const updateDimensions = () => {
        const width = window.innerWidth
        dispatch(setWindowWidth(width))
      }

    useEffect(() => { 
        updateDimensions();
        window.addEventListener("resize",updateDimensions);
        return () => 
          window.removeEventListener("resize",updateDimensions);
       }, [])
    return(
    <div className="cover-bg">
        <BackGroundTitleDesktop/>
    </div>)
}

export default AppBackGround