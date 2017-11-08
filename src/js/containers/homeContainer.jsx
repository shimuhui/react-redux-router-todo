import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './mcenterContainer.scss';
import LeftNav from '../component/leftNav/leftNav.jsx';
import NavBox from '../component/navBox/navBox.jsx';
import UserList from '../component/userList/userList.jsx';
import Filter from '../component/filter/filter.jsx';

class HomeContainer extends Component {
  static propTypes = {
  };

  componentWillMount() {
  }

  render() {
    var arr = {
      0: {
        name: '高清',
        phone: '13329069999',
        gon: '蛙鸣',
        use: '管理员',
        creat: '周振林',
        shijian: '2017-01-22 10:09',
        zuih: '2018-01-22 10:09'
      },
      1: {
        name: '选之前',
        phone: '13329069999',
        gon: '爱奇艺',
        use: '管理员',
        creat: '周振林',
        shijian: '2017-01-22 10:09',
        zuih: '2018-01-22 10:09'
      }
    };
    return (
      <div className = "mcenterContainer">
        <div className = "rightBox">
          <NavBox/>
          <Filter/>
          <UserList userList = {arr}/>
        </div>
      </div>
    );
  }
}

HomeContainer.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(
  mapStateToProps,
  {
  }
)(HomeContainer);
