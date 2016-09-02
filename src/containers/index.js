/**
 * Created by cuiweigang on 16/8/30.
 */
let React = require('react');
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/list.js';

var CommentBox = React.createClass({
  render: function () {
    let {addItem,deleteItem,list} =this.props;
    console.log('state', this.props.state);
    let add = ()=> {
      addItem('test');
    };

    let del = ()=> {
      if (list && list.length > 0) {
        var id = list[0].id;
        deleteItem(id);
      }
    };


    let data = JSON.stringify(list);
    return (
        <div className="commentBox">
          <span>{this.props.state.loading.toString()}</span>
          <input type='submit' onClick={add} value="提交"/>
          <input type='submit' onClick={del} value="删除"/>
          {data}
          Hello, 你不知道，webpack好难配置啊.
        </div>
    );
  }
});

let mapStateToProps = state => {
  let list = state.list;

  return {list, state};
};

let mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
