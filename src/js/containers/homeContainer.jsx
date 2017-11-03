import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Home from '../components/home.jsx';

import {
  getHelloWorldState
} from '../reducers/index';

class HomeContainer extends Component {
  static propTypes = {
    test: PropTypes.object,
  };

  componentDidMount() {
  }

  render() {
    return (
        <div className = "rightMain">
          <Home/>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    test: getHelloWorldState(state),
  };
};

export default connect(
  mapStateToProps,
  {
  }
)(HomeContainer);
