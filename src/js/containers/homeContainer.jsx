import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './mcenterContainer.scss';
import LeftNav from '../component/leftNav/leftNav.jsx';
import NavBox from '../component/navBox/navBox.jsx';
import UserList from '../component/userList/userList.jsx';
import Filter from '../component/filter/filter.jsx';
import {
    getUserListState,
 } from '../reducers/home';

 import {
   getUserList,
   editUserStatus,
   delUser
 } from '../actions/index';

class HomeContainer extends Component {
  static propTypes = {
    userList: PropTypes.array,
    editUserStatus: PropTypes.func,
    delUser: PropTypes.func
  };

  componentWillMount() {
    this.props.getUserList()
  }

  render() {
    let filterShow;
    if (this.props.userList.length > 0) {
      filterShow = <Filter/>;
    } else {
      filterShow = '';
    }
    let _navInfo = {
      navTitles: ['用户'],
      url: ['/add'],
      borderColor: [''],
      btnShow: true,
      btnName: '新建'
    }
    return (
      <div className = "mcenterContainer">
        <div className = "rightBox">
          <NavBox { ..._navInfo }/>
          { filterShow }
          <UserList
          userList = { this.props.userList.slice(0,13) }
          editUserStatus = { this.props.editUserStatus }
          delUser = { this.props.delUser }
          />
        </div>
      </div>
    );
  }
}

HomeContainer.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    userList: getUserListState(state)
  };
};

export default connect(
  mapStateToProps,
  {
    getUserList,
    editUserStatus,
    delUser
  }
)(HomeContainer);
