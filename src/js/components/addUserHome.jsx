import React from 'react';
import PropTypes from 'prop-types';
import AddUserBlock from './addUserBlock.jsx';
import Button from '../component/button/button.jsx';
import LabelInput from '../component/labelInput/labelInput.jsx';
import RoleList from './roleList.jsx';
import Radio from '../component/radio/radio.jsx';
import PermissionList from './permissionList.jsx';
import PushMessageCount from './pushMessageCount.jsx';

class AddUserHome extends React.Component {
  constructor(props) {
      super(props);
      this._radioChange = this._radioChange.bind(this);
      this._roleChange = this._roleChange.bind(this);
      this._pushMessCountAdd = this._pushMessCountAdd.bind(this);
      this._pushMessCountChange = this._pushMessCountChange.bind(this);
      this._pushMessCountDelete = this._pushMessCountDelete.bind(this);
      this.state = {
        firstRadioChecked: true,
        isPushMessageCountShow: false,
        pushMessCountArr: [],
        pushMessCountIsCheckedId: 0,
        isShowInputButton: true,
        isInteractRadioShow: false,
      };
  }

  componentWillMount() {

    this.style = {
      homeRight: {
        position: 'absolute',
        right: '0px',
        top: '0px',
        height: '100%',
        paddingBottom: '20px',
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

  //相框互动选择事件
  _radioChange() {
    this.setState((prevState) => {
      return {
        firstRadioChecked: !prevState.firstRadioChecked};
    });
  }

  //角色选择事件
  _roleChange(id, name) {
    this.props.getPermissionList(id);

    if (
      name == '运营人员' ||
      name == '合作伙伴管理员' ||
      name == '合作伙伴工作人员' ||
      name == '服务商-健康服务类' ||
      name == '服务商-电子商务类') {

      this.setState({
        isPushMessageCountShow: true,
        isInteractRadioShow: false,
        isShowInputButton: true,
        pushMessCountIsCheckedId: 0,
        pushMessCountArr: [1, 2, 3, 4, 5],
      });
    } else if (name == '测试人员') {

      this.setState({
        pushMessCountIsCheckedId: 0,
        isPushMessageCountShow: true,
        isInteractRadioShow: true,
        pushMessCountArr: ['不限制'],
        isShowInputButton: false,
      });
    } else {
      this.setState({
        isPushMessageCountShow: false,
        isInteractRadioShow: false,
      });
    }
  }

 //推动消息数量添加事件
  _pushMessCountAdd(value) {
    let r = /^\+?[1-9][0-9]*$/;

    if (r.test(value)) {
      if (value > 5) {

        this.setState((prevState) => {
          let prevPushMessCountArr = prevState.pushMessCountArr;

          prevPushMessCountArr.push(parseInt(value));
          return {
            pushMessCountIsCheckedId: parseInt(value),
            pushMessCountArr: prevPushMessCountArr,
            isShowInputButton: false,
          };
        });
      } else {
        this.setState({
          pushMessCountIsCheckedId: parseInt(value),
        });
      }
    } else {
      alert('请输入正整数');
    }
  }

  //推动消息数量删除事件
  _pushMessCountDelete(value) {
    this.setState((prevState) => {
      let prevPushMessCountArr = prevState.pushMessCountArr;

      for (let i in prevPushMessCountArr) {

        if (prevPushMessCountArr[i] == value) {

          prevPushMessCountArr.splice(i);
          break;
        }
      }

      return {
        pushMessCountIsCheckedId:
          prevState.pushMessCountIsCheckedId > 5
            ? 1 : prevState.pushMessCountIsCheckedId,
        pushMessCountArr: prevPushMessCountArr,
        isShowInputButton: true,
      };
    });
  }

  //推动消息数量选择事件
  _pushMessCountChange(value) {
    this.setState({
      pushMessCountIsCheckedId: parseInt(value),
    });
  }

  render() {

    const {
      roleList,
      permissionList,
      partnersList,
      uid,
    } = this.props;

    console.log(this.state.pushMessCountArr);

    return (
        <div>
          <div style = {this.style.homeMain}>
            <div>
              <AddUserBlock
                title = '信息'>
                <div style={this.style.blockLabelInput}>
                  <LabelInput labelName = '用户姓名'/>
                  <LabelInput labelName = '手机号码'/>
                  <LabelInput
                    labelName = '公司名称'
                    isSelect = {true}
                    selectList = {partnersList}/>
                  <LabelInput
                    labelName = 'UID'
                    width = '80px'
                    disabled = {true}
                    defaultValue = {uid}/>
                </div>
              </AddUserBlock>
              <AddUserBlock
                title = '角色'>
                <div style={this.style.blockRoleList}>
                  <RoleList
                    ovalData = {roleList}
                    roleChangeClick = {this._roleChange}/>
                </div>
              </AddUserBlock>
              {
                this.state.isPushMessageCountShow
                ? <AddUserBlock
                    title = '每天可推送消息数'>
                    <div>
                      <PushMessageCount
                        showListArr = {this.state.pushMessCountArr}
                        isShowInputButton = {this.state.isShowInputButton}
                        pushMessCountChange = {this._pushMessCountChange}
                        isCheckedId = {this.state.pushMessCountIsCheckedId}
                        pushMessCountAdd = {this._pushMessCountAdd}
                        pushMessCountDelete = {this._pushMessCountDelete}/>
                    </div>
                  </AddUserBlock>
                : ''
              }

              {
                this.state.isInteractRadioShow
                  ? <AddUserBlock
                      title = '相框互动'>
                      <div style={this.style.blockRadio}>
                        <Radio
                          text = '没有'
                          isChecked = {this.state.firstRadioChecked}
                          radioChange = {this._radioChange}/>
                        <Radio
                          text = '有'
                          isChecked = {!this.state.firstRadioChecked}
                          radioChange = {this._radioChange}/>
                      </div>
                      {
                        this.state.firstRadioChecked
                          ? ''
                          : <div>
                          <h4
                            style = {this.style.radioHaveMessageTitle}>
                            互动角色信息
                          </h4>
                          <LabelInput labelName = '手机号码'/>
                          <LabelInput labelName = '姓名'/>
                          <LabelInput
                            labelName = 'UID'
                            width = '80px'
                            disabled = {true}
                            defaultValue = {uid}/>
                        </div>
                      }
                    </AddUserBlock>
                  : ''
              }

            </div>
            <div style = {this.style.homeRight}>
              <AddUserBlock
                title = '权限'
                width = '269px'>
                <PermissionList
                  permissionList = {permissionList}/>
              </AddUserBlock>
            </div>
          </div>
          <div style = {this.style.homeButton}>
            <Button
              name = '取消'
              fontSize = '16px'
              borderColor = '#d6d6d6'
              backgroundColor = '#e6e6e6'
              color = '#323232'/>
            <Button
              name = '确定'
              fontSize = '16px'
              borderColor = '#00b03d'
              backgroundColor = '#2ec75d'
              color = '#ffffff'
              buttonClick = {this._buttonClick}/>
          </div>

        </div>
    );
  }
}
AddUserHome.propTypes = {
  radioChange: PropTypes.func.isRequired,
  radioInputChange: PropTypes.func.isRequired,
  roleList: PropTypes.array.isRequired,
  permissionList: PropTypes.array.isRequired,
  getPermissionList: PropTypes.func.isRequired,
  partnersList: PropTypes.array.isRequired,
  uid: PropTypes.string.isRequired,
};
export default AddUserHome;
