import React, {Component} from 'react';
import './userList.scss';
import UserTips from '../userTips/userTips.jsx';
import UserListTitle from '../userListTitle/userListTitle.jsx';
import UserItem from '../userItem/userItem.jsx';
import PropTypes from 'prop-types';
import Config from '../../configs/config';
import Alert from '../alert/alert.jsx';

class UserList extends Component {
  constructor(props) {
    super(props);
    this._delTipsBtnCancle = this._delTipsBtnCancle.bind(this);
    this._delTipsBtnOk = this._delTipsBtnOk.bind(this);
    this._delUser = this._delUser.bind(this);
    this.alertBoxClick = this.alertBoxClick.bind(this);
    this.alertBoxShow = this.alertBoxShow.bind(this);
    this.state = {
      userListStyle: {
        minHeight: 504,
      },
      noUser: {
        width: 182,
        height: 57,
        top: 160,
        left: 50 + '%',
        fontSize: 14 + 'px',
        color: '#8ebdd6',
        iconWidth: 43,
        iconHeignt: 29,
        tipheight: 14,
        tipShow: this.props.userList == '' ? true : false,
        iconSrc: Config.imgUrl + 'tipsIcon.png',
        tipInfoText: '系统刚开张，新建一个用户吧'
      },
      noFindUser: {
        width: 126,
        height: 57,
        top: 160,
        left: 50 + '%',
        fontSize: 14 + 'px',
        color: '#8ebdd6',
        iconWidth: 43,
        iconHeignt: 29,
        tipheight: 14,
        tipShow: false,
        iconSrc: Config.imgUrl + 'tipsIcon.png',
        tipInfoText: '暂无用户符合该条件'
      },
      userListTitle: [
        '姓名', '手机号码', '所属公司', '角色', '创建者', '创建时间', '最后登录时间'
      ],
      delTipsToggleClass: {
        flag: false,
        active: 'delTipsToggleClass'
      },
      id: ''
    };
  }
  render() {
    let userTipsShow;
    let userListTitle;
    let number = -1;
    if (this.props.userList.length == 0) {
      userTipsShow = <UserTips {...this.state.noUser}/>;
      userListTitle = '';
    } else {
      userTipsShow = '';
      userListTitle = <UserListTitle titles = {this.state.userListTitle}/>;
    }
    return <div className = "userList"
      style = {this.state.userListStyle}
    >
      <div className = "alertBox" ref = "alertBox">
        <Alert
          alertText = '测试人员不能删除'
          closeClick = {this.alertBoxClick}
        />
      </div>
      { userTipsShow }
      { userListTitle }
      <ul>
      {
        this.props.userList
        ? Object.values(this.props.userList).map((v, i) => {

            if (v.status != 0) {
              number++;
              return <UserItem
                userInfo = {v}
                key = { i }
                num = { number }
                editUserStatus = { this.props.editUserStatus }
                delUser = { this._delUser }
                goHerf = { this.props.goHerf }
                alertBoxShow = { this.alertBoxShow }
                />;
            }
          }) : ''
      }
      <li className = "delTips" ref = "delTips">
        <div className = "delTips_Title">确定删除此用户？</div>
        <div>
          <span className = "delTips_Btn delTips_Cancel"
            onClick = { this._delTipsBtnCancle }
          >取消</span>
          <span className = "delTips_Btn delTips_Ok"
            onClick = { this._delTipsBtnOk }
          >确定</span>
        </div>
      </li>
      </ul>
    </div>;
  }

  _delTipsBtnCancle() {
    this.refs.delTips.style.display = 'none';
  }
  _delUser(id, key) {
    this.refs.delTips.style.top = 50 * key - 38 + 'px';
    this.refs.delTips.style.display = 'block';
    this.setState({
      id: id
    });
  }
  _delTipsBtnOk() {
    let id = this.state.id;
    this.props.delUser(id);
    this.refs.delTips.style.display = 'none';
  }
  alertBoxClick() {
    this.refs.alertBox.style.display = 'none';
  }
  alertBoxShow() {
    this.refs.alertBox.style.display = 'block';
  }
}

UserList.propTypes = {
  userList: PropTypes.array,
  length: PropTypes.string,
  editUserStatus: PropTypes.func,
  delUser: PropTypes.func,
  goHerf: PropTypes.func
};

export default UserList;
