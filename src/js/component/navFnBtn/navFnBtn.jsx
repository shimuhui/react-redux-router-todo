import React, { Component } from 'react';
// import { Link } from 'react-router';
import './navFnBtn.scss';
import PropTypes from 'prop-types';

class NavFnBtn extends Component {
  constructor(props) {
    super(props);
    this._goHerf = this._goHerf.bind(this);
  }

  render() {
    return <div onClick = { this._goHerf } className = "navFnBtn">
      <span className = "icon">{ this.props.icon }</span>
      <span className = "name">{ this.props.name }</span>
    </div>;
  }

  _goHerf() {
    let herf = {
      url: 'add',
      data: ''
    };
    this.props.goHerf(herf);
  }
}

NavFnBtn.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default NavFnBtn;
