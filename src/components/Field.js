import React, {useContext} from "react";
import LanguageContext from "../context/LanguageContext";


const Field = () => {
    const language = useContext(LanguageContext)

    return (
        <div>
            <label>{language === 'english' ? 'Name' : 'Nome'}</label>
            <input type="text" />
        </div>
    )
}

export default Field