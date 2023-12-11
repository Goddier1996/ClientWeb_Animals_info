import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import translationEnglish from "./locales/English/infoAboutApp.json";
import translationHebrew from "./locales/Hebrew/infoAboutApp.json";
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'




//---Using different namespaces
const resources = {
    en: {
        home: translationEnglish,
    },
    hw: {
        home: translationHebrew,
    }
}

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        resources,
        lng: "en", //default language
        debug: false,
        detection: {
            order: ['path', 'cookie', 'htmlTag'],
            caches: ['cookie'],
        }
    });


export default i18next;