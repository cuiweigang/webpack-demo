/**
 * Created by cuiweigang on 16/8/31.
 */

import {ADD_ITEM,DELETE_ITEM} from '../../constants/actionType.js';
let Promise = Promise || require('es6-promise').Promise;
import http from '../../lib/http.js';

let items = ()=> {
  return http.post('http://api.imiaoke.cn/service/?path=/api/v1/search/items', {page: 1})
};

let createItem = (text)=> {
  let time = Date.now();
  return {
    id: Math.random().toString(36).split('.').join(''),
    addTime: time,
    updateTime: time,
    status: false,
    text
  };
};

let deleteItem = (id, state)=> {
  var data = state.filter(item=>item.id !== id);
  return data;
};

export default (state = [], action = null)=> {
  console.log('444');
  switch (action.type) {
    case ADD_ITEM:
      return [...state, createItem(action.text)];
    case DELETE_ITEM:
      return deleteItem(action.id, state);
    default :
      return state;
  }
}