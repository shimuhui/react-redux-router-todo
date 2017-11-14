import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './actionbtns.scss';

class Actionbtns extends Component {
  constructor(props) {
    super(props);
    this._goHerf = this._goHerf.bind(this);
  }
  render() {
    let btnStatus = {
      edit: this.props.status == 2 ? 'btn edit' : 'btn edit toggleClass',
      lock: this.props.status == 1 ? '解锁' : '锁定'
    };
    return <ul className = "actionbtns">
      <li className = {btnStatus.edit}>
        <div onClick = { this._goHerf }>
          <span className = "icon">+</span>
          <span className = "name">编辑</span>
        </div>
      </li>
      <li className = "btn lock">
        <div onClick = { this.props.editUserStatus }>
          <span className = "icon">🔒</span>
          <span className = "name">{ btnStatus.lock }</span>
        </div>
      </li>
      <li className = "btn delBox">
        <div onClick = { this.props.delUser }>
          <span className = "icon">-</span>
          <span className = "name del">删除</span>
        </div>
      </li>
    </ul>;
  }

  _goHerf() {
    let herf = {
      url: 'edit',
      data: this.props.id
    };
    this.props.goHerf(herf);
  }
}

Actionbtns.propTypes = {
  status: PropTypes.number.isRequired,
  editUserStatus: PropTypes.func.isRequired,
  delUser: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  goHerf: PropTypes.func.isRequired
};

export default Actionbtns;
