import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './userListTitle.scss';

class UserListTitle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ul className = 'userListTitleBox'>
      {
        this.props.titles.map((v, i) => {
          return <li key = {i}
            className = 'infoTitle'
          >{ v }</li>;
        })
      }
      <li className = 'btnTitle'>操作</li>
    </ul>;
  }
}

UserListTitle.propTypes = {
    titles: PropTypes.array.isRequired
};

export default UserListTitle;
