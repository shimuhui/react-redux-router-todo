import React from 'react';
// import PropTypes from 'prop-types';
import NavList from '../navList/navList.jsx';

class leftNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style = {styles.leftNav}>
              <ul>
                <NavList name = '用户' isNavSelected = {true} />
                <NavList name = '相框' isNavSelected = {false} />
              </ul>
            </div>
        );
    }
}

leftNav.propTypes = {
};

const styles = {
  leftNav: {
    float: 'left',
    width: '150px',
    minHeight: '100%',
    backgroundColor: '#94bddb',
  },
  icon: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  }
};
export default leftNav;
