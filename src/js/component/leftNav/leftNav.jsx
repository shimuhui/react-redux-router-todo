import React from 'react';
import PropTypes from 'prop-types';
import NavList from '../navList/navList.jsx';
import Config from '../../configs/config.js';

class LeftNav extends React.Component {
    constructor(props) {
        super(props);
        this._navClick = this._navClick.bind(this);
    }

  _navClick(url) {
    location.href = Config.rootDir + url;
  }

    render() {
        return (
            <div style = {styles.leftNav}>
              <ul>
                <NavList name = '用户'
                         isNavSelected = {
                           this.props.name == '用户' ? true:false}
                          navClick = {() => {this._navClick('index');}}/>
                <NavList name = '相框'
                         isNavSelected = {
                           this.props.name == '相框' ? true:false}
                         navClick = {() => {this._navClick('add');}}/>
              </ul>
            </div>
        );
    }
}

LeftNav.propTypes = {
  name: PropTypes.string,
};

const styles = {
  leftNav: {
    float: 'left',
    width: '150px',
    minHeight: '100%',
    backgroundColor: '#94bddb',
    cursor: 'pointer',
  },
  icon: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  }
};
export default LeftNav;
