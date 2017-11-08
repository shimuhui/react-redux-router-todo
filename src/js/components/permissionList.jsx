import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../component/checkbox/checkbox.jsx';

class PermissionList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

    this.style = {
      checkboxGroupStyle: {
        marginTop: '10px',
      },
      checkboxListStyle: {
        marginBottom: '14px',
      },
      noList: {
        fontSize: '12px',
        lineHeight: '12px',
        color: '#323232',
      }
    };
  }

  _permissionCheckedClick(id) {
    this.props.permissionCheckedClick(id);
  }

  render() {

    const {
      permissionList,
      permissionCheckedList,
    } = this.props;

    return (
      <div style = {this.style.checkboxGroupStyle}>
        {
          permissionList.length != 0
            ? permissionList.map((item, id) => {
                return (
                <div key = {id} style = {this.style.checkboxListStyle}>
                  <Checkbox
                    checkboxId = {item.id}
                    name = {item.name}
                    isChecked = {
                      permissionCheckedList.indexOf(item.id) == -1
                        ? false:true}
                    checkboxClick = {
                      () => {this._permissionCheckedClick(item.id);}}/>
                </div>
                );
              })
            : <p style = {this.style.noList}>暂无</p>
        }
      </div>
    );
  }
}

PermissionList.propTypes = {
  permissionList: PropTypes.array.isRequired,
  permissionCheckedClick: PropTypes.func.isRequired,
  permissionCheckedList: PropTypes.array.isRequired,
};

export default PermissionList;
