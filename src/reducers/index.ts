import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { i18nReducer } from 'react-redux-i18n';
import { schoolNewsReducer } from '../containers/news/reducers';
import { photosReducer } from '../containers/photos/reducers';
import { videosReducer } from '../containers/videos/reducers';
import { contactsReducer } from '../containers/contacts/reducers';
import { jobsReducer } from '../containers/jobs/reducers';
import { internaljobsReducer } from '../containers/internal-jobs/reducers';

export const reducers = combineReducers({
    routing: routerReducer,
    i18n: i18nReducer,
    schoolNews: schoolNewsReducer,
    photos: photosReducer,
    videos: videosReducer,
    contacts: contactsReducer,
    jobs: jobsReducer,
    internalJobs: internaljobsReducer
});
