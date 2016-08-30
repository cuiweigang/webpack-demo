/**
 * Created by cuiweigang on 16/8/30.
 */
let React = require('react');
import demoAction from '../../actions/demo.js';
import demoStore from '../../stores/demoStore.js';
import Reflux from 'reflux';

var Demo2Page = React.createClass({
  mixins: [Reflux.connect(demoStore, 'demoStore'), Reflux.listenTo(demoStore, 'onStateChange')],
  getInitialState: function () {
    return demoStore.data;
  },
  onStateChange: function () {
    this.setState(demoStore.data);
  },
  render: function () {
    var data = this.state;
    console.log(data);
    var items = [];
    if (data.items) {
      data.items.map((item, key) => {
        items.push(<img key={key} src={item.images.url_320}/>);
      });
    }
    return (
        <div className="commentBox">
          <div>Hello, 我是Demo-{data.isLoading.toString()}</div>
          <div>{data.message}</div>
          <div>{items}</div>
        </div>
    );
  }
});

export default  Demo2Page;