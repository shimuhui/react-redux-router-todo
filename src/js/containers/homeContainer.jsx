import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './mcenterContainer.scss';

import NavBox from '../component/navBox/navBox.jsx';
import UserList from '../component/userList/userList.jsx';
import Filter from '../component/filter/filter.jsx';
import {
    getUserListState,
    getUserStatusState
 } from '../reducers/home';

import {
  getPartnersList
} from '../actions/addUser';

import {
  getPartnersListState,
} from '../reducers/addUser';

 import {
   getUserList,
   editUserStatus,
   delUser,
   goHerf,
   getUserStatus
 } from '../actions/index';

class HomeContainer extends Component {

  componentWillMount() {
    this.props.getUserList();
    this.props.getUserStatus();
    this.props.getPartnersList();
  }

  render() {
    const {
      userList,
      userStatus,
      partnersList,
      editUserStatus,
      delUser,
      goHerf
    } = this.props;

    let filterShow;
    let filterInfo = {
      selectStatus: userStatus,
      selectCompany: partnersList
    };
    if (userList.length > 0) {
      filterShow = <Filter { ...filterInfo }/>;
    } else {
      filterShow = '';
    }
    let _navInfo = {
      navTitles: ['用户'],
      url: [''],
      borderColor: [''],
      btnShow: true,
      btnName: '新建用户'
    };
    return (
      <div className = "mcenterContainer">
        <div className = "rightBox">
          <NavBox { ..._navInfo }
            goHerf = { this.props.goHerf }
          />
          { filterShow }
          <UserList
          userList = { userList }
          editUserStatus = { editUserStatus }
          delUser = { delUser }
          goHerf = { goHerf }
          />
        </div>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  getUserList: PropTypes.func.isRequired,
  getUserStatus: PropTypes.func.isRequired,
  userList: PropTypes.array.isRequired,
  goHerf: PropTypes.func.isRequired,
  editUserStatus: PropTypes.func.isRequired,
  delUser: PropTypes.func.isRequired,
  getPartnersList: PropTypes.func.isRequired,
  userStatus: PropTypes.array.isRequired,
  partnersList: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    userList: getUserListState(state),
    userStatus: getUserStatusState(state),
    partnersList: getPartnersListState(state)
  };
};

export default connect(
  mapStateToProps,
  {
    getUserList,
    getUserStatus,
    getPartnersList,
    editUserStatus,
    delUser,
    goHerf
  }
)(HomeContainer);
