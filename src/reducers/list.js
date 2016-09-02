/**
 * Created by cuiweigang on 16/8/31.
 */
import { combineReducers } from 'redux';
import list from './lists/list.js';
import loading from './lists/loading.js';
export default combineReducers({loading, list});