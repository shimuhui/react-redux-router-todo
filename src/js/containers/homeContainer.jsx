import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class HomeContainer extends Component {
  static propTypes = {
  };

  componentWillMount() {
  }

  render() {

    return (
      <div></div>
    );
  }
}

HomeContainer.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(
  mapStateToProps,
  {
  }
)(HomeContainer);
