import React from 'react';
import PropTypes from 'prop-types';
import NavList from '../navList/navList.jsx';

class LeftNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style = {styles.leftNav}>
              <ul>
                <NavList name = '用户'
                         isNavSelected = {
                           this.props.isNavSelected == 'user' ? true:false} />
                <NavList name = '相框'
                         isNavSelected = {
                           this.props.isNavSelected == 'photo' ? true:false} />
              </ul>
            </div>
        );
    }
}

LeftNav.propTypes = {
  isNavSelected: PropTypes.string,
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
