import React, {Component} from 'react';
import { Link } from 'react-router'
import './breadCrumb.scss';
import PropTypes from 'prop-types';

class BreadCrumb extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let styles = {
        border: {
            borderLeft: 14 + 'px solid ' + this.props.borderColor,
        },
        aBgColor: {
          background: this.props.aBgColor
        }
    };
    let sanJiaoClass = this.props.show ? 'sanJiao' : 'sanJiao showSanJiao';
    return <Link to = {this.props.url}
      style = { styles.aBgColor }
    className = 'breadCrumb'>
      <span
      style = {{background: this.props.borderColor ? this.props.borderColor : '#fff'}}
      className = "navName"
      >{this.props.name}</span>
      <span className = { sanJiaoClass }
        style = { styles.border }
      >
      </span>
    </Link>;
  }
}

BreadCrumb.propTypes = {
  url: PropTypes.string.isRequired,
  aBgColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default BreadCrumb;
