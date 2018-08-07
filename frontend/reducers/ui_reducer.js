import { combineReducers } from 'redux';
import modal from './modal_reducer';
import searchResults from './search_reducer';

export default combineReducers({modal, searchResults});
