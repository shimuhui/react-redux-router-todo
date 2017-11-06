import React, { Component } from 'react';
import { Link } from 'react-router'
import './navFnBtn.scss';

class NavFnBtn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Link to = "/adduser" className = "navFnBtn">
      <span className = "icon">{ this.props.icon }</span>
      <span className = "name">{ this.props.name }</span>
    </Link>;
  }
}

export default NavFnBtn;
