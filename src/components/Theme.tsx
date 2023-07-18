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

        <div onClick={handleMode} /*className='has-dropdown'*/>
            {!lightMode && <LightModeTwoToneIcon className='icon' fontSize='medium' /*href='#'*/ />}
            {lightMode && <DarkModeTwoToneIcon className='icon' fontSize='small' /*href='#'*/ />}
            {/* <ul className='dropdown'>
                <li className='dropdown-item'>
                    <a id='light' href='#'>light</a>
                </li>
                <li className='dropdown-item'>
                    <a id='dark' href='#'>dark</a>
                </li>

            </ul> */}
            
        </div>
    
    );
}