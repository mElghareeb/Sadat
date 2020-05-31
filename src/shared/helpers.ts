import axios from 'axios';
import Cookies from 'universal-cookie';
export const cookies = new Cookies();
export const getCurrentLocale = (state) => (state.i18n as any).locale;

axios.defaults.headers.common['lang'] = cookies.get('Language') ? cookies.get('Language') : 'en';

export const updateDocumentLanguage = (lang) => {
    window.document.documentElement.lang = lang;
};

export const getLanguage = () => {
    return cookies.get('Language')
}

