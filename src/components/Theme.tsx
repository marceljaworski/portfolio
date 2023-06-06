import { useState } from 'react';
// import { AppContext } from '../AppContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';


export const Theme = () => {
    const [ LightMode, setLightMode ] = useState(true);
   
    const handleMode = () => {
        setLightMode(!LightMode)
    }
    return (

        <div onClick={handleMode} >
            {LightMode && <LightModeIcon/>}
            {!LightMode && <DarkModeIcon/>}
            
            
        </div>
   
    );
}