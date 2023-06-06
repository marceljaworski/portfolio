import { createContext, useState } from "react";
import dataEN from './content/dataEN.json'
import dataDE from './content/dataDE.json'

interface Lang {
    value: string;
    language: string;

}
interface Data {
    [key: string]: any;
}

interface IAppContext {
    language: string;
    data: Data;
    languages: Lang[];
    changeLanguage: (arg0: string) => void;
    lightMode: boolean;
    setLightMode: (arg: boolean) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
    const [language, setLanguage] = useState("de");
    const [data, setData] = useState(dataDE);
    const [ lightMode, setLightMode ] = useState(true);
    
    const languages = [ 
        {
            value: "de",
            language: "Deutsch",
        },
        {
            value: "en",
            language: "Englisch",
        }
    ];
    
    const changeLanguage = (language: string) => {
        setLanguage(language);
        if (language == "de"){
            setData(dataDE)

        }
        if (language == "en") {
            setData(dataEN)
        }
    }


    return (
        <AppContext.Provider
            value={{
                language,
                languages,
                data,
                changeLanguage,
                setLightMode,
                lightMode,
            }}>
            {children}
        </AppContext.Provider>
    )
} 