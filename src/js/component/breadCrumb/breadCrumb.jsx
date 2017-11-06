import React, {Component} from 'react';
import { Link } from 'react-router'
import './breadCrumb.scss';
import PropTypes from 'prop-types';

class BreadCrumb extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Link to = {this.props.address}
    className = 'breadCrumb'
      style = {{background: this.props.bg ? this.props.bg : '#fff'}}
    >{this.props.name}</Link>;
  }
}

BreadCrumb.propTypes = {
  address: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default BreadCrumb;
