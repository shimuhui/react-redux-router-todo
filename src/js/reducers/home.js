import {combineReducers} from 'redux';
import assign from 'lodash.assign';
import {
  GET_ROLE_LIST
} from '../constants/actionsTypes';

const getRoleList = (state = {
  list: []
}, action) => {
  switch (action.type) {
    case GET_ROLE_LIST:
      return assign({}, state, action.info);
    default:
      return state;
  }
};

export const getRoleListState = (state) => {
  return state.home.getRoleList.list;
};


export default combineReducers({
  getRoleList,
});
