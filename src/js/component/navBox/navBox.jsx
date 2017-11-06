import React, { Component } from 'react';
import './navBox.scss';
import BreadCrumb from '../breadCrumb/breadCrumb.jsx';
import NavFnBtn from '../navFnBtn/navFnBtn.jsx';

class NavBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className = "navBox">
      <div className = "breadCrumbBox">
        <BreadCrumb link = "" name = "用户"/>
      </div>
      <div className = "addBtn">
        <NavFnBtn name = "新建用户" icon = "+"/>
      </div>
    </div>
  }
}

export default NavBox;
