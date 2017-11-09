import React, {Component} from 'react';
import { Link } from "react-router";
import PropTypes from 'prop-types';
import './actionbtns.scss';

class Actionbtns extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let btnStatus = {
      edit: this.props.status == 2 ? 'btn' : 'btn toggleClass',
      lock: this.props.status == 1 ? '解锁' : '锁定'
    };
    let editUrl = '/editUser/:' + this.props.id;
    return <ul className = "actionbtns">
      <li className = {btnStatus.edit}>
        <Link to = { editUrl }>
          <span className = "icon">+</span>
          <span className = "name">编辑</span>
        </Link>
      </li>
      <li className = "btn">
        <div onClick = { this.props.editUserStatus }>
          <span className = "icon">🔒</span>
          <span className = "name">{ btnStatus.lock }</span>
        </div>
      </li>
      <li className = "btn">
        <div onClick = { this.props.delUser }>
          <span className = "icon">-</span>
          <span className = "name del">删除</span>
        </div>
      </li>
    </ul>
  }
}

Actionbtns.propTypes = {
  status: PropTypes.string.isRequired,
  editUserStatus: PropTypes.func.isRequired,
  delUser: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default Actionbtns;
