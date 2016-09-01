/**
 * Created by cuiweigang on 16/8/31.
 */
import * as actions from '../constants/actionType.js';

export function addItem(text) {
  return {
    type: actions.ADD_ITEM,
    text
  };
}

export function deleteItem(id) {
  return {
    type: actions.DELETE_ITEM,
    id
  };
}
