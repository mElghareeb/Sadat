import axios from 'axios';
import Cookies from 'universal-cookie';
export const cookies = new Cookies();
export const getCurrentLocale = (state) => (state.i18n as any).locale;

axios.defaults.headers.common['lang'] = cookies.get('Language') ? cookies.get('Language') : 'en';
axios.defaults.headers.common['Accept'] = "application/json";
axios.defaults.headers.common['Content-Type'] = "application/json";
cookies.get('accessToken') && (axios.defaults.headers.common['Authorization'] = 'Bearer ' + cookies.get('accessToken'));
console.log('token')

export const updateDocumentLanguage = (lang) => {
    window.document.documentElement.lang = lang;
};

export const getLanguage = () => {
    return cookies.get('Language')
}

