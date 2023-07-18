import { useContext } from 'react';
import { AppContext } from '../AppContext';

import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import './Theme.scss'


export const Theme = () => {
    const { lightMode, setLightMode } = useContext(AppContext);
   
    const handleMode = () => {
        setLightMode(!lightMode)
    }
    return (

        <div onClick={handleMode} >
            {!lightMode && <LightModeTwoToneIcon className='icon' fontSize='medium' />}
            {lightMode && <DarkModeTwoToneIcon className='icon' fontSize='medium' />}
            
        </div>
    
    );
}