/**
 * Created by cuiweigang on 16/8/31.
 */
import * as actions from '../constants/actionType.js';
import {CALL_API} from '../middleware/api.js';

function addItemAction(text) {
  return {
    [CALL_API]: {
      type: actions.ADD_ITEM,
      text,
      data: {}
    }
  };
}

function setLoading() {
  return {
    type: actions.LOADING
  };
}

export function addItem(text) {
  return (dispatch, getState) => {
    console.log('111');
    dispatch(setLoading());
    dispatch(addItemAction(text));
    console.log('222');
    dispatch(setLoading());
  };
}

export function deleteItem(id) {
  return {
    type: actions.DELETE_ITEM,
    id
  };
}
