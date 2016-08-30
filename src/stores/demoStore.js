/**
 * Created by cuiweigang on 16/8/30.
 */
var Reflux = require('reflux');
import reflux from 'reflux';
import http from '../lib/http.js';
import demoAction from '../actions/demo.js'

var DemoStore = Reflux.createStore({
  listenables: [demoAction],
  data: {
    isLoading: false,
    items: [],
    message: ''
  },
  init: function () {
    let that = this;
    setTimeout(function () {
      that.onFetch();
    }, 1000);
  },

  onFetch: function () {
    this.data.isLoading = true;
    this.trigger();

    let that = this;
    http.post('http://api.imiaoke.cn/service/?path=/api/v1/search/items')
        .then(function (data) {
          that.data.items = data.data.items;
          that.data.isLoading = false;
          that.trigger();
        }).catch(function (err) {
          that.data.message = '出错了';
          that.data.isLoading = false;
          console.log('message-error', err);
          that.trigger();
        });
  }
});

export default  DemoStore;