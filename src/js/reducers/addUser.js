import {combineReducers} from 'redux';
import {
  GET_ROLE_LIST,
  GET_PERMISSION_LIST,
  GET_PARTNERS_LIST,
  GET_UID,
  ROLE_CHANGE,
  PUSH_MESSAGW_SHOW,
  PUSH_MESSAGW_COUNT,
  INTERACT_SHOW,
  PERMISSION_CHECK_COUNT,
  INTERACT_CHECKED,
  USER_MESSAGE_INPUT,
  ALERT,
} from '../constants/actionsTypes';

const getRoleList = (state = {
  list: []
}, action) => {
  switch (action.type) {
    case GET_ROLE_LIST:
      return Object.assign({}, state, action.info);
    default:
      return state;
  }
};

export const getRoleListState = (state) => {
  return state.addUser.getRoleList.list;
};

const getPermissionList = (state = {
  list: []
}, action) => {
  switch (action.type) {
    case GET_PERMISSION_LIST:
      return Object.assign({}, state, action.info);
    default:
      return state;
  }
};

export const getPermissionListState = (state) => {
  return state.addUser.getPermissionList.list;
};

const getPartnersList = (state = {
 list: []
}, action) => {
  switch (action.type) {
    case GET_PARTNERS_LIST:
      return Object.assign({}, state, action.info);
    default:
      return state;
  }
};

export const getPartnersListState = (state) => {
  return state.addUser.getPartnersList.list;
};

const getUid = (state = {uid: ''}, action) => {
  switch (action.type) {
    case GET_UID:
      return Object.assign({}, state, action.info);
    default:
      return state;
  }
};

export const getUidState = (state) => {
  return state.addUser.getUid.uid;
};

const getRoleChange = (state = {id: -1}, action) => {

  switch (action.type) {
    case ROLE_CHANGE:
      return Object.assign({}, state, action.info);
    default:
      return state;
  }
};

export const getRoleChangeState = (state) => {
  return state.addUser.getRoleChange.id;
};

const pushMessageShow = (state = {isShow: false}, action) => {

  switch (action.type) {
    case PUSH_MESSAGW_SHOW:
      return Object.assign({}, state, action.info);
    default:
      return state;
  }
};

export const getPushMessageShowState = (state) => {
  return state.addUser.pushMessageShow.isShow;
};

const pushCountReducerDefault = {
  list: [
    {id: 1, name: '1条'},
    {id: 2, name: '2条'},
    {id: 3, name: '3条'},
    {id: 4, name: '4条'},
    {id: 5, name: '5条'}
  ],
  checkedId: -1,
  isShowInputButton: true
};
const getPushMessageCount = (state = pushCountReducerDefault, action) => {

  switch (action.type) {
    case PUSH_MESSAGW_COUNT:
      return Object.assign({},
        state,
        action.info
      );
    default:
      return state;
  }
};

export const getPushMessageCountState = (state) => {
  return state.addUser.getPushMessageCount;
};

const interactShow = (state = {isShow: false}, action) => {
  switch (action.type) {
    case INTERACT_SHOW:
      return Object.assign({},
        state,
        action.info
      );
    default:
      return state;
  }
};

export const getInteractShowState = (state) => {
  return state.addUser.interactShow.isShow;
};

const interactChecked = (state = {
  firstRadioChecked: true,
  interactPhone: '',
  interactName: '',
  uid: ''
}, action) => {

  switch (action.type) {
    case INTERACT_CHECKED:
      return Object.assign({},
        state,
        action.info
      );
    default:
      return state;
  }
};

export const getInteractCheckedState = (state) => {
  return state.addUser.interactChecked;
};

const getPermissionChecked = (state = {
 list: []
}, action) => {

  switch (action.type) {
    case PERMISSION_CHECK_COUNT:
      return Object.assign({},
        state,
        action.info
      );
    default:
      return state;
  }
};

export const getPermissionCheckedState = (state) => {
  return state.addUser.getPermissionChecked;
};

const userMessDefault = {
  userName: '',
  userPhone: '',
  company: ''
};

const getUserMessageInput = (state = userMessDefault, action) => {
  switch (action.type) {
    case USER_MESSAGE_INPUT:
      return Object.assign({},
        state,
        action.info
      );
    default:
      return state;
  }
};

export const getUserMessageInputState = (state) => {
  return state.addUser.getUserMessageInput;
};

const getAlert = (state = {
  isShowAlert: false,
  alertText: ''
}, action) => {

  switch (action.type) {
    case ALERT:
      return Object.assign({},
        state,
        action.info
      );
    default:
      return state;
  }
};

export const getAlertState = (state) => {
  return state.addUser.getAlert;
};

export default combineReducers({
  getRoleList,
  getPermissionList,
  getPartnersList,
  getUid,
  getRoleChange,
  pushMessageShow,
  getPushMessageCount,
  interactShow,
  getPermissionChecked,
  interactChecked,
  getUserMessageInput,
  getAlert,
});
