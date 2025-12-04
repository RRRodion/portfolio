import { createContext, useState, useContext, useEffect } from "react";
import ru from "../locales/ru.json";
import en from "../locales/en.json";

const LanguageContext = createContext();

const translations = { en, ru };

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("en");

    useEffect(() => {
        const browserLang = navigator.language || navigator.userLanguage;

        if (browserLang.toLowerCase().startsWith("ru")) {
            setLang("ru");
        } else {
            setLang("en");
        }
    }, []);

    const toggleLanguage = () => {
        setLang((prev) => (prev === "en" ? "ru" : "en"));
    };

    const t = (path) => {
        return path.split(".").reduce((obj, key) => obj[key], translations[lang]);
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLang = () => useContext(LanguageContext);
