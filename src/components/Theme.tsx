import { useContext } from 'react';
import { AppContext } from '../AppContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './Theme.scss'


export const Theme = () => {
    const { lightMode, setLightMode } = useContext(AppContext);
   
    const handleMode = () => {
        setLightMode(!lightMode)
    }
    return (

        <div onClick={handleMode} /*className='has-dropdown'*/>
            {!lightMode && <a><LightModeIcon fontSize='small' /*href='#'*/ /></a>}
            {lightMode && <a><DarkModeIcon fontSize='small' /*href='#'*/ /></a>}
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