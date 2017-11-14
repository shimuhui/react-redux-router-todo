import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './userItem.scss';
import Actionbtns from '../actionbtns/actionbtns.jsx';

class UserItem extends Component {
  constructor(props) {
    super(props);
    this._editUserStatus = this._editUserStatus.bind(this);
    this._delUser = this._delUser.bind(this);
  }
  render() {
    let cTime = new Date(this.props.userInfo.createTime);
    let cTimeNew = cTime.toLocaleDateString();
    let lastLoginTime = new Date(this.props.userInfo.lastLoginTime);
    let lastLoginTimeNew = lastLoginTime.toLocaleDateString();
    return <li className = 'userItem' >
        <ul className = 'userInfo'
          id = { this.props.userInfo.userIdEncry }
          type = { this.props.userInfo.status }
          ref = "item"
        >
                <li
                    className = "infoText">
                    { this.props.userInfo.name }
                </li>
                <li
                    className = "infoText">
                    { this.props.userInfo.phone }
                </li>
                <li
                    className = "infoText">
                    { this.props.userInfo.partnerName }
                </li>
                <li
                    className = "infoText"
                    ref = "roleName"
                    id = { this.props.userInfo.roleName }
                    >
                    { this.props.userInfo.roleName }
                </li>
                <li
                    className = "infoText">
                    { this.props.userInfo.creatorName }
                </li>
                <li
                    className = "infoText">
                    { cTimeNew }
                </li>
                <li
                    className = "infoText">
                    { lastLoginTimeNew }
                </li>
        </ul>
        <div className = 'userItemBtn'
            id = { this.props.num }
            ref = "btn"
        >
          <Actionbtns status = { this.props.userInfo.status }
            editUserStatus = {this._editUserStatus }
            delUser = { this._delUser }
            id = { this.props.userInfo.userIdEncry }
            goHerf = { this.props.goHerf }
          />
        </div>
    </li>;
  }

  _editUserStatus() {
    let info = {
      id: this.refs.item.id,
      status: this.refs.item.type
    };
    this.props.editUserStatus(info);
  }

  _delUser() {
    if (this.refs.roleName.id == '测试人员') {
      this.props.alertBoxShow();
    } else {
      this.props.delUser(this.refs.item.id, this.refs.btn.id);
    }
  }
}

UserItem.propTypes = {
  userInfo: PropTypes.array.isRequired,
  editUserStatus: PropTypes.func.isRequired,
  delUser: PropTypes.func.isRequired,
  userIdEncry: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  goHerf: PropTypes.func.isRequired,
  num: PropTypes.string.isRequired,
  alertBoxShow: PropTypes.func.isRequired
};

export default UserItem;
