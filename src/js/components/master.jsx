import React from 'react';
// import {Link} from 'react-router';
import PropTypes from 'prop-types';

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
          <div>
              { children }
          </div>
        );
    }
}
Master.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Master;
