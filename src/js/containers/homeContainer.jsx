import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

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
      const {
        test
      } = this.props;
      return (
          <div>
            { test.value }
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
