import React, {Component} from 'react';
import './userList.scss';
import UserTips from '../userTips/userTips.jsx';
import UserListTitle from '../userListTitle/userListTitle.jsx';
import UserItem from '../userItem/userItem.jsx';
import PropTypes from 'prop-types';
import Config from '../../configs/config';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userListStyle:{
        height: 504,
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
        tipShow: this.props.userList == ''? true : false,
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
      userListTitle:[
        '姓名','手机号码','所属公司','角色','创建者','创建时间','最后登陆时间'
      ]
    };
  }
  render() {
    let userTipsShow;
    let userListTitle;
    if ( this.props.userList.length == 0) {
      userTipsShow = <UserTips {...this.state.noUser}/>;
      userListTitle = '';
    } else {
      userTipsShow = '';
      userListTitle = <UserListTitle titles = {this.state.userListTitle}/>;
    }
    return <div className = "userList"
      style = {this.state.userListStyle}
    >
      { userTipsShow }
      { userListTitle }
      <ul>
      {
        this.props.userList?
          Object.values(this.props.userList).map((v, i) => {
            if( v.status != 0 ) {
              return <UserItem
                userInfo = {v}
                key = { i }
                editUserStatus = { this.props.editUserStatus }
                delUser = { this.props.delUser }
                />;
            }
          }) : ''
      }
      </ul>
    </div>;
  }
}

UserList.PropTypes = {
  userList: PropTypes.object.isRequired
}

export default UserList;
