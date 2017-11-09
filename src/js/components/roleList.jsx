import React from 'react';
import PropTypes from 'prop-types';
import OvalLabel from '../component/ovalLabel/ovalLabel.jsx';

class RoleList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillMount() {

    this.style = {
      ovalLabelGroupStyle: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  _roleChangeClick(id, name) {
    this.props.changeClick(id, name);
  }

  render() {
    const {
      ovalData,
      isCheckedId,
    } = this.props;

    return (
      <div style = {this.style.ovalLabelGroupStyle}>
        {
          ovalData.map((item, id) => {
            return (
              <div key = {id}>
                <OvalLabel
                  ovalLabelId = {item.id}
                  labelName = {item.name}
                  isChecked = {isCheckedId == item.id ? true:false}
                  ovalLabelClick = {
                    () => {this._roleChangeClick(item.id, item.name);}}/>
              </div>
            );
          })
        }
      </div>
    );
  }
}

RoleList.propTypes = {
  ovalData: PropTypes.array.isRequired,
  changeClick: PropTypes.func.isRequired,
  isCheckedId: PropTypes.number.isRequired,
};

RoleList.defaultProps = {
  ovalData: [],
};

export default RoleList;
