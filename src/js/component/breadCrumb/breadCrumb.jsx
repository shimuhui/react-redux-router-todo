import React, {Component} from 'react';
import './breadCrumb.scss';
import PropTypes from 'prop-types';

class BreadCrumb extends Component {
  constructor(props) {
    super(props);
    this._goHerf = this._goHerf.bind(this);
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
    return <div onClick = {this._goHerf}
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
    </div>;
  }

  _goHerf() {
    let herf = {
      url: this.props.url,
      data: ''
    }
    this.props.goHerf(herf);
  }
}

BreadCrumb.propTypes = {
  url: PropTypes.string.isRequired,
  aBgColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  goHerf: PropTypes.func.isRequired
};

export default BreadCrumb;
