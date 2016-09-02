/**
 * Created by cuiweigang on 16/9/1.
 */
import http from '../lib/http.js';

export const CALL_API = Symbol('Call API');

export default store => next => action => {
  const callAPI = action[CALL_API];
  console.log('api', callAPI);
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  function actionWith(info) {
    const finalAction = Object.assign({}, action, info);
    //delete finalAction[CALL_API];
    console.log(finalAction);
    return finalAction;
  }

  next({type: 'LOADING'});

  setTimeout(()=> {
    http.post('http://api.imiaoke.cn/service/?path=/api/v1/search/items', {page: 1})
        .then((data)=> {
          console.log('333');
          next({type: 'LOADING'});
          return next(actionWith({data, type: callAPI.type}));
        }).catch(err=> {
          console.log(err);
        });
  }, 2000);
};

