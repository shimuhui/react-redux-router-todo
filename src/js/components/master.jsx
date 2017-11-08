import React from 'react';
// import {Link} from 'react-router';
import PropTypes from 'prop-types';
import LeftNav from '../component/leftNav/leftNav.jsx';

import '../../sass/main.scss';
class Master extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        const {
          children,
        } = this.props;
        return (
          <div className = "userWrapper">
              <LeftNav isNavSelected = 'user'/>
              { children }
          </div>
        );
    }
}
Master.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object,
};
export default Master;
