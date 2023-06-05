import { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import TranslateIcon from '@mui/icons-material/Translate';



export const LanguageChooser = () => {
    const { languages, language, changeLanguage } = useContext(AppContext);
    const [showLanguages, setShowLanguages] = useState(false);

    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>):void => {
        changeLanguage(event.target.value);
    };
    const handleShow = () => {
        setShowLanguages(!showLanguages)
    }
  

    return (

        <div className='languageContainer' onClick={handleShow}>
            {showLanguages && <select value={language} onChange={handleChange}>
                {languages.map(lang => <option key={lang.value} value={lang.value}>{lang.language}</option>)}
            </select>}
            <TranslateIcon fontSize='small'/>
        </div>
   
    );
}