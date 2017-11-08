import React from 'react';
import PropTypes from 'prop-types';
import './_navList.scss';


class NavList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <li
                style = {
                  this.props.isNavSelected
                  ?{backgroundColor: 'rgba(255,255,255,0.16)'}
                  :{}
                }
                className = "navList">
                <em
                  className = "navIcon"
                  style = {
                    this.props.isNavSelected
                    ?{backgroundColor: '#2ec75d'}
                    :{}
                  }
                ></em>
                <span>{this.props.name}</span>
              </li>
            </div>
        );
    }
}

NavList.propTypes = {
  name: PropTypes.string.isRequired,
  isNavSelected: PropTypes.bool.isRequired
};

export default NavList;
