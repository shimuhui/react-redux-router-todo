import {combineReducers} from 'redux';
import {
  GET_USER
} from '../constants/actionsTypes';

const getUser = (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return Object.assign({}, state, action.info);
    default:
      return state;
  }
};

export const getUserState = (state) => {
  return state.addUser.getUser;
};

export default combineReducers({
  getUser
});
