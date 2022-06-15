import React, {useState} from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";

const App = () => {
    const [language, setLanguage] = useState('en')

    const onLanguageChange = (language) => {
        setLanguage(language)
    }

    return (
        <div className="container ui">
            <div>
                Select a Language:
                <i className="flag us" onClick={() => onLanguageChange('english')} />
                <i className="flag nl" onClick={() => onLanguageChange('dutch')} />
            </div>
            <LanguageContext.Provider value={language}>
                <UserCreate />
            </LanguageContext.Provider>
            {language}
        </div>
    )
}

export default App