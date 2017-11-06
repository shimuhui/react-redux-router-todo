import React, {Component} from 'react';
import { Link } from "react-router";
import PropTypes from 'prop-types';
import './actionbtns.scss';

class Actionbtns extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ul className = "actionbtns">
      <li className = "btn">
        <Link to = "/editUser">
          <span className = "icon">+</span>
          <span className = "name">编辑</span>
        </Link>
      </li>
      <li className = "btn">
        <Link>
          <span className = "icon">🔒</span>
          <span className = "name">锁定</span>
        </Link>
      </li>
      <li className = "btn">
        <Link>
          <span className = "icon">-</span>
          <span className = "name del">删除</span>
        </Link>
      </li>
    </ul>
  }
}

Actionbtns.propTypes = {
}

export default Actionbtns;
