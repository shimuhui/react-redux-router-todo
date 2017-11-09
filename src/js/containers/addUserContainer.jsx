import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AddUserBlock from '../components/addUserBlock.jsx';
import LabelInput from '../component/labelInput/labelInput.jsx';
import RoleList from '../components/roleList.jsx';
import PushMessageCount from '../components/pushMessageCount.jsx';
import Radio from '../component/radio/radio.jsx';
import PermissionList from '../components/permissionList.jsx';
import Button from '../component/button/button.jsx';
import Alert from '../component/alert/alert.jsx';
import NavBox from '../component/navBox/navBox.jsx';

import {
  getRoleList,
  getPartnersList,
  getUid,
  roleChange,
  pushMessageChange,
  pushMessCountAdd,
  pushMessCountDelete,
  permissionChecked,
  interactCheckedChange,
  submitClick,
  cancelClick,
  getUserMessageInput,
  getInteractInput,
  alertClick,
} from '../actions/addUser';

import {
  getRoleListState,
  getPermissionListState,
  getPartnersListState,
  getUidState,
  getRoleChangeState,
  getPushMessageShowState,
  getPushMessageCountState,
  getInteractShowState,
  getPermissionCheckedState,
  getInteractCheckedState,
  getUserMessageInputState,
  getAlertState,
} from '../reducers/addUser';

class AddUserContainer extends Component {
  static propTypes = {
    test: PropTypes.object,
  };

  componentDidMount() {
    this.props.getRoleList();
    this.props.getPartnersList();
    this.props.getUid();
  }

  componentWillMount() {
    this.style = {
      homeRight: {
        position: 'absolute',
        right: '0px',
        top: '0px',
        bottom: '20px',
        overflow: 'hidden',
        boxSizing: 'border-box',
      },
      homeMain: {
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      },
      homeButton: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '6px 0 10px 0',
      },
      blockLabelInput: {
        marginTop: '-4px',
        marginRight: '20px',
      },
      blockRoleList: {
        marginTop: '-2px',
        marginRight: '8px',
      },
      blockInputButton: {
        marginTop: '11px',
        marginRight: '20px',
      },
      blockRadio: {
        display: 'flex',
        marginTop: '14px',
      },
      radioHaveMessageTitle: {
        marginTop: '20px',
        lineHeight: '40px',
        color: '#727272',
        fontSize: '14px',
        fontWeight: 'normal',
      }
    };
  }

  render() {
    const {
      roleList,
      permissionList,
      partnersList,
      uid,
      roleChange,
      isCheckedRoleId,
      isPushMessageCountShow,
      pushMessCountObj,
      pushMessageChange,
      pushMessCountAdd,
      pushMessCountDelete,
      interactShow,
      permissionChecked,
      permissionCheckedList,
      interactCheckedObj,
      interactCheckedChange,
      submitClick,
      cancelClick,
      getUserMessageInput,
      userInputValue,
      getInteractInput,
      alertObj,
      alertClick,
    } = this.props;

    return (
      <div>
        <NavBox
          navTitles = {['用户', '新建用户']}
          url = {
            ['/admin/user/edit/index',
              '/admin/user/edit/add']}
          borderColor = {[]}
          btnShow = {false}
          btnName = {''}/>
        <div className = "rightMain">
          <div>
            <div
              id = 'test'
              style = {this.style.homeMain}>
              <div>
                <AddUserBlock
                  title = '信息'>
                  <div style={this.style.blockLabelInput}>
                    <LabelInput
                      id = 'userName'
                      labelName = '用户姓名'
                      value = {userInputValue.userName}
                      getInputValue = {getUserMessageInput}/>
                    <LabelInput
                      id = 'userPhone'
                      value = {userInputValue.userPhone}
                      labelName = '手机号码'
                      getInputValue = {getUserMessageInput}/>
                    <LabelInput
                      id = 'company'
                      labelName = '公司名称'
                      isSelect = {true}
                      value = {userInputValue.company}
                      selectList = {partnersList}
                      getInputValue = {getUserMessageInput}/>
                    <LabelInput
                      id = 'uid'
                      labelName = 'UID'
                      width = '84px'
                      disabled = {true}
                      defaultValue = {uid}/>
                  </div>
                </AddUserBlock>
                <AddUserBlock
                  title = '角色'>
                  <div style={this.style.blockRoleList}>
                    <RoleList
                      ovalData = {roleList}
                      isCheckedId = {isCheckedRoleId}
                      changeClick = {roleChange}/>
                  </div>
                </AddUserBlock>

                {
                  isPushMessageCountShow
                    ? <AddUserBlock
                    title = '每天可推送消息数'>
                    <div>
                      <PushMessageCount
                        id = 'pushMessage'
                        showListArr = {pushMessCountObj.list}
                        isShowInputButton = {
                          pushMessCountObj.isShowInputButton}
                        checkedId = {pushMessCountObj.checkedId}
                        pushMessageChange = {pushMessageChange}
                        pushMessCountAdd = {pushMessCountAdd}
                        pushMessCountDelete = {pushMessCountDelete}/>
                    </div>
                  </AddUserBlock>
                    : null
                }

                {
                  interactShow
                    ? <AddUserBlock
                    title = '相框互动'>
                    <div style={this.style.blockRadio}>
                      <Radio
                        text = '没有'
                        isChecked = {interactCheckedObj.firstRadioChecked}
                        radioChange = {interactCheckedChange}/>
                      <Radio
                        text = '有'
                        isChecked = {!interactCheckedObj.firstRadioChecked}
                        radioChange = {interactCheckedChange}/>
                    </div>
                    {
                      interactCheckedObj.firstRadioChecked
                        ? null
                        : <div>
                        <h4
                          style = {this.style.radioHaveMessageTitle}>
                          互动角色信息
                        </h4>
                        <LabelInput
                          id = 'interactPhone'
                          labelName = '手机号码'
                          value = {interactCheckedObj.interactPhone}
                          getInputValue = {getInteractInput}/>
                        <LabelInput
                          id = 'interactName'
                          value = {interactCheckedObj.interactName}
                          labelName = '姓名'
                          getInputValue = {getInteractInput}/>
                        <LabelInput
                          id = 'interactUid'
                          labelName = 'UID'
                          width = '84px'
                          disabled = {true}
                          defaultValue = {interactCheckedObj.uid}/>
                      </div>
                    }
                  </AddUserBlock>
                    : null
                }
              </div>
              <div style = {this.style.homeRight}>
                <AddUserBlock
                  title = '权限'
                  width = '269px'>
                  <PermissionList
                    permissionList = {permissionList}
                    permissionCheckedList = {permissionCheckedList.list}
                    permissionCheckedClick = {permissionChecked}/>
                </AddUserBlock>
              </div>
            </div>
            <div style = {this.style.homeButton}>
              <Button
                name = '取消'
                fontSize = '16px'
                borderColor = '#d6d6d6'
                backgroundColor = '#e6e6e6'
                color = '#323232'
                buttonClick = {cancelClick}/>
              <Button
                name = '确定'
                fontSize = '16px'
                borderColor = '#00b03d'
                backgroundColor = '#2ec75d'
                color = '#ffffff'
                buttonClick = {submitClick}/>
            </div>
          </div>
      </div>
        {
          alertObj.isShowAlert
            ?<Alert
              alertText = {alertObj.alertText}
              closeClick = {alertClick}/>
            : null
        }
      </div>
    );
  }
}

AddUserContainer.propTypes = {
  getRoleList: PropTypes.func.isRequired,
  getPartnersList: PropTypes.func.isRequired,
  roleList: PropTypes.array.isRequired,
  permissionList: PropTypes.array.isRequired,
  partnersList: PropTypes.array.isRequired,
  getUid: PropTypes.func.isRequired,
  uid: PropTypes.string.isRequired,
  roleChange: PropTypes.func.isRequired,
  isCheckedRoleId: PropTypes.number.isRequired,
  isPushMessageCountShow: PropTypes.bool.isRequired,
  pushMessageChange: PropTypes.func.isRequired,
  pushMessCountObj: PropTypes.object.isRequired,
  pushMessCountAdd: PropTypes.func.isRequired,
  pushMessCountDelete: PropTypes.func.isRequired,
  interactShow: PropTypes.bool.isRequired,
  permissionChecked: PropTypes.func.isRequired,
  permissionCheckedList: PropTypes.object.isRequired,
  interactCheckedObj: PropTypes.object.isRequired,
  interactCheckedChange: PropTypes.func.isRequired,
  submitClick: PropTypes.func.isRequired,
  cancelClick: PropTypes.func.isRequired,
  getUserMessageInput: PropTypes.func.isRequired,
  userInputValue: PropTypes.object.isRequired,
  getInteractInput: PropTypes.func.isRequired,
  alertObj: PropTypes.object.isRequired,
  alertClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    roleList: getRoleListState(state),
    permissionList: getPermissionListState(state),
    partnersList: getPartnersListState(state),
    uid: getUidState(state),
    isCheckedRoleId: getRoleChangeState(state),
    isPushMessageCountShow: getPushMessageShowState(state),
    pushMessCountObj: getPushMessageCountState(state),
    interactShow: getInteractShowState(state),
    permissionCheckedList: getPermissionCheckedState(state),
    interactCheckedObj: getInteractCheckedState(state),
    userInputValue: getUserMessageInputState(state),
    alertObj: getAlertState(state),
  };
};

export default connect(
  mapStateToProps,
  {
    getRoleList,
    getPartnersList,
    getUid,
    roleChange,
    pushMessageChange,
    pushMessCountAdd,
    pushMessCountDelete,
    permissionChecked,
    interactCheckedChange,
    submitClick,
    getUserMessageInput,
    getInteractInput,
    alertClick,
    cancelClick,
  }
)(AddUserContainer);
