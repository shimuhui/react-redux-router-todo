import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AddUserHome from '../components/addUserHome.jsx';

import {
  radioChange,
  radioInputChange,
  getRoleList,
} from '../actions/index';

import {
  getRoleListState
} from '../reducers/home';

class AddUserContainer extends Component {
  static propTypes = {
    test: PropTypes.object,
  };

  componentWillMount() {
    this.props.getRoleList();
  }

  render() {
    const {
      roleList,
      radioChange,
      radioInputChange,
    } = this.props;

    return (
      <div className = "rightMain">
        <AddUserHome
          roleList = {roleList}
          radioChange = {radioChange}
          radioInputChange = {radioInputChange}/>
      </div>
    );
  }
}

AddUserContainer.propTypes = {
  radioChange: PropTypes.func.isRequired,
  radioInputChange: PropTypes.func.isRequired,
  getRoleList: PropTypes.func.isRequired,
  roleList: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    roleList: getRoleListState(state),
  };
};

export default connect(
  mapStateToProps,
  {
    radioChange,
    radioInputChange,
    getRoleList,
  }
)(AddUserContainer);
