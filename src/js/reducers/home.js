import {combineReducers} from 'redux';
import assign from 'lodash.assign';
import {
  HELLO_WORLD
} from '../constants/actionsTypes';

function test(state = {
  value: 'hello world xiaotongxiugai !!!!!',
}, action) {
  switch (action.type) {
    case HELLO_WORLD:
      return assign({}, state, action.info);
    default:
      return state;
  }
}


export default combineReducers({
  test,
});
