// import Config from '../configs/config';
import {
  GET_ROLE_LIST
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