import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { i18nReducer } from 'react-redux-i18n';
import { profileReducer } from '../layouts/components/header/reducer';
import { internalDocumentsReducer } from '../containers/internal-documents-table/reducers';
import { externalDocumentsReducer } from '../containers/external-documents-table/reducer';
import { foldersReducer } from '../containers/folders/reducers';



export const reducers = combineReducers({
    routing: routerReducer,
    i18n: i18nReducer,
    profile: profileReducer,
    InternalDocument: internalDocumentsReducer,
    ExternalDocument: externalDocumentsReducer,
    foldersData: foldersReducer
});
