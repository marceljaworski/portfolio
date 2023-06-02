import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const LanguageChooser = () => {
    const { languages, language, changeLanguage } = useContext(AppContext);

    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>):void => {
        changeLanguage(event.target.value);
    };

    return (
        <select value={language} onChange={handleChange}>
            {languages.map(lang => <option key={lang.value} value={lang.value}>{lang.language}</option>)}
        </select>
    );
}