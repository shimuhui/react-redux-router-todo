import React from 'react';
import PropTypes from 'prop-types';
import Config from '../../configs/config.js';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this._checkClick = this._checkClick.bind(this);
  }

  componentWillMount() {

    this.style = {
      checkboxStyle: {
        display: 'flex',
        alignItems: 'center',
        height: '14px',
        lineHeight: '14px',
        fontSize: '12px',
        color: '#323232',
        cursor: 'pointer',
      },
      checkbox: {
        display: 'block',
        marginRight: '6px',
        width: '12px',
        height: '12px',
        border: '1px solid',
        borderRadius: '2px',
        backgroundImage: 'url(' + Config.imgUrl + 'checkMark.png)',
        backgroundSize: '8px 7px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      },
      checkboxNoChecked: {
        borderColor: '#cccccc',
      },
      checkboxChecked: {
        backgroundColor: '#2ec75d',
        borderColor: '#12b845',
      }
    };
  }

  _checkClick() {
    this.props.checkboxClick();
  }

  render() {
    const {
      isChecked,
      name,
    } = this.props;

    return (
      <div
        style = {this.style.checkboxStyle}
        onClick = {this._checkClick}>
        <span
          className = 'checkbox'
          style = {isChecked
            ? Object.assign({},
              this.style.checkbox,
              this.style.checkboxChecked)
            : Object.assign({},
              this.style.checkbox,
              this.style.checkboxNoChecked)}></span>
        {name}
      </div>
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  checkboxClick: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {

};

export default Checkbox;
