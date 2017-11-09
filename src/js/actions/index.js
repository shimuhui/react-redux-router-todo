import Config from '../configs/config';
import {
  GET_ROLE_LIST,
  GET_USER_LIST,
} from '../constants/actionsTypes';
import $ from 'jquery';
import { browserHistory } from 'react-router';

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

export function editUserStatus(info) {
  return (dispatch, getState) => {
    let _state = getState();
    let _userlist = _state.home.getUserList.list;
    for (let i = 0; i < _userlist.length; i++) {
        if (_userlist[i].userIdEncry == info.id) {
          _userlist[i].status = 1;
        }
    }
    let type = info.status == 1 ? 'unlock' : 'lock';
    $.ajax({
      url: `/v2/admin/api/users/${info.id}/statuses.json`,
      type: 'patch',
      data: { operType: type } ,
      success: function(res) {
        let _res = res.response;
        if (res.response.code == 1) {
          dispatch(getUserList(_userlist))
        }
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

export function goHerf(info) {
  browserHistory.push(Config.rootDir + info.url + '/' + info.data);
}
