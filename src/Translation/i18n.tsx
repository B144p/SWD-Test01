import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglish from './en/translation.json'
import translationThai from './th/translation.json'

const resources = {
    en:{
        translation: translationEnglish
    },
    th:{
        translation: translationThai
    },
}

i18next
.use(initReactI18next)
.init({
    resources,
    lng:'en'   //set default lang.
});

export default i18next;
