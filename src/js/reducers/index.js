import {combineReducers} from 'redux';

import {routerReducer as routing} from 'react-router-redux';

import home from './home';//
export default combineReducers({
  routing,
  home,
});

export function getHelloWorldState(state) {
  return state.home.test;
}