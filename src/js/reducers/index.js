import {combineReducers} from 'redux';

import {routerReducer as routing} from 'react-router-redux';

import addUser from './addUser';
import editUser from './editUser';
import home from './home';

export default combineReducers({
  routing,
  addUser,
  editUser,
  home,
});

export function getHelloWorldState(state) {
  return state.home.test;
}
