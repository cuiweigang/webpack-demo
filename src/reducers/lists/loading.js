/**
 * Created by cuiweigang on 16/9/1.
 */
import {LOADING} from '../../constants/actionType';

export default (state = false, action = null)=> {
  switch (action.type) {
    case LOADING:
      return !state;
    default:
      return state;
  }
};