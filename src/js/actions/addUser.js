import Config from '../configs/config';
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
  GET_USER,
} from '../constants/actionsTypes';
import $ from 'jquery';

const pushCountDefault = {
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

const pushCountDefaultNull = {
  list: [
    {id: 0, name: '无限制'},
  ],
  checkedId: -1,
  isShowInputButton: false
};

let _isEdit = false;


const getUserAction = (info) => {
  return {
    type: GET_USER,
    info: info
  };
};

//编辑-获取用户信息
export const getUser = (id) => {

  return dispatch => {
    $.ajax({
      url: '/v2/admin/api/users/' + id,
      type: 'GET',
      dataType: 'json',
      data: {},
      success: function(json) {
        let _jsonResp = json.response;

        if (!$.isEmptyObject(_jsonResp) && _jsonResp.code == 1) {
          _isEdit = true;

          dispatch(getUserAction(_jsonResp.info));
          dispatch(getUserMessageInputAction({
            userName: _jsonResp.info.name,
            userPhone: _jsonResp.info.phone,
          }));
          dispatch(getUidAction({uid: _jsonResp.info.uid}));
          dispatch(getRoleList());
          dispatch(getPartnersList());
        } else {
          dispatch(getAlertAction({
            isShowAlert: true,
            alertText: json.response.tip
          }));
        }
      },
      error: function() {
        dispatch(getAlertAction({
          isShowAlert: true,
          alertText: '请求超时'
        }));
      }
    });
  };
};

//编辑-获取用户权限
export const getUserPermission = (id) => {
  return dispatch => {
    $.ajax({
      url: '/v2/admin/api/users/'+id+'/resources',
      type: 'GET',
      dataType: 'json',
      data: {
        type: 2
      },
      success: function(json) {
        let _jsonResp = json.response;

        if (!$.isEmptyObject(_jsonResp) && _jsonResp.code == 1) {
          let idArr = [];

          for (let i in _jsonResp.list) {
            idArr.push(_jsonResp.list[i].id);
          }
          dispatch(permissionCheckedAction({list: idArr}));
        } else {
          dispatch(getAlertAction({
            isShowAlert: true,
            alertText: json.response.tip
          }));
        }
      },
      error: function() {
        dispatch(getAlertAction({
          isShowAlert: true,
          alertText: '请求超时'
        }));
      }
    });
  };
};

const getPartnersListAction = (info) => {
  return {
    type: GET_PARTNERS_LIST,
    info: info
  };
};

//获取公司
export const getPartnersList = () => {
  return (dispatch, getState) => {
    let _userData = getState().editUser.getUser;
    $.ajax({
      url: '/v2/admin/api/partners.json',
      type: 'GET',
      data: {},
      success: function(json) {
        let _jsonResp = json.response;

        if (!$.isEmptyObject(_jsonResp) && _jsonResp.code == 1) {

          if (_isEdit) {

            dispatch(getUserMessageInput({
              company: _userData.partnerId.toString()}));
            dispatch(getPartnersListAction(_jsonResp));
          } else {

            dispatch(getUserMessageInput({
              company: _jsonResp.list[0].id.toString()}));
            dispatch(getPartnersListAction(_jsonResp));
          }
        } else {
          dispatch(getAlertAction({
            isShowAlert: true,
            alertText: json.response.tip
          }));
        }
      },
      error: function() {
        dispatch(getAlertAction({
          isShowAlert: true,
          alertText: '请求超时'
        }));
      }
    });
  };
};


const getUidAction = (info) => {
  return {
    type: GET_UID,
    info: info
  };
};

const UidType = 'INTERACT';

//获取UID
export const getUid = (type) => {
  return dispatch => {
    $.ajax({
      url: '/v2/admin/api/users/uid',
      type: 'GET',
      dataType: 'json',
      data: {type: type == UidType ? 0:1},
      success: function(json) {
        let _jsonResp = json.response;

        if (!$.isEmptyObject(_jsonResp) && _jsonResp.code == 1) {
          if (type == UidType) {
            dispatch(interactCheckedAction({uid: _jsonResp.info}));
          } else {
            dispatch(getUidAction({uid: _jsonResp.info}));
          }
        } else {
          dispatch(getAlertAction({
            isShowAlert: true,
            alertText: json.response.tip
          }));
        }
      },
      error: function() {
        dispatch(getAlertAction({
          isShowAlert: true,
          alertText: '请求超时'
        }));
      }
    });
  };
};

const getRoleListAction = (info) => {
  return {
    type: GET_ROLE_LIST,
    info: info
  };
};

//获取角色列表
export const getRoleList = () => {
  return (dispatch, getState) => {
    let _userData = getState().editUser.getUser;
    $.ajax({
      url: '/v2/admin/api/roles',
      type: 'GET',
      dataType: 'json',
      data: {},
      success: function(json) {
        let _jsonResp = json.response;

        if (!$.isEmptyObject(_jsonResp) && _jsonResp.code == 1) {

          dispatch(getRoleListAction(_jsonResp));

          if (_isEdit) {
            dispatch(roleChange(_userData.roleParentId));
          } else {
            dispatch(roleChange(_jsonResp.list[0].id));
          }
        } else {
          dispatch(getAlertAction({
            isShowAlert: true,
            alertText: json.response.tip
          }));
        }
      },
      error: function() {
        dispatch(getAlertAction({
          isShowAlert: true,
          alertText: '请求超时'
        }));
      }
    });
  };
};

const roleChangeAction = (info) => {
  return {
    type: ROLE_CHANGE,
    info: info
  };
};

//角色转换
export const roleChange = (roleId) => {

  return dispatch => {

    dispatch(roleChangeAction({id: roleId}));
    dispatch(getPermissionList(roleId));
    dispatch(pushInteractShow(roleId));
  };
};

const getPermissionListAction = (info) => {
  return {
    type: GET_PERMISSION_LIST,
    info: info
  };
};

//获取权限列表
export const getPermissionList = (id) => {
  return (dispatch, getState) => {
    let _userData = getState().editUser.getUser;
    $.ajax({
      // url: '/admin/api/role/resource/list.json',
      url: '/v2/admin/api/roles/' + id + '/resources',
      type: 'GET',
      dataType: 'json',
      data: {
        // roleId: id,
        type: 2
      },
      success: function(json) {
        let _jsonResp = json.response;

        if (!$.isEmptyObject(_jsonResp) && _jsonResp.code == 1) {

          if (_isEdit && _userData.roleParentId == id) {

            dispatch(getPermissionListAction(_jsonResp));
            dispatch(getUserPermission(_userData.userIdEncry));
          } else {

            dispatch(getPermissionListAction(_jsonResp));
            dispatch(permissionCheckedAction({list: []}));
          }
        } else {
          dispatch(getAlertAction({
            isShowAlert: true,
            alertText: json.response.tip
          }));
        }
      },
      error: function() {
        dispatch(getAlertAction({
          isShowAlert: true,
          alertText: '请求超时'
        }));
      }
    });
  };
};

//判断是否展示消息推送和互动
const pushInteractShow = (id) => {

  return (dispatch, getState) => {
    let _userData = getState().editUser.getUser;
    $.ajax({
      // url: '/admin/api/role/resource/list.json',
      url: '/v2/admin/api/roles/' + id + '/resources',
      type: 'GET',
      dataType: 'json',
      data: {
        // roleId: id,
        type: 3
      },
      success: function(json) {
        let _jsonResp = json.response;
        let _resourceObj = {};

        if (!$.isEmptyObject(_jsonResp) && _jsonResp.code == 1) {

          for (let i in _jsonResp.list) {
            _resourceObj[_jsonResp.list[i].code] = _jsonResp.list[i].name;
          }

          if (_isEdit && _userData.roleParentId == id) {
            if (_jsonResp.list && _jsonResp.list.length != 0) {

              if (_resourceObj['module_push_unlimit']) {

                dispatch(pushMessageShowAction(true));
                dispatch(interactShowAction(true));
                dispatch(pushMessageCountAction(pushCountDefaultNull));
                dispatch(pushMessageChange(pushCountDefaultNull.list[0].id));

                if (_userData.isInteract == 1) {
                  dispatch(interactCheckedChange());
                  dispatch(getInteractInput({
                    interactPhone: _userData.interactPhone,
                    interactName: _userData.interactName,
                  }));
                }
              } else if (_resourceObj['module_push_limit']) {

                dispatch(pushMessageShowAction(true));
                dispatch(interactShowAction(false));
                //对象深度拷贝,防止数据互相更新
                let _obj = JSON.parse(JSON.stringify(pushCountDefault));
                dispatch(pushMessageCountAction(_obj));
                dispatch(pushMessCountAdd(_userData.pushLimit));
              }
            } else {
              dispatch(pushMessageShowAction(false));
              dispatch(interactShowAction(false));
            }
          } else {
            if (_jsonResp.list && _jsonResp.list.length != 0) {
              if (_resourceObj['module_push_unlimit']) {

                dispatch(pushMessageShowAction(true));
                dispatch(interactShowAction(true));
                dispatch(pushMessageCountAction(pushCountDefaultNull));
                dispatch(pushMessageChange(pushCountDefaultNull.list[0].id));
              } else if (_resourceObj['module_push_limit']) {

                dispatch(pushMessageShowAction(true));
                dispatch(interactShowAction(false));
                //对象深度拷贝,防止数据互相更新
                let _obj = JSON.parse(JSON.stringify(pushCountDefault));
                dispatch(pushMessageCountAction(_obj));
                dispatch(pushMessageChange(_obj.list[0].id));
              }
            } else {
              dispatch(pushMessageShowAction(false));
              dispatch(interactShowAction(false));
            }
          }
        } else {
          dispatch(getAlertAction({
            isShowAlert: true,
            alertText: json.response.tip
          }));
        }
      },
      error: function() {
        dispatch(getAlertAction({
          isShowAlert: true,
          alertText: '请求超时'
        }));
      }
    });
  };
};

const pushMessageShowAction = (info) => {
  return {
    type: PUSH_MESSAGW_SHOW,
    info: {isShow: info}
  };
};

const pushMessageCountAction = (info) => {
  return {
    type: PUSH_MESSAGW_COUNT,
    info: info
  };
};

//消息推送数量选择
export const pushMessageChange = (id) => {

  return (dispatch, getState) => {
    let _state = getState();
    let _mess = _state.addUser.getPushMessageCount;

    _mess.checkedId = parseInt(id);
    dispatch(pushMessageCountAction(_mess));
  };
};

//增加推动消息数量
export const pushMessCountAdd = (id) => {

  return (dispatch, getState) => {
    let _state = getState();
    let _mess = _state.addUser.getPushMessageCount;
    let r = /^\+?[1-9][0-9]*$/;

    if (r.test(id)) {
      if (parseInt(id) > 5) {
        let obj = {};
        obj.id = parseInt(id);
        obj.name = id + '条';

        _mess.list.push(obj);
        _mess.checkedId = parseInt(id);
        _mess.isShowInputButton = false;
      } else {
        _mess.checkedId = parseInt(id);
      }
      dispatch(pushMessageCountAction(_mess));
    } else {
      dispatch(getAlertAction({
        isShowAlert: true,
        alertText: '请输入正整数'
      }));
    }
  };
};

//删除推动消息数量
export const pushMessCountDelete = (id) => {

  return (dispatch, getState) => {
    let _state = getState();
    let _mess = _state.addUser.getPushMessageCount;

    for (let i in _mess.list) {

      if (_mess.list[i].id == id) {

        _mess.list.splice(i, 1);
        break;
      }
    }

    _mess.checkedId =
      _mess.checkedId == id ? pushCountDefault.list[0].id : _mess.checkedId;
    _mess.isShowInputButton = true;
    dispatch(pushMessageCountAction(_mess));
  };
};

//是否显示互动数量
const interactShowAction = (info) => {
  return {
    type: INTERACT_SHOW,
    info: {isShow: info}
  };
};

const interactCheckedAction = (info) => {
  return {
    type: INTERACT_CHECKED,
    info: info
  };
};

//相框互动有无
export const interactCheckedChange = () => {

  return (dispatch, getState) => {
    let _userData = getState().editUser.getUser;
    let _state = getState();
    let _mess = _state.addUser.interactChecked;

    _mess.firstRadioChecked = !_mess.firstRadioChecked;

    if (!_mess.firstRadioChecked) {
      if (_isEdit && _userData.interactUid) {
        _mess.uid = _userData.interactUid;
      } else {
        dispatch(getUid(UidType));
      }
    }

    dispatch(interactCheckedAction(_mess));
  };
};

//相框交互输入信息
export const getInteractInput = (data) => {

  return (dispatch) => {
    dispatch(interactCheckedAction(data));
  };
};


const permissionCheckedAction = (info) => {
  return {
    type: PERMISSION_CHECK_COUNT,
    info: info
  };
};

//权限选择
export const permissionChecked = (id) => {

  return (dispatch, getState) => {
    let _state = getState();
    let _mess = _state.addUser.getPermissionChecked;
    let i = _mess.list.indexOf(id);

    if (i == -1) {
      _mess.list.push(id);
    } else {
      _mess.list.splice(i, 1);
    }

    dispatch(permissionCheckedAction(_mess));
  };
};

const getUserMessageInputAction = (info) => {
  return {
    type: USER_MESSAGE_INPUT,
    info: info
  };
};

export const getUserMessageInput = (data) => {

  return (dispatch) => {
    dispatch(getUserMessageInputAction(data));
  };
};

const getAlertAction = (info) => {
  return {
    type: ALERT,
    info: info
  };
};

export const alertClick = () => {

  return (dispatch) => {
    dispatch(getAlertAction({
      isShowAlert: false,
      alertText: ''
    }));
  };
};

//提交
export const submitClick = () => {

  return (dispatch, getState) => {
    let _state = getState();
    let _userData = getState().editUser.getUser;
    let _userMess = _state.addUser.getUserMessageInput;
    let _roleId = _state.addUser.getRoleChange.id;
    let _pushMessCount = _state.addUser.getPushMessageCount.checkedId;
    let _interactShow = _state.addUser.interactShow.isShow;
    let _interactChecked = _state.addUser.interactChecked;
    let _permissionList = _state.addUser.getPermissionChecked.list;
    let _submitData = {};
    let reg = /^1[3|4|5|7|8]\d{9}$/;

    if (_userMess.userName) {
      _submitData.name = _userMess.userName;
    } else {

      dispatch(getAlertAction({
        isShowAlert: true,
        alertText: '请填写用户姓名'
      }));
      return;
    }

    if (_userMess.userPhone == '') {

      dispatch(getAlertAction({
        isShowAlert: true,
        alertText: '请填写手机号码'
      }));
      return;
    } else if (!(reg.test(_userMess.userPhone))) {

      dispatch(getAlertAction({
        isShowAlert: true,
        alertText: '手机号码格式错误'
      }));
      return;
    } else {
      _submitData.phone = _userMess.userPhone;
    }

    _submitData.partnerId = _userMess.company;

    if (_pushMessCount != 0) {
      _submitData.pushLimit = _pushMessCount;
    }

    if (_permissionList.length == 0) {

      dispatch(getAlertAction({
        isShowAlert: true,
        alertText: '请选择用户权限'
      }));
      return;
    } else {
      _submitData.resourceSn = _permissionList.toString();
    }

    _submitData.parentRoleId = _roleId;

    if (_interactShow) {
      _submitData.isInteract = _interactChecked.firstRadioChecked ? 0:1;
    }

    if (_submitData.isInteract == 1) {
      if (_interactChecked.interactPhone == '') {

        dispatch(getAlertAction({
          isShowAlert: true,
          alertText: '请输入互动手机号码'
        }));
        return;
      } else if (!(reg.test(_interactChecked.interactPhone))) {

        dispatch(getAlertAction({
          isShowAlert: true,
          alertText: '互动手机号码格式错误'
        }));
        return;
      } else {
        _submitData.interactPhone = _interactChecked.interactPhone;
        _submitData.interactName = _interactChecked.interactName;
      }
    }

    let url = '';
    if (_isEdit) {
      url = '/v2/admin/api/users/'+ _userData.userIdEncry;
    } else {
      url = '/v2/admin/api/users/-1';
    }

    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: _submitData,
      success: function(json) {
        let _jsonResp = json.response;

        if (!$.isEmptyObject(_jsonResp) && _jsonResp.code == 1) {
          // dispatch(getAlertAction({
          //   isShowAlert: true,
          //   alertText: '添加成功'
          // }));
          location.href = Config.rootDir + 'index';
        } else {
          dispatch(getAlertAction({
            isShowAlert: true,
            alertText: json.response.tip
          }));
        }
      },
      error: function() {
        dispatch(getAlertAction({
          isShowAlert: true,
          alertText: '请求超时'
        }));
      }
    });
  };
};

//取消
export const cancelClick = () => {
  location.href = Config.rootDir + 'index';
};
