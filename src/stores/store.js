/**
 * Created by cuiweigang on 16/8/31.
 */
import { createStore } from 'redux';
import list from '../reducers/list';

export default initialState => createStore(list, initialState);