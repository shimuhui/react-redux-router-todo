import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './userItem.scss';
import Actionbtns from '../actionbtns/actionbtns.jsx';

class UserItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <li className = 'userItem'>
        <ul className = 'userInfo'>
            {
              Object.values(this.props.userInfo).map((v, i) => {
                return <li key = {i}
                    className = "infoText"
                >
                    { v }
                </li>;
              })
            }
        </ul>
        <div className = "userItemBtn">
          <Actionbtns/>
        </div>
    </li>;
  }
}

UserItem.propTypes = {
  userInfo: PropTypes.array.isRequired
};

export default UserItem;
