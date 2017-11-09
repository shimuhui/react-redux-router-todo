import React, { Component } from 'react';
import './navBox.scss';
import BreadCrumb from '../breadCrumb/breadCrumb.jsx';
import NavFnBtn from '../navFnBtn/navFnBtn.jsx';
import PropTypes from 'prop-types';

class NavBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let _btnShow;
    if (this.props.btnShow) {
      _btnShow = 'addBtn'
    } else {
      _btnShow = 'addBtn addBtnNone'
    }
    let defaultStyle = {
      navTitles: this.props.navTitles ? this.props.navTitles : [],
      url: this.props.url ? this.props.url : [],
      borderColor: this.props.borderColor ? this.props.borderColor  : [],
      btnShow: this.props.btnShow ? this.props.btnShow : false,
      btnName: this.props.btnName ? this.props.btnName : ''
    }
    return <div className = "navBox">
      <div className = "breadCrumbBox">
      {
        defaultStyle.navTitles.map((v, i) => {
          return <BreadCrumb
            url = { defaultStyle.url[i] }
            goHerf = { this.props.goHerf }
            name = { v }
            show = { defaultStyle.navTitles.length > 1 ? true : false }
            aBgColor = { defaultStyle.borderColor[i+1] }
            borderColor = { defaultStyle.borderColor[i] }/>;
        })
      }
      </div>

      <div className = { _btnShow }>
        <NavFnBtn
        name = { defaultStyle.btnName || ''}
        icon = "+"
        goHerf = { this.props.goHerf }
        />
      </div>
    </div>
  }
}

NavBox.propTypes = {
  btnShow: PropTypes.bool.isRequired,
  navTitles: PropTypes.array.isRequired,
  url: PropTypes.array.isRequired,
  borderColor: PropTypes.array.isRequired,
  btnName: PropTypes.string.isRequired
}

export default NavBox;
