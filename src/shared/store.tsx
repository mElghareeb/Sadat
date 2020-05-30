import { createStore, applyMiddleware } from 'redux';
import { reducers } from '../reducers/index';
import { createBrowserHistory } from "history";
import promise from "redux-promise-middleware";
import { routerMiddleware } from 'react-router-redux';
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import {loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n';
import translations from '../local';
import Cookies from 'universal-cookie';
// import { initiateRequests } from './helpers';

export const history = createBrowserHistory();
const middleware = applyMiddleware( promise, thunk, routerMiddleware(history), createLogger() );
export const store = createStore(reducers, middleware);
console.log('Mahmoud')
const cookies = new Cookies();
// initiateRequests();
syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
!cookies.get('Language') && cookies.set('Language', 'ar');
store.dispatch(setLocale(cookies.get('Language')));
window.document.documentElement.lang = cookies.get('Language');
window.document.documentElement.dir = cookies.get('Language') === 'ar' ? 'rtl' : 'ltr';
