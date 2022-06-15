import React, {useContext} from "react";
import LanguageContext from "../context/LanguageContext";

const Button = () => {
    const language = useContext(LanguageContext);

    return (
        <button className="primary ui button">
            {language === 'english' ? 'Submit' : 'Voorleggen'}
        </button>
    )
}

export default Button