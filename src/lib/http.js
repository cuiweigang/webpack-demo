/**
 * Created by cuiweigang on 16/8/30.
 */
import superAgent from 'superagent';
let Promise = Promise || require('es6-promise').Promise;

let get = function (path, data) {
  return new Promise(function (resolve, reject) {
    superAgent
        .get(path)
        .send(data)

        .end(function (err, res) {
          if (err) {
            return reject('');
          }
          else {
            return resolve(res.text || res.body);
          }
        });
  });
};

let post = function (path, data) {
  return new Promise(function (resolve, reject) {
    superAgent.post(path)
        .send(data)
        .set('Content-Type', 'application/json')
        .end(function (err, res) {
          if (err) {
            return reject('');
          }
          else {
            return resolve(res.body);
          }
        });
  });
};

export default {get, post};