import {combineReducers} from 'redux';
import assign from 'lodash.assign';
import {
  GET_ROLE_LIST,
  GET_USER_LIST
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

const getUserList = (state = {
  list: []
}, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      return assign({}, state, action.info);
    default:
      return state;
  }
};

export const getRoleListState = (state) => {
  return state.home.getRoleList.list;
};



export const getUserListState = (state) => {
  return state.home.getUserList.list;
};

export default combineReducers({
  getRoleList,
  getUserList,
});
