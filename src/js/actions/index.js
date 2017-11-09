// import Config from '../configs/config';
import {
  GET_ROLE_LIST,
  GET_USER_LIST,
  EDIT_USER_STATUS,
  DEL_USER
} from '../constants/actionsTypes';
import $ from 'jquery';

const getRoleListAction = (info) => {
  return {
    type: GET_ROLE_LIST,
    info: info
  };
};

const radioChangeAction = (info) => {
  return {
    type: GET_ROLE_LIST,
    info: info
  };
};

const radioInputChangeAction = (info) => {
  return {
    type: GET_ROLE_LIST,
    info: info
  };
};

export const radioChange = () => {
  return (dispatch) => {
    dispatch(radioChangeAction({
      radioStatus: true,
    }));
  };
};
export const radioInputChange = () => {
  return (dispatch) => {
    dispatch(radioInputChangeAction({
      radioStatus: true,
    }));
  };
};

export function getRoleList() {
  return dispatch => {
    $.ajax({
      url: '/v2/admin/api/roles.json',
      type: 'GET',
      data: {},
      success: function(json) {
        let _jsonResp = json.response;
        console.log(_jsonResp);
        if (!$.isEmptyObject(_jsonResp)) {
          dispatch(getRoleListAction(_jsonResp));
        }
      }
    });
  };
}

const getUserListAction = (info) => {
  return {
    type: GET_USER_LIST,
    info: info
  };
};

export function getUserList() {
  return dispatch => {
    $.ajax({
      url: '/v2/admin/api/users',
      type: 'GET',
      data: {
        pageSize: 200,
        pageNo: 1,
      },
      dataType: 'json',
      success: function(res) {
        let _res = res.response;
        dispatch(getUserListAction(_res));
      }
    });
  };
}

const editUserStatusAction = (info) => {
  return {
    type: EDIT_USER_STATUS,
    info: info
  };
}

export function editUserStatus(info) {
  console.log(info)
  return dispatch => {
    let type = 'lock';
    $.ajax({
      url: '/v2/admin/api/users/' + info.id + '/statuses',
      contentType: 'application/json',
      dataType: 'json',
      type: 'PATCH',
      data: { operType: type } ,
      success: function(res) {
        let _res = res.response;
        console.log(_res);
        dispatch(editUserStatusAction(_res));
      }
    });
  };
}

export function delUser(info) {
  return (dispatch, getState) => {
    let _state = getState();
    let _userlist = _state.home.getUserList.list;
    for(let i = 0;i < _userlist.length; i++) {
      if( _userlist[i].userIdEncry == info ) {
        _userlist.splice(i, 1);
      }
    };
    $.ajax({
      url: '/v2/admin/api/users/' + info,
      type: 'DELETE',
      dataType: 'json',
      data: { userIdEncry: info },
      success: function(res) {
        if (res.response.code == 1) {
          dispatch(getUserList(_userlist))
        }
      }
    });
  };
}
