import { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import './LanguageChooser.scss'



export const LanguageChooser = () => {
    const { languages, language, changeLanguage } = useContext(AppContext);
    const [showLanguages, setShowLanguages] = useState(false);

    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>):void => {
        changeLanguage(event.target.value);
        setShowLanguages(!showLanguages);
    };
    const handleShow = () => {
        setShowLanguages(!showLanguages)
    }
  

    return (

        <div className='languageContainer'>
            <LanguageTwoToneIcon className='icon' onClick={handleShow} fontSize='medium'/>
            {showLanguages && 
                <div className='dropdown-language'>
                    <label htmlFor="languages">Choose a Language: </label>
                    <select id="languages" value={language} onChange={handleChange}>
                        {languages.map(lang => <option key={lang.value} value={lang.value}>{lang.language}</option>)}
                    </select>
                </div>
            
            }
            
            
        </div>
   
    );
}